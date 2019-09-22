

$(document).ready(function(){

 $("input[name='login']").on("click",function () {
    var $name=$("input[name='uname']");
    var $password=$("input[name='upwd']");
    var _name=$.trim($name.val());
    var _password=$.trim($password.val());

    if(""==_name){
        $name.attr("placeholder","请输入用户名");
        $name.focus();
        return;

    }
    if (""==_password){
        $password.attr("placeholder","请输入密码");
        $password.focus();
        return;
    }
})
});
