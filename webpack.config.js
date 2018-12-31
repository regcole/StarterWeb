const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: "development",
    entry: './src/index.js',
        devtool: 'inline-source-map',
       devServer: {
         contentBase: './dist'
       },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
             title: 'Development',
             template: 'src/index.ejs'
    }),
        new CopyWebpackPlugin([
            { from: 'static', to: 'static' },
        ])
],
    output: {
    filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {

        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
};
