const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

module.exports = new WebpackDevServer(webpack(config), {
	publicPath: config.output.publicPath,
	contentBase: "build/views/index/",
	hot: true,
	historyApiFallback: true,
}).listen(3000, 'localhost', (err, result) => {
	if (err) console.log(err);
	console.log('Listening at localhost:3000');
});