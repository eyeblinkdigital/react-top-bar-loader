const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
        ],
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                exclude: /node_modules/,
                uglifyOptions: {
                    output: {
                        comments: false,
                    },
                },
            }),
        ],
    },
}
