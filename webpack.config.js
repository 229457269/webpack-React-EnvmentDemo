
//引入webpack  模块    以及   path
var webpack = require('webpack');
var path = require('path');


//制定  项目入口  以及编译文件名称  以及输出目录
module.exports = {
    context:__dirname + '/src',
    entry:"./js/index.js",
    module:{
        loaders:[{
            test:/\.js?$/,
            exclude:/(node_modules)/,
            loader:'babel-loader',
            query:{
                presets:['react','es2015']
            }
        }]
    },
    output:{
        path:__dirname + "/src/",
        filename:"bundle.js"
    }
};
