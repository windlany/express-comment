var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = './public/data/';

/* 发布评论 */
router.post('/write', function(req, res, next) {
    if(!req.cookies.username) {
        return res.send({
          status: 2,
          info: '请先登录！'
        });
    }

  var obj = {
    username: req.cookies.username,
    // content: req.param('content')
    content: req.body.content
  };
  fs.readFile(path+'data.json', (err, data) => { // 读取文件，并执行回调函数
    if (err) {
      return res.send({
        status:0,
        info: '读取评论数据失败'
      });
    }

    var arr = JSON.parse(data.toString());  // 返回数据
    arr.splice(0, 0, obj); // 插入文件
    var newData = JSON.stringify(arr);

    fs.writeFile(path+'data.json', newData, function(err){
        if(err){
            return res.send({
                status:0,
                info: '添加评论数据失败'
            });
        }
        return res.send({
            status:1,
            info: obj
        });
    }); 
  });
});

router.get('/login', function(req, res, next) {
  var name = req.param('name');
  var psw = req.param('psw');

  fs.readFile(path+'user.json', (err, data) => { // 读取文件，并执行回调函数
    if (err) {
      return res.send({
        status:0,
        info: '读取用户数据失败'
      });
    }
    var arr = JSON.parse(data.toString());  // 返回数据
    for(var i in arr) {
      if(arr[i].username == name) {
        if(arr[i].psw == psw) {
          res.cookie('username', name);
          return res.send({
            status: 1
          });
        } else {
          return res.send({
            status: 0,
            info: '密码错误，请重试！'
          });
        } 
      }
    }
    return res.send({
      status: 0,
      info: '没有该用户！'
    });
  }); 
}); 

router.post('/register', function(req, res, next) {
  var obj = {
    username: req.body.name,
    psw: req.body.psw
  };

  fs.readFile(path+'user.json', (err, data) => { // 读取文件，并执行回调函数
    if (err) {
      return res.send({
        status:0,
        info: '读取用户数据失败'
      });
    }

    var arr = JSON.parse(data.toString());  // 返回数据
    arr.splice(0, 0, obj); // 插入文件
    var newData = JSON.stringify(arr);

    fs.writeFile(path+'user.json', newData, function(err){
        if(err){
            return res.send({
                status:0,
                info: '添加用户数据失败'
            });
        }
        return res.send({
            status:1 
        });
    }); 
  });
}); 

module.exports = router;
