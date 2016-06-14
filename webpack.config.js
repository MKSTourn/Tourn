// var HtmlWebpackPlugin = require('html-webpack-plugin')

// var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
//   template: __dirname + '/app/index.html',
//   filename: 'index.html',
//   inject: 'body'
// });

module.exports = {
  entry: `${__dirname}/client/src/components/Main.jsx`,
  output: { path: '/', filename: 'app-bundle.js' },
  module: {
    loaders: [{
      test: /\.jsx$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    },
    { test: /\.css$/,
      loader: 'style-loader!css-loader',
    }],
  },
};
