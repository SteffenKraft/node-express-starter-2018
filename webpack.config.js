const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env = {}) => {
  const isProduction = env === "production";

  return {
    context: path.resolve(__dirname, "./src/client"),
    entry: {
      app: "./index.js",
    },
    output: {
      path: path.resolve(__dirname, "./build"),
      filename: "[name].bundle.[hash].js",
    },
    resolve: {
      extensions: [".js", ".jsx"],
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            "babel-loader",
            "eslint-loader",
            "stylelint-custom-processor-loader",
          ],
        },
        {
          test: /\.(png|jpg)$/,
          loader: "url-loader",
        },
      ],
    },
    devServer: {
      historyApiFallback: !isProduction,
      proxy: isProduction
        ? false
        : {
            "/api": {
              target: "http://localhost:7777/",
              secure: false,
            },
          },
    },
    devtool: isProduction
      ? "hidden-source-map"
      : "cheap-module-eval-source-map",
    plugins: [
      new HtmlWebpackPlugin({
        template: "index.html",
      }),
    ],
  };
};
