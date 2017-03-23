var ExtractTextPlugin = require('extract-text-webpack-plugin');
var LessPluginCleanCSS = require('less-plugin-clean-css');
var packageJson = require('./../package.json');
var webpack = require('webpack');
var fs = require('fs');
var path = require('path');

var externals = {};
fs.readdirSync('node_modules').filter(function(x){
    return ['.bin'].indexOf(x) === -1;
}).forEach(function(mod){
    externals[mod] = 'commonjs' + mod;
});

module.exports = [
    {
        name: 'JS',
        target: 'web',
        entry: './src/js/index',
        plugins: [
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.UglifyJsPlugin({
                exclude: './node_modules',
                compress: {
                    warnings: false
                }
            }),
            new webpack.DefinePlugin({
                'proccess.env': "JSON.stringify(process.env.NODE_ENV || 'development')"
            })
        ],
        output: {
            path: path.join(__dirname, '../dist/js'),
            filename: 'insta-clone-react.' + packageJson.version + '.min.js'
        },
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.json$/,
                    loader: 'json'
                }
            ]
        },
        externals: {
            React: 'react'
        }
    },
    {
        name: 'CSS',
        entry: [
            './src/less/base.less'
        ],
        output: {
            path: path.join(__dirname, '../dist/css/'),
            filename: 'insta-clone-react.' + packageJson.version + '.min.css'
        },
        module: {
            loaders: [
                {
                    test: /\.less$/,
                    loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
                }
            ]
        },
        lessLoader: {
            lessPlugins: [
                new LessPluginCleanCSS({
                    advanced: true
                })
            ]
        },
        plugins: [
            new ExtractTextPlugin('insta-clone-react.'+ packageJson.version + '.min.css')
        ]
    }
];
