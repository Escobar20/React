var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}
    ]
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ],
  devServer: {
    historyApiFallback: true,
    proxy: {
      "/api": {
        target: "https://www.metaweather.com",
        secure: false,
        changeOrigin: true
      },
      "/static/img": {
        target: "https://www.metaweather.com",
        secure: false,
        changeOrigin: true
      }
    }
  },
};