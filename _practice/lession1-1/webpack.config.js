const path = require('path');

module.exports = {
    entry: './x.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    mode: 'none'
}