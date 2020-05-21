const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const devmode = process.env.NODE_ENV === 'development';

module.exports = {
  // devtool: "source-map",
  // entry: {
  //   script: "./src/scripts/app.js",
  // },
  entry: ["babel-polyfill", "./src/scripts/app.js"],
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "app.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: "html-loader",
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-proposal-object-rest-spread"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            outputPath: "assets/img",
          },
        },
      },
      {
        test: /\.(ogg|mp3|wav|mpe?g)$/,
        use: {
          loader: "file-loader",
          options: {
            outputPath: "assets/audio",
          },
        },
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
    }),
  ],
  devServer: {
    port: 6500,
  },
};
