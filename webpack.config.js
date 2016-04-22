/**
 * config0
 * 适用单页面
 * 编译的目录结构与燕尾服相同
 */ 

var path=require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    entry:{
            index: "./dev/src/js/entry.js",
            index1: "./dev/src/js/entry1.js"
        },
    output:{
        path: path.join(__dirname,'build/static'),
        publicPath: "/demo/build/static",
        filename: "js/[name].js",
        chunkFilename: "js/[id].chunk.js"
    },
    module: {
        loaders: [    //加载器
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015']
                }
            },
            {test: /\.html$/, loader: "html" },
            {test: /\.css$/, loader:ExtractTextPlugin.extract("style", "css") },
            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192&name=./img/[hash].[ext]'}
        ]
    },
    plugins:[
        new webpack.ProvidePlugin({    //加载jq
                $: path.resolve(__dirname,'dev/src/js/lib/jquery')
                // 或者直接用npm的jquery模块
                // $: 'jquery'
            }),
        new ExtractTextPlugin("css/[name].css"),    //单独使用style标签加载css并设置其路径
        new HtmlWebpackPlugin({                        //根据模板插入css/js等生成最终HTML
            // favicon:'./src/img/favicon.ico', //favicon路径
            filename:'../index.html',    //生成的html存放路径，相对于 path
            template:'./dev/index.html',    //html模板路径
            inject:true,    //允许插件修改哪些内容，包括head与body
            hash:true,    //为静态资源生成hash值
            minify:{    //压缩HTML文件
                removeComments:true,    //移除HTML中的注释
                collapseWhitespace:false    //删除空白符与换行符
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({name:'common',minChunks: 2})
        // new webpack.optimize.CommonsChunkPlugin({name:'doT',minChunks: Infinity}),
        // new webpack.optimize.CommonsChunkPlugin({name:'index'})

    ],
    resolve: {
        //配置查找模块的路径和扩展名和别名（方便书写）
        // root: 'E:/github/flux-example/src', //绝对路径
        //这样就可以写 require('file') 代替 require('file.js')
        extensions: ['', '.js', '.json', '.scss'],
        alias: {
            jquery: path.resolve(__dirname,'dev/src/js/lib/jquery')
        }
    }
};



