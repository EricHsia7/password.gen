$('.loadbg').delay(1200).fadeOut(888);
f = 0 ;
var passwordLength = 16 ;
engwordobj=$.ajax({url:"https://erichsia7.github.io/password.gen/engword.txt",async:false});
var char = ["0123456789abcdefghijklmnopqrstuvw,xyzABCDE.FGHIJKLMN/\OPQRSTUVWXYZ!@#$%^&*()_+?><:-{}[]",engwordobj.responseText] ;
function getPassword() {
var chars = char[0] ;
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
function getPasswordeng() {
var chars2 = char[1].split(",") ;
var password2 = "" ;
password2 = chars2[Math.floor(Math.random() * chars2.length)] + "-" + Math.floor(Math.random() * chars2.length) + "-" + Math.floor(Math.random() * chars2.length) + "-" + Math.floor(Math.random() * chars2.length) ;
}

function copy(id) {
var copys = document.getElementById(id);
copys.select();
document.execCommand("Copy");
$('#boxmsg').html('已複製密碼！');
$('.boxmsg').fadeIn(111).delay(555).fadeOut(111);
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


function passwordgenint() {
$('.fixedbg').fadeIn(555);
$('.passwordgenintdiv').animate({'bottom':50 + '%'}, 555 );
}

function passwordgenintclose() {
$('.fixedbg').fadeOut(555);
$('.passwordgenintdiv').animate({'bottom':-100 + '%'}, 555 );

}
