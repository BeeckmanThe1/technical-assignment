const {merge} = require('webpack-merge');
const webpackCommonConfig = require('../config.common');
const path = require('path');

module.exports = merge(webpackCommonConfig, {
    mode: 'production',
    devtool: false,

    entry: {
        'client.prod.bundle': [path.resolve(__dirname, './../../../client/hydrateApp.jsx'), path.resolve(__dirname, './../../../client/styles/styles.scss')]
    },
    output: {
        path: path.resolve(__dirname, '../../../builds/prod.build'),
        filename: '[name].js',
    },
});
