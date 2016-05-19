const webpack = require('webpack');

module.exports = {
    entry: {
        'index': "./examples/src/index.js"
    },

	output: {
        path: './examples/build',
        filename: "[name].js"
	},

	plugins: [
		new webpack.NoErrorsPlugin()
	],

	resolve: {
		moduleDirectories: ['node_modules'],
		extensions: ['', '.js', '.jsx']
	},

	resolveLoader: {
		moduleDirectories: ['node_modules'],
		moduleTemplates: ['*-loader', '*'],
		extensions: ['', '.js', '.jsx']
	},

	module: {
	  loaders: [
		  { test: /\.jsx$/, loader: "react-hot!babel", exclude: [/node_modules/, /lib/] },
		  { test: /\.js$/, loader: "react-hot!babel", exclude: [/node_modules/, /lib/] }
	  ]
	}
};
