const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './srcs/index.tsx',
    target: 'web',
    mode: 'development',

    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, '/build'),
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
            },
            {
                test: /\.png$/,
                loader: 'url-loader'
            }
        ]
    },
    devServer : {
        historyApiFallback : true,
        contentBase : path.join(__dirname, '/public'),
		port : 4000,
	},
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],
}