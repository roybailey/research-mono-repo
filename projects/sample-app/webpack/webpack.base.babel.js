/**
 * COMMON WEBPACK CONFIGURATION
 */

const baseConfigFactory = require('@roybailey/webpack/webpack.base.babel');

module.exports = options => {
  const baseConfig = baseConfigFactory(options);
  baseConfig.output.publicPath = '/x/';
  return baseConfig;
};
