const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const open = require('open');
const { merge } = require('webpack-merge');
const webpackCommonConfig = require('../config.common');

module.exports = merge(webpackCommonConfig, {
    mode: 'development',
    devtool: 'source-map',
    entry: path.resolve(__dirname, '../../../server/app.js'),
    output: {
        path: path.resolve(__dirname, '../../../builds/dev.build'),
        filename: 'server.prod.bundle.js',
    }
});
