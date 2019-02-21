const path = require('path');

module.exports = {
    entry: './src/file.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'file.bundle.js',
        publicPath: "/dist/"
    }
};
