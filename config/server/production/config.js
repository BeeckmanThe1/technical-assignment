const {merge} = require('webpack-merge');
const webpackCommonConfig = require('../config.common');
const path = require('path');

module.exports = merge(webpackCommonConfig, {
    mode: 'production',
    devtool: false,
    entry: path.resolve(__dirname, '../../../server/app.js'),
    output: {
        path: path.resolve(__dirname, '../../../builds/prod.build'),
        filename: 'server.prod.bundle.js',
    }
});
