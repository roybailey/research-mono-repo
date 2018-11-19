module.exports = {
  testURL: 'http://localhost',
  collectCoverageFrom: [
    '{src,app}/**/*.{ts,tsx}',
    '!{src,app}/**/*.test.{ts,tsx}',
    '!{src,app}/**/*.story.{ts,tsx}',
    '!{src,app}/*/*/Loadable.{ts,tsx}',
    '!{src,app}/*/RbGenerated*/*.{ts,tsx}',
    '!{src,app}/app.ts',
    '!{src,app}/global-styles.ts'
  ],
  coverageThreshold: {
    global: {
      statements: 75,
      branches: 88,
      functions: 75,
      lines: 70
    }
  },
  moduleDirectories: [
    'node_modules',
    'app'
  ],
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json'
  ],
  setupFiles: [
    "<rootDir>/node_modules/@roybailey/jest-preset/axios-setup.js",
    "<rootDir>/node_modules/@roybailey/jest-preset/timezone-setup.js"
  ],
  transform: {
    '^.+\\.(ts|js)$': 'ts-jest',
    '^.+\\.(tsx|jsx)$': '<rootDir>/node_modules/@roybailey/jest-preset/no-tsx-warning.js'
  },
  transformIgnorePatterns: [
    '/node_modules/(?!@roybailey/).+'
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/node_modules/',
    '<rootDir>/build/',
    '<rootDir>/dist/'
  ],
  globals: {
    'ts-jest': {
      tsConfigFile: './tsconfig.test.json'
    }
  },
  moduleNameMapper: {
    '@roybailey/i18n$': '<rootDir>/node_modules/@roybailey/jest-preset/mocks/i18n.js',
    '.*\\.(css|less|styl|scss|sass)$': '<rootDir>/node_modules/@roybailey/jest-preset/mocks/cssModule.js',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/node_modules/@roybailey/jest-preset/mocks/image.js'
  },
  testRegex: '.+\.(test|spec)\.tsx?$'
}
