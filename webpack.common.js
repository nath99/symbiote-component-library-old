const path = require('path');

module.exports = {
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.[s]css$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        libraryTarget: 'umd',
        library: 'symbiote-component-library',
        clean: true
    },
    devtool: 'source-map',
}