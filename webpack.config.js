/* eslint-disable no-undef */
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './script/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test    : /\.(png|jpg|svg)$/,
        include : path.join(__dirname, 'img'),
        loader  : 'url-loader?limit=30000&name=images/[name].[ext]'
    },
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
   ]
};