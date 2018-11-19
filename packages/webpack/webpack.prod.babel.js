// Important modules this config uses
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const { HashedModuleIdsPlugin } = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = options => {
  // In production, we skip all hot-reloading stuff
  const entry = Object.assign({}, options.entryPaths);

  if (options.entryPath) {
    entry.app = options.entryPath;
  }

  return options.baseConfigFactory({
    corePath: options.corePath,
    mode: 'production',
    entry,

    // Utilize long-term caching by adding content hashes (not compilation hashes) to compiled assets
    output: {
      filename: '[name].[chunkhash].js',
      chunkFilename: '[name].[chunkhash].chunk.js',
    },

    optimization: {
      minimize: true,
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            nameCache: {},
            mangle: {
              properties: {
                //mangle client names used as variables or property names in production code
                regex: /(citizens|wellsfargo)/i,
              },
            },
          },
        }),
      ],
      nodeEnv: 'production',
      sideEffects: true,
      concatenateModules: true,
      splitChunks: { chunks: 'all' },
      runtimeChunk: true,
    },

    plugins: [
      // Minify and optimize the index.html
      new HtmlWebpackPlugin({
        template: options.templatePath,
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true,
        },
        inject: true,
      }),

      new WebpackPwaManifest({
        name: 'React Boilerplate',
        short_name: 'React BP',
        description: 'My React Boilerplate-based project!',
        background_color: '#fafafa',
        theme_color: '#b1624d',
        icons: [
          {
            src: path.resolve(options.corePath, 'app/images/icon-512x512.png'),
            sizes: [72, 96, 120, 128, 144, 152, 167, 180, 192, 384, 512],
          },
        ],
      }),

      new HashedModuleIdsPlugin({
        hashFunction: 'sha256',
        hashDigest: 'hex',
        hashDigestLength: 20,
      }),
    ],

    performance: {
      assetFilter: assetFilename => !/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename),
    },
  });
};
