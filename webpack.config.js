const path = require('path');

module.exports = {
    entry: {
        main: './src/script.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
};