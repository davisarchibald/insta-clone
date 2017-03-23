var ExtractTextPlugin = require('extract-text-webpack-plugin');
var packageJson = require('./../package.json');
var webpack = require('webpack');
var addresses = 'localhost';
var path = require('path');

module.exports = [
    {
        name: 'JS',
        devtool: 'cheap-module-source-map',
        entry: [
            './src/js/index.js'
        ],
        plugins: [
            new webpack.optimize.OccurenceOrderPlugin(),
            new webpack.NormalModuleReplacementPlugin(/\iconv-loader$/, 'node-noop'),
            new ExtractTextPlugin('../css/insta-clone-react.css'),
            new webpack.DefinePlugin({
                'proccess.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') }
            })
        ],
        output: {
            path: path.join(__dirname, '../dist/js'),
            filename: 'insta-clone-react.js',
            publicPath: 'http://' + addresses + ':' + packageJson.config.port + '/'
        },
        module: {
            preLoaders: [
                { test: /\.jsx?$/, loaders: ['eslint']}
            ],
            loaders: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.less$/,
                    loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
                },
                {
                    test: /\.json$/,
                    loader: 'json'
                }
            ]
        }
    },
    {
        name: 'CSS',
        entry: [
            './src/less/base.less'
        ],
        output: {
            path: path.join(__dirname, '../dist/css/'),
            filename: 'insta-clone-react.css'
        },
        module: {
            loaders: [
                {
                    test: /\.less$/,
                    loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
                }
            ]
        },
        plugins: [
            new ExtractTextPlugin('insta-clone-react.css')
        ]
    }
];
