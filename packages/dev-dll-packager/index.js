// No need to build the DLL in production
if (process.env.NODE_ENV === 'production') {
  process.exit(0);
}

require('shelljs/global');

const path = require('path');
const fs = require('fs');
const argv = require('minimist')(process.argv.slice(2));
const exists = fs.existsSync;
const writeFile = fs.writeFileSync;

const defaults = require('lodash/defaultsDeep');
const pkg = require(path.join(process.cwd(), 'package.json'));
const config = require('./config');
const dllConfig = defaults(pkg.dllPlugin, config.dllPlugin.defaults);
const outputPath = path.join(process.cwd(), dllConfig.path);
const dllManifestPath = path.join(outputPath, 'package.json');

if (!argv.config) {
  throw new Error('No webpack config provided. Use `--config PATH_TO_WEBPACK_CONFIG`');
}

/**
 * I use node_modules/react-boilerplate-dlls by default just because
 * it isn't going to be version controlled and babel wont try to parse it.
 */
mkdir('-p', outputPath);

echo(`Building the Webpack DLL in ${outputPath}...`);

/**
 * Create a manifest so npm install doesn't warn us
 */
if (!exists(dllManifestPath)) {
  writeFile(
    dllManifestPath,
    JSON.stringify(
      defaults({
        name: 'react-boilerplate-dlls',
        private: true,
        author: pkg.author,
        repository: pkg.repository,
        version: pkg.version,
      }),
      null,
      2,
    ),
    'utf8',
  );
}

// the BUILDING_DLL env var is set to avoid confusing the development environment
const webpackConfigPath = path.resolve(process.cwd(), argv.config);
if (fs.statSync(webpackConfigPath)) {
  exec(
    `cross-env BUILDING_DLL=true webpack --display-chunks --color --config ${webpackConfigPath} --hide-modules`,
  );
} else {
  throw new Error(`Unable to load webpack config from ${webpackConfigPath}`);
}
