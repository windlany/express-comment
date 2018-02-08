$(function() { 
    $('.btn').click(()=> {
        if(!$('.text').val().trim()) {
            alert('请输入评论内容！');
            $('.text').val('');
            return false;
        }
        var obj = { content: $('.text').val().trim() };
        $.ajax({
            type: 'POST',
            url: '/data/write',
            dataType: 'json',  // 预期服务器的返回类型
            data: obj,
            success: function(data) {
                console.log(data);
                if(data.status == 1) {
                    alert('发布评论成功！');
                    window.location.reload();  // 刷新页面
                } else if (data.status == 2) {
                    alert(data.info);
                    window.location.href = '/login';
                } else {
                    alert(data.info);
                }
            },
            error: function() {
                alert('发布评论失败，请重试！');
            }
        }); 
        return false;
    });
});