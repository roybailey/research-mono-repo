/**
 * PRODUCTION WEBPACK CONFIGURATION
 */
const path = require('path');
const configFactory = require('@roybailey/webpack/webpack.prod.babel');
const baseConfigFactory = require('./webpack.base.babel');
const corePath = process.cwd();

module.exports = configFactory({
  baseConfigFactory,
  corePath,
  entryPath: path.join(corePath, 'app/app.tsx'),
  templatePath: path.join(corePath, 'app/index.html'),
});
