/* eslint-disable global-require */
const path = require('path');
const argv = require('../argv');
let webpackConfig;
let configPath;

try {
  configPath = path.resolve(process.cwd(), argv.config);
  webpackConfig = require(configPath);
} catch (err) {
  throw err;
  if (configPath) {
    throw new Error(`Unable to load webpack config from ${configPath}`);
  } else {
    throw new Error('No webpack config provided. Use `--config PATH_TO_WEBPACK_CONFIG`');
  }
}

/**
 * Front-end middleware
 */
module.exports = (app, options) => {
  const isProd = process.env.NODE_ENV === 'production';

  if (isProd) {
    const addProdMiddlewares = require('./addProdMiddlewares');
    addProdMiddlewares(app, options);
  } else {
    const addDevMiddlewares = require('./addDevMiddlewares');
    addDevMiddlewares(app, webpackConfig);
  }

  return app;
};
