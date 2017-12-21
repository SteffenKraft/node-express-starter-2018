const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env = {}) => {
  const isProduction = env === "production";

  return {
    context: path.resolve(__dirname, "./src"),
    entry: {
      app: "./index.js",
    },
    output: {
      path: path.resolve(__dirname, "./dist"),
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
      historyApiFallback: isProduction ? false : true,
    },
    devtool: isProduction
      ? "hidden-source-map"
      : "cheap-module-eval-source-map",
    plugins: [
      new HtmlWebpackPlugin({
        template: "./index.html",
      }),
    ],
  };
};
