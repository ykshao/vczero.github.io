/*TMODJS:{"version":1,"md5":"39e94a03529bbc7783257b84bcac128f"}*/
define(function(require) {
    return require("./template")("login", ' <aside class="login">  <div class="login_form"> <div class="login_text_div"> 用户名<input type="text" name="username"/> </div> <div class="login_text_div"> 密码<input type="password" name="password" style="margin-left:17px;" /> </div> <div class="login_text_div"> <input style="margin-left:75px;" class="cursor_po" type="button" value="登录" /> <input type="button" class="cursor_po" value="取消" /> </div> </div> </aside> ');
});