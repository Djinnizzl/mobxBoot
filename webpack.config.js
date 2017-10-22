var path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CSSExtract = new ExtractTextPlugin('styles.css');

module.exports = {
	entry: ['babel-polyfill', './src/app.jsx'],
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				loader: 'babel-loader',
				test: /\.jsx?$/,
				exclude: /node_modules/
			},
			{
				test: /\.s?css$/,
				use: CSSExtract.extract({
					use: [
						{
							loader: 'css-loader',
							query: {
								modules: true,
								localIdentName: '[name]_[local]___[hash:base64:5]'
							}
						},
						'autoprefixer-loader',
						'sass-loader'
					]
				})
			}
		]
	},
	devServer: {
		contentBase: path.join(__dirname, 'public'),
		historyApiFallback: true
	},
	plugins: [
		CSSExtract
	]
}