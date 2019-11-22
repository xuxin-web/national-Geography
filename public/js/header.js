(function () {
    var login = document.querySelector("#login"),
        login_btn = document.querySelector("#login_btn"),
        user_name = document.querySelector("#user_name"),
        user_name_msg = document.querySelector(".user_name_msg"),
        user_pwd = document.querySelector("#user_pwd"),
        user_pwd_msg = document.querySelector(".user_pwd_msg"),
        login_box = document.querySelector("#login-box"),
        login_status = document.querySelector("#login_status"),
        close = document.querySelector(".close"),
        pop = document.querySelector("#pop");

    close.addEventListener("click", function () {
        pop.classList.remove("active");
    });

    // 登录框
    login.addEventListener("click", function (event) {
        event.preventDefault();
        if ("active" in pop.classList) {
            pop.classList.remove("active");
        }
        else {
            pop.classList.add("active");
        }
    });

    // 登录按钮
    login_btn.addEventListener("click",function(){
        var user_name_value = user_name.value;
        var user_pwd_value = user_pwd.value;
        if(user_name_value&&user_pwd_value){
            ajax({
                url:"/v1/login",
                type:"post",
                data:`uname=${user_name_value}&upwd=${user_pwd_value}`,
                callback:function(msg){
                    if(msg == 1){
                        login_box.innerHTML = `<div class="icon-login"></div>`
                    }
                }
            })
        }else{
            if(!user_name_value){
                user_name_msg.innerHTML = "请输入用户名";
            }
            if(!user_pwd_value){
                user_pwd_msg.innerHTML="请输入密码";
            }
        }
    });


})()
