/**
 * WEBPACK DLL GENERATOR
 *
 * This profile is used to cache webpack's module
 * contexts for external library and framework type
 * dependencies which will usually not change often enough
 * to warrant building them from scratch every time we use
 * the webpack process.
 */

const { join } = require('path');
const defaults = require('lodash/defaultsDeep');
const webpack = require('webpack');

module.exports = options => {
  const pkg = require(join(options.corePath, 'package.json'));
  const { dllPlugin } = require('@roybailey/dev-dll-packager/config.js');

  if (!pkg.dllPlugin) {
    process.exit(0);
  }

  const dllConfig = defaults(pkg.dllPlugin, dllPlugin.defaults);
  const outputPath = join(options.corePath, dllConfig.path);

  return options.baseConfigFactory({
    corePath: options.corePath,
    mode: 'development',
    context: options.corePath,
    entry: dllConfig.dlls ? dllConfig.dlls : dllPlugin.entry(pkg),
    optimization: {
      minimize: false,
    },
    devtool: 'eval',
    output: {
      filename: '[name].dll.js',
      path: outputPath,
      library: '[name]',
    },
    plugins: [
      new webpack.DllPlugin({
        name: '[name]',
        path: join(outputPath, '[name].json'),
      }),
    ],
    performance: {
      hints: false,
    },
  });
};
