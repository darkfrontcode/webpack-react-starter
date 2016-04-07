var path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    resolve: {
        extensions: ['', '.js', '.styl']
    },
    entry: path.join(__dirname, 'source/react/main.js'),
    output: {
        path: path.join(__dirname, 'build'),
        filename: "[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.styl$/,
                loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[local]__[name]___[hash:base64:5]!stylus-loader'
            },
            {
				test: /\.(png|svg|jpg|gif)$/,
				loader: "file-loader?name=assets/[name].[ext]"
			},
            {
				test: /\.(woff|woff2|eot|ttf)$/,
				loader: "file-loader?name=fonts/[name].[ext]"
			}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "source/html/template.html")
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        colors: true,
        historyApiFallback: true,
        inline: true,
        hot: true
    }
}
