function ajax({url,type,data,dataType,callback}){
    // 创建xhr对象
    var xhr = new XMLHttpRequest();
    // 绑定监听事件
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            if(dataType!==undefined && /^json$/i.test(dataType)){
                var res = JSON.parse(xhr.responseText);
            }
            else{
                var res = xhr.responseText;
                callback(res);
            }
        }
    };
    // delete和get请求要拼接字符串
    if(/get|delete/i.test(type) && data!==undefined){
        var url = "?" + data;
    };
    // 打开连接
    xhr.open(type,url,true);

    // 发送请求
    // 如果是post或者put请求要设置请求头
    if(/post|put/i.test(type) && data!==undefined){
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        xhr.send(data);
    }
    else{
        xhr.send(null);
    }
}