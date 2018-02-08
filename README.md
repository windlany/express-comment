# express-comment
## 前言
> 之前一直写前端，了解过后端但是没有具体实现过接口。最近在学node，所以用express搭建了一个简易的后台，实现了登录注册等功能，写完这个Demo之后自己对后端的理解加深了一个层次，也了解了之前前后端没有分离的MVC模式的模板渲染具体细节。

> 这个demo是一个很简单的评论系统，用户注册登录之后发布评论，页面展示评论。其实可扩展性还是很高的，目前存储数据用的文件之后可以改为MongoDB或者Mysql，还可以添加删除、查找功能，这可以做一个论坛或者商城的评论组件。

## 效果图
![](https://github.com/windlany/express-comment/blob/master/public/images/GIF.gif)
## 技术栈
> node.js+express+ejs+jquery

## 项目目录
```bash
# 生成项目目录
express -e express-comment
```
![](https://github.com/windlany/express-comment/blob/master/public/images/pro.png)
## 运行方式
``` bash
# clone项目到本地
git clone https://github.com/windlany/express-comment.git 
# 安装项目依赖
cd express-comment
npm install 
# 运行以下命令打开浏览器的localhost:3000查看
npm start
```
