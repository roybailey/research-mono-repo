const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const proxy = require('express-http-proxy');
const { proxyPort, proxyPaths, partner } = require('../argv');
const chalk = require('chalk');

// if more than one partner argument is passed
// e.g. a default with an override (--partner citizens --partner scotia)
// then this becomes an array, so grab the last one
const partnerId = Array.isArray(partner) ? partner[partner.length - 1] : partner;

function createWebpackMiddleware(compiler, publicPath) {
  return webpackDevMiddleware(compiler, {
    logLevel: 'warn',
    publicPath,
    silent: true,
    stats: 'errors-only',
  });
}

module.exports = function addDevMiddlewares(app, webpackConfig) {
  const compiler = webpack(webpackConfig);
  const middleware = createWebpackMiddleware(
    compiler,
    webpackConfig.output.publicPath,
  );

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));

  const backendServiceLocations = proxyPaths && proxyPaths.split(' ');

  if (proxyPort && backendServiceLocations) {
    console.log(chalk.green('Starting Proxy API for Backend Service calls: '), backendServiceLocations);
    app.use('/', proxy(`http://localhost:${proxyPort}`, {
      filter: req => backendServiceLocations.some(loc => req.url.startsWith(loc))
    }));
  } else {
    if (!proxyPort) {
      console.log(chalk.yellow('WARNING: No `--proxyPort` flag provided. API calls will not be proxied.'));
    }
    if (!proxyPaths) {
      console.log(chalk.yellow('WARNING: No `--proxyPaths` flag provided. No API services are whitelisted to be proxied.'));
    }
  }

  // Since webpackDevMiddleware uses memory-fs internally to store build
  // artifacts, we use it instead
  const fs = middleware.fileSystem;

  if (partnerId) {
    console.log(chalk.green(`Partner config rerouting enabled: \`${partnerId}\`. Loading \`/config\` at runtime from \`/partners/${partnerId}/config.json\``));
    app.get('/config', (req, res) => {
      fs.readFile(path.join(compiler.outputPath, `partners/${partnerId}`, 'config.json'), (err, file) => {
        if (err) {
          res.sendStatus(404);
        } else {
          res.send(file.toString());
        }
      });
    });
  } else {
    console.log(chalk.yellow('WARNING: No `--partner` flag provided. App will likely fail to load `/config.json` at runtime.'));
  }

  app.get('*', (req, res) => {
    fs.readFile(path.join(compiler.outputPath, 'index.html'), (err, file) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.send(file.toString());
      }
    });
  });
};
