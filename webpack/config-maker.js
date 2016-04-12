const merge = require('merge');

const config = {
    entry: {
        index: './src/index.js'
    },

    devtool: '#source-map',

    output: {
        path: './dist',
        filename: '[name].js',
        sourceMapFilename: '[file].map'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /(node_modules)/,
                query: {
                    presets: ['es2015']
                }
            }

        ]
    }
};

module.exports = _config => merge(config, _config);
