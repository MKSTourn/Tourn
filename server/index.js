const express = require('express');
const webpack = require('webpack');
const webpackMiddleWare = require('webpack-dev-middleware');

// Setup web server
const app = express();

// Setup webpack configuration
const config = webpack({
  entry: `${__dirname}/../public/components/main.jsx`,
  output: { path: '/' },
  module: {
         loaders: [{
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
         }]
  },
});

// Setup routes
// Attach webpack's middleware to /app-bundle.js endpoint
app.use('/app-bundle.js', webpackMiddleWare(config, {}));

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
