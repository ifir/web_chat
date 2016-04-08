var webpack = require('webpack');
var path = require('path');

module.exports = {
	//入口
	entry: './src/main.js',
	//输出
	output: {
		//路径
		path: path.join(__dirname, './dist'),
		filename: '[name].js',
		publicPath: '/dist/'
	},
	//模块加载器
	module: {
		loaders: [
			{ test: /\.vue$/, loader: 'vue'},
			{}
		]
	}
}