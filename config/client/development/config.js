const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const open = require('open');
const {merge} = require('webpack-merge');
const webpackCommonConfig = require('../config.common');

let isbrowserOpen = false;

module.exports = merge(webpackCommonConfig, {
    mode: 'development',
    devtool: 'source-map',

    entry: {
        'client.dev.bundle': [path.resolve(__dirname, './../../../client/hydrateApp.jsx'), path.resolve(__dirname, './../../../client/styles/styles.scss')]
    },

    output: {
        path: path.resolve(__dirname, '../../../builds/dev.build'),
        filename: '[name].js',
    },

    plugins: [
        {
            apply: (compiler) => {
                compiler.hooks.done.tap('Done', () => {
                    if (!isbrowserOpen) {
                        open(`http://localhost:${process.env.PORT}`);
                        isbrowserOpen = true;
                    }
                });
            }
        }
    ]
});
