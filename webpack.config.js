'use strict';

var webpack = require('webpack'),
	path = require('path');

module.exports = {
	context: __dirname + '/app',
	entry: [
		'./index.js'
	],
	output: {
		path: __dirname + '/app',
		filename: 'bundle.js'
	},
	//stats: {
	//	colors: true,
	//	reasons: true
	//},
	devtool: 'eval-source-maps',

	resolve: {
		extensions: ['', '.js'],
		modulesDirectories: ['node_modules', 'bower_components']
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'ng-annotate!babel!jshint',
				exclude: /node_modules|dist|bower_components/
			}, {
				test: /\.html$/,
				loader: 'raw'
			}, {
				test: /\.json$/,
				loader: 'json'
			}, {
				test: /\.scss$/,
				loader: 'style!css!sass'
			}, {
				test: /\.css$/,
				loader: 'style!css!postcss'
			}, {
				test: /\.jpe?g$|\.gif$|\.png$/,
				loader: "file"
			}, {
				test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url?limit=10000&minetype=application/font-woff"
			}, {
				test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url?limit=10000&minetype=application/octet-stream"
			}, {
				test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
				loader: "file"
			}, {
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url?limit=10000&minetype=image/svg+xml"
			}
		]
	},
	postcss: [
		require('postcss-nested'),
		require('autoprefixer-core'),
		require('csswring')
	],
	plugins: []
};
