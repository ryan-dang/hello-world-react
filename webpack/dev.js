const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const ASSETS_PATH = path.resolve('assets');
const APP_FILE_PATH = './src/index.js';
const PUBLIC_PATH = path.join(__dirname, "public");

module.exports = {
    entry: {
        app: APP_FILE_PATH
    },
    output: {
        path: PUBLIC_PATH,
        filename: 'js/[name].[chunkhash].js',
        publicPath: '/',
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel-loader', 'eslint-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.jsx$/,
                loaders: ['babel-loader', 'eslint-loader'],
                exclude: /node_modules/,
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module) {
               // this assumes your vendor imports exist in the node_modules directory
               return module.context && module.context.indexOf('node_modules') !== -1;
            }
        }),
        //CommonChunksPlugin will now extract all the common modules from vendor and main bundles
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest' //But since there are no more common modules between them we end up with just the runtime code included in the manifest file
        })
    ]
}
