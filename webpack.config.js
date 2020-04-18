const path = require('path');

module.exports = {
  entry: {
    // cards: "./src/scripts/cards.js",
    script: "./src/scripts/script.js",
    // trainCategory: "./src/scripts/trainCategory.js",
    // playCategory: "./src/scripts/playCategory.js",
    // category: "./src/scripts/category.js",
    // mainpage: "./src/scripts/mainpage.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};
