/**
 * WEBPACK DLL GENERATOR
 *
 * This profile is used to cache webpack's module
 * contexts for external library and framework type
 * dependencies which will usually not change often enough
 * to warrant building them from scratch every time we use
 * the webpack process.
 */

const configFactory = require('@roybailey/webpack/webpack.dll.babel');
const baseConfigFactory = require('./webpack.base.babel');
const corePath = process.cwd();

module.exports = configFactory({ baseConfigFactory, corePath });
