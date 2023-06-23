const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')
module.exports = (env) => {
  const isProduction = env === "production";
  return {
    mode: "development",
    entry: "./index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
      publicPath: "/",
    },
    resolve: {
      alias: {
        components: path.resolve(__dirname, "src"),
      },
      extensions: [".js", ".jsx"],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader", {
            loader: "eslint-loader",
            options: {
              emitWarning: true
            }
          }],
        },
        {
          test: /\.(css|scss)$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          type: "asset/resource",
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      })
    ],
    devtool: isProduction ? "source-map" : "cheap-module-source-map",
    devServer: {
      static: {
        directory: path.join(__dirname, "dist"),
      },
      client:{
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
  };
};
