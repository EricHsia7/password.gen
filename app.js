$('.loadbg').delay(1000).fadeOut(333);
f = 0 ;
pwdmode = 0 ;
var passwordLength = 16 ;
engwordobj=$.ajax({url:"https://erichsia7.github.io/password.gen/engword.txt",async:false});
var char = "0123456789abcdefghijklmnopqrstuvw,xyzABCDE.FGHIJKLMN/\OPQRSTUVWXYZ!@#$%^&*()_+?><:-{}[]";
function genid() {
var genidchars4 = "abcdef012345678";
    var geniduu = [8,4,4,4,12];
            var genid4 = "";
            var genid5 = "";
    for (var ia = 0; ia < geniduu.length; ia++) {
      var genid4 = "";
            for (var i = 0; i < geniduu[ia]; i++) {
                var genrandomNumber4 = Math.floor(Math.random() * genidchars4.length);
                genid4 += genidchars4.substring(genrandomNumber4, genrandomNumber4 + 1);
            }
genid5 += '-' + genid4 ;
    }
    return genid5.substring(1,genid5.length)
}
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
//$('#boxmsg').html('已產生新密碼！');
$('.boxmsg').fadeIn(111).delay(555).fadeOut(111);
   //ms
$('.message').remove();
   var uhyhtg = genid() ;
   setTimeout(function () {  
$('body').append('<div class="message" type="copied" style="--text-length:6" id="' + uhyhtg + '">已產生新密碼</div>');
   },1);
  setTimeout(function () {  
$('#' + uhyhtg).animate({'top':'65px'},111);
   },2); 
   setTimeout(function () {  
$('#' + uhyhtg).animate({'top':'-60px'},111);
   },888); 
   setTimeout(function () {  
$('#' + uhyhtg).remove();
   },1113); 
   //ms-end
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
//$('#boxmsg').html('已產生新密碼！');
$('.boxmsg').fadeIn(111).delay(555).fadeOut(111);
   
   //ms
$('.message').remove();
   var uhyhtgyy = genid() ;
   setTimeout(function () {  
$('body').append('<div class="message" type="copied" style="--text-length:6" id="' + uhyhtgyy + '">已產生新密碼</div>');
   },1);
  setTimeout(function () {  
$('#' + uhyhtgyy).animate({'top':'65px'},111);
   },2);
   setTimeout(function () {  
$('#' + uhyhtgyy).animate({'top':'-60px'},111);
   },888); 
   setTimeout(function () {  
$('#' + uhyhtgyy).remove();
   },1113); 
   //ms-end
   
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
               //$('#boxmsg').html('已切換為好記模式！');
$('.boxmsg').fadeIn(111).delay(555).fadeOut(111);
               
               //ms
$('.message').remove();
               var uhyhtgyuy = genid() ;
   setTimeout(function () {  
$('body').append('<div class="message" type="copied" style="--text-length:8" id="' + uhyhtgyuy + '">已切換為好記模式</div>');
   },1);
  setTimeout(function () {  
$('#' + uhyhtgyuy).animate({'top':'65px'},111);
   },2); 
   setTimeout(function () {  
$('#' + uhyhtgyuy).animate({'top':'-60px'},111);
   },888); 
   setTimeout(function () {  
$('#' + uhyhtgyuy).remove();
   },1113); 
   //ms-end
               
               getPassword();
               
}
            
            else {
              pwdmode = 0 ;
               $('#modeicondd').attr('src','icon/simple3.svg');
                              //$('#boxmsg').html('已切換為隨機模式！');
$('.boxmsg').fadeIn(111).delay(555).fadeOut(111);
               
               //ms
$('.message').remove();
               var uhyhtgyiuy = genid() ;
   setTimeout(function () {  
$('body').append('<div class="message" type="copied" style="--text-length:8" id="' + uhyhtgyiuy + '">已切換為隨機模式</div>');
   },1);
  setTimeout(function () {  
$('#' + uhyhtgyiuy).animate({'top':'65px'},111);
   },2); 
   setTimeout(function () {  
$('#' + uhyhtgyiuy).animate({'top':'-60px'},111);
   },888); 
   setTimeout(function () {  
$('#' + uhyhtgyiuy).remove();
   },1113); 
   //ms-end
               
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
function sharepwdlink() {
   $('.sharelink').css({"display":"block"});
  $('.sharelinkbg').css({"display":"block"});
   setTimeout(function () {  
      $('.sharelink').css({"transform":"translate(-50%,-50%) scale(1)","opacity":"1"});
  $('.sharelinkbg').css({"background":"rgba(0, 0, 0, 0.6)"});
},10); 
   $('#sharelinkcopybtn').html('複製連結');
   $('#sc-link').click();
}
function copysharelink() {
var copys = document.getElementById('shareurlbbinput');
copys.select();
document.execCommand("Copy");
  $('#sharelinkcopybtn').html('已複製')
}
function copy(id) {
var today=new Date();
var copys = document.getElementById(id);
copys.select();
document.execCommand("Copy");
//$('#boxmsg').html('已複製密碼！');
$('.boxmsg').fadeIn(111).delay(555).fadeOut(111);
   
   //ms
$('.message').remove();
               var uhyhtgypiuy = genid() ;
   setTimeout(function () {  
$('body').append('<div class="message" type="copied" style="--text-length:5" id="' + uhyhtgypiuy + '">已複製密碼</div>');
   },1);
  setTimeout(function () {  
$('#' + uhyhtgypiuy).animate({'top':'65px'},111);
   },2); 
   setTimeout(function () {  
$('#' + uhyhtgypiuy).animate({'top':'-60px'},111);
   },888); 
   setTimeout(function () {  
$('#' + uhyhtgypiuy).remove();
   },1113); 
   //ms-end
   
   
$('#historytext').html('<br><br>');
   var fgvid = (today.getMonth()+1) + '' + today.getDate() + '' + today.getHours() + '' + today.getMinutes() + '' + today.getSeconds() + '-' + Math.floor(Math.random() * 4096) ;
$('.historyframe').prepend('<div class="pwwstbox historyp" id="' + fgvid + '"><div class="content"><h4 id="htit-' + fgvid + '">' + (today.getMonth()+1) + '/' + today.getDate() + ' ' + checki(today.getHours()) + ':' + checki(today.getMinutes()) + '<div class="pwwhshare" sh="' + fgvid + '"></div>' + '</h4><div class="description"><input type="text" value="' + copys.value + '" class="pwdhistoryinput" readonly="readonly" id="input-' + fgvid + '"></div></div></div>');
$('.pwdhistoryinput').click(function() {
   var copys2 = $(this);
copys2.select();
document.execCommand("Copy");
});
   $('.pwwhshare').click(function() {

var pwdhistoryinputvvvalue = $('#input-' + $(this).attr('sh')).val() ;

var ivq = parseInt(
                    Math.floor(Math.random() * 8 + 1) +
                        "" +
                        Math.floor(Math.random() * 8 + 1) +
                        "" +
                        Math.floor(Math.random() * 8 + 1) +
                        "" +
                        Math.floor(Math.random() * 8 + 1) +
                        "" +
                        Math.floor(Math.random() * 8 + 1) +
                        "" +
                        Math.floor(Math.random() * 8 + 1)
                );
               
                var key = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
                var text = pwdhistoryinputvvvalue;
                var textBytes = aesjs.utils.utf8.toBytes(text);

                var aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(ivq));
                var encryptedBytes = aesCtr.encrypt(textBytes);

                var encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);

//window.open('https://erichsia7.github.io/password.gen/share/?a=' + encryptedHex + '&b=' + ivq + '&c=' + btoa($('#htit-' + $(this).attr('sh')).text()));
sharepwdlink();
$('#shareurlbbinput').val('https://erichsia7.github.io/password.gen/share/?a=' + encryptedHex + '&b=' + ivq + '&c=' + btoa($('#htit-' + $(this).attr('sh')).text()));
//$('.pwwshareqrcodeimg').attr('src','https://chart.apis.google.com/chart?cht=qr&chl=' + encodeURIComponent('https://erichsia7.github.io/password.gen/share/?a=' + encryptedHex + '&b=' + ivq + '&c=' + btoa($('#htit-' + $(this).attr('sh')).text())) + '&chs=512x512');
document.querySelector('#pwwshareqrcodeiii').innerHTML = '' ;
var qrcode = new QRCode(document.querySelector('#pwwshareqrcodeiii') , {
    text: 'https://erichsia7.github.io/password.gen/share/?a=' + encryptedHex + '&b=' + ivq + '&c=' + btoa($('#htit-' + $(this).attr('sh')).text()),
    width: 1024,
    height: 1024,
    colorDark : "#000",
    colorLight : "#fff",
    correctLevel : QRCode.CorrectLevel.H
});
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

//$('#boxmsg').html('密碼長度為' + passwordLength + '！');
$('.boxmsg').fadeIn(111).delay(555).fadeOut(111);
      var myhstxtlen = '密碼長度為' + passwordLength ;
      //ms
$('.message').remove();
   setTimeout(function () {  
$('body').append('<div class="message" type="copied" style="--text-length:' + myhstxtlen.length + '">密碼長度為' + passwordLength + '</div>');
   },1);
  setTimeout(function () {  
$('.message').animate({'top':'65px'},111);
   },2); 
   setTimeout(function () {  
$('.message').animate({'top':'-60px'},111);
   },888); 
   setTimeout(function () {  
$('.message').remove();
   },1113); 
   //ms-end
      
      
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



$('.sharelink .sharelinktitle .sharelinkclose,.sharelinkbg').click(function() {
 $('.sharelink').css({"transform":"translate(-50%,-50%) scale(0.9)","opacity":"0"});
 $('.sharelinkbg').css({"background":"rgba(0, 0, 0, 0)"});
  setTimeout(function () {  $('.sharelink,.sharelinkbg').css({"display":"none"});
},500);
});
