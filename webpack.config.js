const path = require('path');

module.exports = {
    entry: {
        main: './src/scripts'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
};