const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = (env) => {
  const isProduction = env === 'production';
  return {
    mode: 'development',
    entry: './index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
      publicPath: '/',
    },
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src'),
      },
      extensions: ['.js', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [
            'babel-loader',
            {
              loader: 'eslint-loader',
              options: {
                emitWarning: true,
              },
            },
          ],
        },
        {
          test: /\.(css|scss)$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(pdf|txt)$/,
          include: path.resolve(__dirname, 'src'),
          type: 'asset/resource',
          generator: {
            filename: 'assets/[name][ext]',
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        favicon: './public/favicon.ico',
      }),
      new webpack.DefinePlugin({
        'process.env.SPACE_ID': JSON.stringify(process.env.SPACE_ID),
        'process.env.CONTENT_DELIVERY_API': JSON.stringify(process.env.CONTENT_DELIVERY_API),
        'process.env.RESUME_ID': JSON.stringify(process.env.RESUME_ID),
      }),
    ],
    devtool: isProduction ? 'source-map' : 'cheap-module-source-map',
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      client: {
        overlay: {
          errors: true,
          warnings: false,
          runtimeErrors: true,
        },
      },
      compress: true,
      port: 3000,
      historyApiFallback: true,
    },
    optimization: {
      minimize: false,
      runtimeChunk: 'single',
    },
  };
};
