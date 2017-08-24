const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')

// Helpers
const resolve = file => require('path').resolve(__dirname, file)

module.exports = {
  devtool: '#cheap-module-eval-source-map',
  entry: ['babel-polyfill', './dev/index.js'],
  output: {
    path: resolve('../dev'),
    publicPath: '/dev/',
    library: 'VueFa'
  },
  resolve: {
    extensions: ['*', '.js', '.vue'],
    alias: {
      vuefa: resolve('../src'),
    }
  },
  module: {
    noParse: /es6-promise\.js$/, // avoid webpack shimming process
    rules: [
      {
        test: /\.vue$/,
        loaders: ['vue-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  },
  performance: {
    hints: false
  },
  devServer: {
    contentBase: resolve('../dev')
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': "'development'"
    })
  ]
}
