// var HtmlWebpackPlugin = require('html-webpack-plugin')

// var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
//   template: __dirname + '/app/index.html',
//   filename: 'index.html',
//   inject: 'body'
// });
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    `./client/src/tourn.jsx`,
  ],
  output: { path: path.join(__dirname, 'dist'), filename: 'app-bundle.js' },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [{
      test: /\.jsx$/,
      exclude: /node_modules/,
      loader: 'babel',
      include: path.join(__dirname, 'client'),
    },
    { test: /\.css$/,
      loader: 'style-loader!css-loader',
    }],
  },
};
