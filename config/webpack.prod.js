/* webpack的配置模块 */
const {resolve}=require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports={
	// 入口
	entry:"./src/js/app.js",
	// 出口
	output:{
		filename: "js/[name].[hash:8].js", //文件名称
		path: resolve(__dirname, "../dist"),//输出路径，__dirname-->webpack_note
		publicPath:'/',//所有输出文件的公共路径
	},
	// loader
	module:{
		rules: [
			
			{
        enforce: 'pre',//提前检查
        test: /\.js$/,
				exclude: /node_modules/,//排除检测文件
				// include:/(src\/js)/,//包含src下面的js文件
        loader: 'eslint-loader'
			},
			{
				oneOf:[//只执行其中一个loader
					{
						test: /\.less$/,
						use: [
							MiniCssExtractPlugin.loader,
							'css-loader',
							'postcss-loader',//扩展css前缀
							'less-loader'
						/* 	{
							loader: "style-loader" // 将css代码塞入到style标签中
						}, {
							loader: "css-loader" // 将css以commonjs的模块化导入到js代码中
						}, {
							loader: "less-loader" // 将less编译为css
						} */
					]
					},
					 /* {
						test: /\.(png|jpe?g|gif)$/,
						use: [{
							loader: 'url-loader',
							options: {
								limit: 8192, //若图片小于8kb就做base64处理
								//所有options都可以配置publicPath
								// publicPath: "./images", //修改图片的url路径
								// outputPath: "/images", //图片的输出路径
								name: "images/[name].[hash:8].[ext]"
							}
						}]
					}, */
					{
						test: /\.(png|jpe?g|gif|svg)$/,
						use: [{
								loader: 'url-loader',
								options: {
									limit: 8 * 1024, // 8kb大小以下的图片文件都用base64处理
									name: 'images/[name].[hash:8].[ext]'
								}
							},
							{
								loader: 'img-loader',
								options: {
									plugins: [
										require('imagemin-gifsicle')({
											interlaced: false
										}),
										require('imagemin-mozjpeg')({
											progressive: true,
											arithmetic: false
										}),
										require('imagemin-pngquant')({
											floyd: 0.5,
											speed: 2
										}),
										require('imagemin-svgo')({
											plugins: [{
													removeTitle: true
												},
												{
													convertPathData: false
												}
											]
										})
									]
								}
							}
						]
					},
						{
							test: /\.js$/,
							exclude: /(node_modules)/,
							use: {
								loader: 'babel-loader',
								options: {
									presets: ['@babel/preset-env']
								}
							}
						}
						
					]
			},
			{
				test: /\.(html)$/,
				use: {
					loader: 'html-loader'
				}
			},
			{
				loader:'file-loader',
				// exclude:[/\.js$/,/\.html$/,/\.json$/,/\.less$/],
				test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
				options: {
						// outputPath:'media',
						name: 'media/[name].[hash:8].[ext]'
					}
				
			}
		]
	},
	// plugins插件
	plugins: [
		new HtmlWebpackPlugin({
			template:"./src/index.html",//以指定HTML为模板，创建新的HTML文件(含有之前htnl的结构，引入打包后生成的js,css，图片等资源)
			minify: false
		}),
		// 在输出打包资源之前，默认清除dist文件夹下所有文件
		new CleanWebpackPlugin(),
		// 提取css为一个单独的文件
		new MiniCssExtractPlugin({
			filename: 'css/[name].[hash:8].css',
      chunkFilename: 'css/[id].[hash:8].css'
		}),
		new OptimizeCssAssetsPlugin({
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }]
      }
    })
	],
	// 模式
	mode:"production"//生产环境
	
}