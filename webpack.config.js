const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'source-map', //false => evel remove
  entry: {
    index: './src/pages/main/script.js',
    pets: './src/pages/pets/pets.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/images/[name][ext]',
  },
  devServer: {
    port: 8000,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/pages/main/index.html',
      inject: true,
      chunks: ['index'],
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/pets/pets.html',
      inject: true,
      chunks: ['pets'],
      filename: 'pets.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(sc|sa|c)ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: '/node_modules',
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff)$/,
        type: 'asset/resource',
      },
    ],
  },
};
