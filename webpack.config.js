var debug = process.env.NODE_ENV !== "production"
var webpack = require('webpack')

module.exports = {
    entry: ['babel-polyfill','./index.js'],

    output: {
        path: '../public/static',
        filename: 'bundle.js',
        publicPath: '/static/'
    },

    devtool: 'source-map',

    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015'],
                }
            },
            {
                test: /\.(woff(2)?|png|jpg|svg|gif)(\?[a-z0-9=\.]+)?$/,
                loader: 'url-loader',
                query: {
                    limit: '100000'
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    },
    plugins: debug ? [] : [
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false, compress: {warnings: true }})
    ]

}
