$('.loadbg').delay(1000).fadeOut(333);
f = 0 ;
pwdmode = 0 ;
var passwordLength = 16 ;
engwordobj=$.ajax({url:"https://erichsia7.github.io/password.gen/engword.txt",async:false});
var char = "0123456789abcdefghijklmnopqrstuvw,xyzABCDE.FGHIJKLMN/\OPQRSTUVWXYZ!@#$%^&*()_+?><:-{}[]";
function getPassword() {
if(pwdmode < 0.5) {
var chars = char ;
var password = "" ;
for (var i=0; i<passwordLength; i++){
var randomNumber = Math.floor(Math.random() * chars.length);
password += chars.substring(randomNumber, randomNumber+1);
}
document.getElementById("password").value = password ;
if (f > 0.5) {
$('#boxmsg').html('已產生新密碼！');
$('.boxmsg').fadeIn(111).delay(555).fadeOut(111);
}
if (f > 10) {
f = 1 ;
}
f += 1 ;
}
if(pwdmode > 0.5) {
   var chars2 = engwordobj.responseText.split(",") ;
var password2 = "" ;
password2 = chars2[Math.floor(Math.random() * chars2.length)] + Math.floor(Math.random() * chars2.length) + "-" + chars2[Math.floor(Math.random() * chars2.length)] + Math.floor(Math.random() * chars2.length) + "-" + chars2[Math.floor(Math.random() * chars2.length)] + Math.floor(Math.random() * chars2.length) ;
document.getElementById("password").value = password2 ;
if (f > 0.5) {
$('#boxmsg').html('已產生新密碼！');
$('.boxmsg').fadeIn(111).delay(555).fadeOut(111);
}
if (f > 10) {
f = 1 ;
}
f += 1 ;
}
}
function changemode() {
   f = 0 ;
   o = 99 ;
            if(pwdmode < 0.5) {
               pwdmode = 1 ;
               $('#modeicondd').attr('src','icon/random3.svg');
               $('#boxmsg').html('已切換為好記模式！');
$('.boxmsg').fadeIn(111).delay(555).fadeOut(111);
               getPassword();
               
}
            
            else {
              pwdmode = 0 ;
               $('#modeicondd').attr('src','icon/simple3.svg');
                              $('#boxmsg').html('已切換為隨機模式！');
$('.boxmsg').fadeIn(111).delay(555).fadeOut(111);
               getPassword();
            }
   
        }
function checki(tei) {
if (tei < 10) {
return '0' + tei ;
}
else {
return tei ;	
}
}
function copy(id) {
var today=new Date();
var copys = document.getElementById(id);
copys.select();
document.execCommand("Copy");
$('#boxmsg').html('已複製密碼！');
$('.boxmsg').fadeIn(111).delay(555).fadeOut(111);
$('#historytext').html('<br><br>');
   var fgvid = (today.getMonth()+1) + '' + today.getDate() + '' + today.getHours() + '' + today.getMinutes() + '' + today.getSeconds() + '-' + Math.floor(Math.random() * 4096) ;
$('.historyframe').prepend('<div class="pwwstbox historyp" id="' + fgvid + '"><div class="content"><h4>' + (today.getMonth()+1) + '/' + today.getDate() + ' ' + checki(today.getHours()) + ':' + checki(today.getMinutes()) + '</h4><div class="description"><input type="text" value="' + copys.value + '" class="pwdhistoryinput" readonly="readonly" id="input-' + fgvid + '"></div></div></div>');
$('.pwdhistoryinput').click(function() {
   var copys2 = $(this);
copys2.select();
document.execCommand("Copy");
});
}
getPassword();
var o = 100 ;
function pp() {
o -= 0.111 ;
$('.box').css({"background": "linear-gradient(90deg, var(--bar-color-a) 0%, var(--bar-color-a) " + o + "%, var(--bar-color-b) " + o + "%)"});
if (o < 0.111) {
clearInterval(id);
o = 100 ;
getPassword();
id = setInterval(pp, 10);
}
}
id = setInterval(pp, 10);

var g = 2 ;
$('#password').click(function() {
   if(pwdmode < 0.5) {
o = 0 ;
f = 0 ;
if (passwordLength > 127) {
passwordLength = 8 ;
}
else {
passwordLength= passwordLength * 2 ;
}

$('#boxmsg').html('密碼長度為' + passwordLength + '！');
$('.boxmsg').fadeIn(111).delay(555).fadeOut(111);
   }
});




var niees = 2 ;
function moredivopen() {
if(niees > "1") {
$('.morediv').fadeIn(1).animate({'height': 300 + 'px',width: 230 + 'px' ,opacity:1}, 555 );
   niees -=2 ;
   } 
else {
$('.morediv').animate({'height': 200 + 'px',width: 130 + 'px' ,opacity:0}, 555 ).fadeOut(1);
niees +=2 ;
}
}

