const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const { resolve } = require("path");

module.exports = {
  mode: "development",
  entry: {
    router: "./src/router.js",
    app: "./src/index.js",
  },

  output: {
    path: resolve(__dirname, "./dist"),
    filename: "[name].js",
    // publicPath: "/",
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html", // output file name
      template: "index.html", // template file name
    }),
    new MiniCssExtractPlugin({ filename: "app.css" }),
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ["dist"],
    }),
  ],

  module: {
    rules: [
      {
        test: /\.hbs$/,
        loader: "handlebars-loader",
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        type: "asset/resource", 
        // use: [
        //   {
        //     loader: "file-loader",
        //   },
        // ],
      },
    ],
  },
};
