/**
 * DEVELOPMENT WEBPACK CONFIGURATION
 */
const path = require('path');
const configFactory = require('@roybailey/webpack/webpack.dev.babel');
const baseConfigFactory = require('./webpack.base.babel');
const corePath = process.cwd();

module.exports = configFactory({
  baseConfigFactory,
  corePath,
  entryPath: path.join(corePath, 'src/index.tsx'),
  templatePath: path.join(corePath, 'src/index.html'),
});
