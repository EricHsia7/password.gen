var getUrlString = location.href;
var url = new URL(getUrlString);
function getRandom(min,max) {
    return Math.floor(Math.random()*(max-min+1))+min;
}
if("0" === url.searchParams.get('h') ) {
}
else {
$('.addhome').delay(getRandom(5000,10000)).animate({bottom: 25 + 'px'},333);
}
function closeaddhome() {
$('.addhome').animate({bottom: -100 + 'px'},333);
location.replace('?h=0');
}
