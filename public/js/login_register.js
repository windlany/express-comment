$(function() {
    $('.login').click(function() {
        if(!$('#username').val().trim() || !$('#psw').val().trim()) {
            alert('用户名和密码不能为空！');
            return false;
        }
        var obj = {
            name: $('#username').val().trim(),
            psw: $('#psw').val().trim()
        };
        $.ajax({ // 默认为GET
            // type: POST,
            url: '/data/login',
            data: obj,
            dataType: 'json',  // 预期服务器的返回类型
            success: function(data) {
                if(data.status){
                    window.location.href = '/';
                }else{
                    alert(data.info);
                }
            },
            error: function() {
                alert('用户名或密码错误！');
            }
        });
    });

    $('.register').click(function() {
        if(!$('#username').val().trim() || !$('#psw').val().trim()) {
            alert('用户名和密码不能为空！');
            return false;
        }
        var obj = {
            name: $('#username').val().trim(),
            psw: $('#psw').val().trim()
        };
        $.ajax({ 
            type: 'POST',
            url: '/data/register',
            data: obj,
            dataType: 'json',  // 预期服务器的返回类型
            success: function(data) {
                if(data.status){
                    alert('注册成功！');
                    window.location.href = '/login';
                }else{
                    alert(data.info);
                }
            },
            error: function() {
                alert('注册失败，请重试！');
            }
        });
    });
});