const basePreset = require('../jest-preset');

module.exports = {
  ...basePreset,
  transform: {
    '^.+\\.(tsx?|jsx?)$': 'ts-jest',
  },
  setupFiles: basePreset.setupFiles.concat(['<rootDir>/node_modules/@roybailey/jest-preset/react/enzyme-setup.js']),
  setupTestFrameworkScriptFile: '<rootDir>/node_modules/@roybailey/jest-preset/react/test-bundler.js',
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
