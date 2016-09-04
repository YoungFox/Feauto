/**
 * config
 *不一定非要全写成json，这个config就是一个node.js module，可以写任何JavaScript
 */

var path = require('path');
var glob = require('glob');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');


//压缩插件
var UglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false,
        dead_code: true,
        // drop_debugger: false,//默认是ture
        // drop_console: true //默认是false
        global_defs: {
            DEBUG: true
        }
    },
    comments: false
        // outSourceMap: "[name].js.map",
        // sourceRoot: "sourcemap/"
})

//抛出一个配置对象，供webpack使用
var config = {
    //项目入口js
    entry: {
        "index/index": "./web/dev/src/js/index/index.js",
        // entry1: "./web/dev/src/js/entry1.js",
        'project/index': "./web/dev/src/js/project/index.js",
        'project/create': "./web/dev/src/js/project/create.js",
        'project/edit': "./web/dev/src/js/project/edit.js",
        'test/index': "./web/dev/src/js/test/index.js",
        'test/create': "./web/dev/src/js/test/create.js",
        'test/edit': "./web/dev/src/js/test/edit.js",
        'test/report': "./web/dev/src/js/test/report.js",
    },
    //编译目录
    output: {
        //文件编译的目标文件夹
        path: path.join(__dirname, 'web/public'),
        //服务器的相对路径
        publicPath: "/",
        filename: "js/[name].js",
        //ensure延迟加载的模块编译目录、名字
        chunkFilename: "js/[id].chunk.js"
            // sourceMapFilename: "sourcemap/[file].map"
    },
    //对普通模块处理，就是我们自己写的那些模块
    module: {
        loaders: [ //加载器
            //babel编译jsx或者es6
            {
                test: /\.js$/,
                loader: 'babel?presets[]=es2015!jsx',
                exclude: /node_modules/,
                presets: ['es2015', 'react'] //这个现在不需要了，可以去掉
            }, {
                test: /\.html$/,
                loader: "html"
            },
            //对css单独load，目的是可以编译到css目录下，否则会编译到js中当成模块，这样会白屏
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style", "css")
            }, {
                test: /\.scss$/i,
                loader: ExtractTextPlugin.extract(['css', 'sass'])
            },
            //小于4k变成base64
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192&name=./img/[hash].[ext]'
            }, {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: "url"
            }
        ]
        // ,
        // noParse:[/react/,/react-dom/]
    },
    externals: [
    {
        // // a: false, // a is not external
        // jqueryui: true,
        // react: true,
        // "react-dom": true // b is external (require("b"))
        // // "web/dev/src/js/lib/jqueryui.js": "jqueryui", // "./c" is external (require("c"))
        // // "./d": "var d" // "./d" is external (d)
    } 

    ],
    plugins: [
        new webpack.DefinePlugin({
            VERSION: JSON.stringify(require("./package.json").version)
        }),
        new webpack.ProvidePlugin({ //加载jq
            // $: path.resolve(__dirname, 'web/dev/src/js/lib/jquery'),
            // jQuery: path.resolve(__dirname, 'web/dev/src/js/lib/jquery'),
            // jquery: path.resolve(__dirname, 'web/dev/src/js/lib/jquery')
                // 或者直接用npm的jquery模块
                // $: 'jquery'
        }),
        new ExtractTextPlugin("css/[name].css"), //单独使用style标签加载css并设置其路径
        // new HtmlWebpackPlugin({ //根据模板插入css/js等标签生成最终HTML
        //     // favicon:'./src/img/favicon.ico', //favicon路径
        //     filename: '../app/views/index/index.volt', //生成的html存放路径，相对于 output.path
        //     template: './web/dev/index.html', //html模板路径
        //     inject: true, //允许插件修改哪些内容，包括head与body
        //     hash: true, //为静态资源生成hash值
        //     chunks: ['common','entry'],
        //     minify: { //压缩HTML文件
        //         removeComments: true, //移除HTML中的注释
        //         collapseWhitespace: false //删除空白符与换行符
        //     }
        // }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            minChunks: 3
        }),
        UglifyJsPlugin
    ],
    resolve: {
        //配置查找模块的路径和扩展名和别名（方便书写）
        // root: 'E:/github/flux-example/src', //绝对路径

        //这样就可以写 require('file') 代替 require('file.js')
        extensions: ['', '.js', '.json', '.scss'],
        alias: {
            jquery: path.resolve(__dirname, 'web/dev/src/js/lib/jquery'),
            jqueryui: path.resolve(__dirname, 'web/dev/src/js/lib/jqueryui')
            // ,
            // react: path.resolve(__dirname, 'node_modules/react/dist/react.min.js'),
            // 'react-dom': path.resolve(__dirname, 'node_modules/react-dom/dist/react-dom.min.js'),
        }
    },
    cache: true
};

//暂时先去掉html编译，多目录多文件比较麻烦

// var pages = Object.keys(getEntry('web/dev/tpl/*.html'));
// pages.forEach(function(basename) {
//     var conf = {
//         filename: '../app/views/project/' + basename + '.volt', //生成的html存放路径，相对于path
//         template: 'web/dev/tpl/' + basename + '.html', //html模板路径
//         inject: true, //js插入的位置，true/'head'/'body'/false
//         chunks: ['common'], //默认引用模块
//         hash: true,

//              * 压缩这块，调用了html-minify，会导致压缩时候的很多html语法检查问题，
//              * 如在html标签属性上使用{{...}}表达式，所以很多情况下并不需要在此配置压缩项，
//              * 另外，UglifyJsPlugin会在压缩代码的时候连同html一起压缩。
//              * 为避免压缩html，需要在html-loader上配置'html?-minimize'，见loaders中html-loader的配置。

//         minify: { //压缩HTML文件
//             removeComments: true, //移除HTML中的注释
//             collapseWhitespace: false //删除空白符与换行符
//         }
//     };
//     if (basename in config.entry) {
//         // conf.favicon = 'src/imgs/favicon.ico';
//         conf.chunks = ['common', basename];
//     }
//     config.plugins.push(new HtmlWebpackPlugin(conf));
// });


module.exports = config;


//获取指定类型所有文件
function getEntry(globPath) {
    var files = glob.sync(globPath);
    var entries = {},
        entry, dirname, basename, pathname, extname;

    for (var i = 0; i < files.length; i++) {
        entry = files[i];
        dirname = path.dirname(entry);
        extname = path.extname(entry);
        basename = path.basename(entry, extname);
        entries[basename] = ['./' + entry];
    }
    return entries;
}