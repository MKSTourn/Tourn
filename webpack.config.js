// var HtmlWebpackPlugin = require('html-webpack-plugin')

// var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
//   template: __dirname + '/app/index.html',
//   filename: 'index.html',
//   inject: 'body'
// });
var path = require('path');

module.exports = {
  entry: [
    `${__dirname}/client/src/tourn.jsx`,
  ],
  output: { path: '/', filename: 'app-bundle.js' },
  module: {
    loaders: [{
      test: /\.js|x$/,
      exclude: /node_modules/,
      loader: 'babel',
    },
    { test: /\.css$/,
      loader: 'style-loader!css-loader',
    }],
  },
};
