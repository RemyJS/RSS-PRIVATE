const path = require("path");

module.exports = {
  devtool: "source-map",
  entry: {
    script: "./src/scripts/script.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-proposal-object-rest-spread"]
          },
        }
      },
    ],
  },
};
