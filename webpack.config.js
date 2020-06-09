/* webpack的配置模块 */

const {resolve}=require("path")
module.exports={
	// 入口
	entry:"./src/js/app.js",
	// 出口
	output:{
		filename: "js/[name].js", //文件名称
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
		},
		{
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
							limit: 8192,//若图片小于8kb就做base64处理
							//所有options都可以配置publicPath
							publicPath:"../build/images",//修改图片的url路径
							outputPath:"/images",//图片的输出路径
							name:"[hash:8].[ext]"
            }
          }
        ]
      }]
	},
	// plugins插件
	plugins:[],
	// 模式
	mode:"development"
}