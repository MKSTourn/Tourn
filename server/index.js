const express = require('express');
const morgan = require('morgan');
const webpack = require('webpack');
const webpackMiddleWare = require('webpack-dev-middleware');

// Setup web server
const app = express();

// Setup webpack configuration
const config = webpack({
  entry: `${__dirname}/../public/components/main.jsx`,
  output: { path: '/', filename: 'app-bundle.js' },
  module: {
         loaders: [{
             test: /\.jsx$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
         }]
  },
});

// Setup routes
// Attach morgan, a request logging middleware, to all routes 
app.use(morgan(':method :url :response-time :status'));

// Attach webpack's middleware to /app-bundle.js endpoint
app.use(webpackMiddleWare(config, {}));

// Attach static assets to /static/ endpoint
app.use('/static/', express.static(`${__dirname}/../public/`));

// Simple hello world message to test server configuration
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start listening to a port defined by the environment or 4000
const port = process.env.PORT || 4000;
console.log(`Listening on port: ${port}`);
app.listen(port);
