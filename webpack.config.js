var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CssExtractPlugin = new ExtractTextPlugin('app.bundle.css');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, loaders: ['babel'], exclude: /node_modules/, include: __dirname},
      {test: /\.css$/, loader: "style-loader!css-loader"},
      {test: /\.scss$/, loader: CssExtractPlugin.extract('style-loader', 'css-loader!sass-loader?sourceMap')},
      {test: /\.(jpe?g|png|gif|svg|ttf|eot)$/, loader: 'file-loader?name=[name]-[hash].[ext]'},
      {test: /\.(woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000'},
      {test: /\.json$/, loader: 'json'}
    ],
    plugins: [
      CssExtractPlugin
    ]
  }
};
