##前提  机子  已经搭建好  node.js  和npm 包管理器。


#### 1,新建空文件夹  执行安装命令。
windows cmd 进入一下文件夹内：
执行一下命令：

```
1，npm init     //初始化 包管理器  会生成一个package.json文件

2，npm install  webpack --save   //安装  webpack  用于监听文件变化  

3,npm install webpack-dev-server --save   //
webpack 服务
4,npm install --save-dev   react   react-dom   babelify               babel-preset-react  //安装项目 依赖    react  以及  Babel   当然你也可以 分开安装。

5,npm install babel-preset-es2015 --save-dev   //安装es6

6，npm install babel-loader --save  
```
以上  全部是   本地安装      当然你也可以  使用 npm install -g   惊醒全局安装。

安装后package.json如图：

```
{
  "name": "webreactbabeldemo",
  "version": "1.0.0",
  "description": "\"环境搭建测试\"",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
	"babel-loader": "^7.1.2",
    "babel-preset-es2015": "^6.24.1",
    "babel-preset-react": "^6.24.1",
    "babelify": "^7.3.0",
    "react": "^15.6.1",
    "react-dom": "^15.6.1",
    "webpack": "^3.5.6",
    "webpack-dev-server": "^2.7.1"
  }
}

```

####2，配置webpack：

 根目录下新建webpack.config.js文件   内容如下：

```
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

```


新建  src 文件夹    src下新建js文件夹    js 文件夹下新建  index.js文件

根目录下新建  index.html

#### 3,代码编写：

index.html:

```

<!DOCTYPE html>
<html>
  <head>
      <meta charset="utf-8"/>
  </head>
  <body>

    <div  id="demo"> 这是新建项目测试环境</div>

    <script src = "./src/bundle.js"></script>
  </body>
</html>

```

index.js:

```

// var React = require('react');
// var ReactDOM = require('react-dom');
import React from 'react';
import ReactDOM from 'react-dom';

//测试  找到文档中   demo节点  替换参数数据
ReactDOM.render (
  <h1>  这是需要替换并显示数据信息  </h1>,
  document.getElementById('demo')
);

```

cmd  执行  命令：

webpack

webpack-dev-server   

#### 4,显示结果   ：

![这里写图片描述](http://img.blog.csdn.net/20170913180102931?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvdTAxMzIzMzA5Nw==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)


注意浏览器的访问的bundle.js   以及缓存和编译延迟问题。需要实时更新界面的 
  请自行查阅webpack-dev-server实时监听文件变化。
  
  
  csdn:http://blog.csdn.net/u013233097/article/details/77969312













