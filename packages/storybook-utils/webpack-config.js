const path = require('path');
const webpack = require('webpack');
const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin');
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;

module.exports = (config, configFile = `${process.cwd()}/storybook-tsconfig.json`) => {
    const pkg = require(path.resolve(process.cwd(), 'package.json'));

    config.module.rules.push({
        test: /\.ts|\.tsx$/,
        exclude: /node_modules/,
        use: {
            loader: 'ts-loader',
            options: {
                transpileOnly: true,
                allowTsInNodeModules: true,
                getCustomTransformers: () => ({
                    before: [createStyledComponentsTransformer()],
                }),
                configFile
            }
        },
    });
    config.plugins.push(new TSDocgenPlugin());
    const plugin = {
        'process.env': {
            NAME: JSON.stringify(pkg.name),
            BUILD_VERSION: JSON.stringify(pkg.version),
        }
    };
    console.log(JSON.stringify(plugin,null,2));
    config.plugins.push(
        new webpack.DefinePlugin({
            'process.env': {
                NAME: JSON.stringify(pkg.name),
                BUILD_VERSION: JSON.stringify(pkg.version),
            }
        })
    );
    config.resolve.extensions.push('.ts','.tsx');

    return config;
};