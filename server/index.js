// Initialize our database connection
require('./database-config.js');

// Initialize our webserver
const express = require('express');

// Request monitoring middleware
const morgan = require('morgan');

// Client source bundle generator
const webpack = require('webpack');
const webpackMiddleWare = require('webpack-dev-middleware');
const webpackConfig = require('../webpack.config');

// Setup web server
const app = express();

// Setup socket listener
const http = require('http');
const server = new http.Server(app);
const io = require('socket.io')(server);

require('./routes/socketHandler').socket(io);

require('./routes/socketHandler').socket(io);

// Setup webpack configuration
const config = webpack(webpackConfig);

// Setup routes

// Attach morgan, a request logging middleware, to all routes
app.use(morgan(':method :url :response-time :status'));

// Attach webpack's middleware to /app-bundle.js endpoint
app.use(webpackMiddleWare(config, {}));

// facebookAuthFn(app);
// Attach static assets to /static/ endpoint
app.use('/', express.static(`${__dirname}/../client/public/`));

app.get('/', (req, res) => {
  res.redirect('/index.html');
});

// Start listening to a port defined by the environment or 4000
const port = process.env.PORT || 4000;
console.log(`Listening on port: ${port}`);

// Attach our authorization module to the app.
const auth = require('./routes/auth.js');
auth.app(app);
auth.socket(io);

server.listen(port);
