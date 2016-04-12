const webpack = require('webpack');

module.exports = require('./config-maker')({
    plugins: [
        new webpack.optimize.UglifyJsPlugin({minimize: true})
    ]
});
