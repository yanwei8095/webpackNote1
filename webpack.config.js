/* webpack的配置模块 */

const {resolve}=require("path")
module.exports={
	// 入口
	entry:"./src/js/app.js",
	// 出口
	output:{
		filename:"js/built.js",//文件名称
		path: resolve(__dirname, "build") //输出路径，__dirname-->webpack_note
	},
	// loader
	module:{
		rules: [{
			test: /\.less$/,
			use: [{
				loader: "style-loader" // creates style nodes from JS strings
			}, {
				loader: "css-loader" // translates CSS into CommonJS
			}, {
				loader: "less-loader" // compiles Less to CSS
			}]
		}]
	},
	// plugins插件
	plugins:[],
	// 模式
	mode:"development"
}