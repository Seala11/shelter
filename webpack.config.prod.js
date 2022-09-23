const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: false, //evel remove
  entry: {
    index: './src/pages/main/script.js',
    pets: './src/pages/pets/pets.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[name][ext]',
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.json'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: './src/assets/icons/favicon.ico',
      template: './src/pages/main/index.html',
      inject: true,
      chunks: ['index'],
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      favicon: './src/assets/icons/favicon.ico',
      template: './src/pages/pets/pets.html',
      inject: true,
      chunks: ['pets'],
      filename: 'pets.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: 'src/assets/images',
    //       to: 'assets/images',
    //       noErrorOnMissing: true,
    //     },
    //   ],
    // }),
  ],
  module: {
    rules: [
      {
        test: /\.(sc|sa|c)ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        exclude: '/node_modules',
      },
      {
        test: /\.(png|jpg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext]', // no [hash] to resolve pets.json files imgs path
        },
      },
      {
        test: /\.(gif|svg|ico)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/icons/[name][hash][ext]',
        },
      },
      {
        test: /\.(eot|ttf|woff)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][hash][ext]',
        },
      },
    ],
  },
};
