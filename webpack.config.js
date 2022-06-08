const path = require('path');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    devServer: {
        static: './dist',
        hot: true,
    },
    resolve: {
        extensions: ['.js']
    },

    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',

                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],

            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ]
    },


    plugins: [
        new HTMLWebpackPlugin({
            inject: true,
            template: './public/index.html',
            filename: './index.html'
        }),
        new CopyWebpackPlugin({
            patterns: [{
                from: './src/styles/styles.css',
                to: ''
            }, {
                from: './src/styles/desktop.css',
                to: ''
            }, {
                from: './src/assets/images',
                to: 'assets/images'
            }],
        })
    ]
}