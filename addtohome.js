function getRandom(min,max) {
    return Math.floor(Math.random()*(max-min+1))+min;
}
$('.addhome').delay(getRandom(5000,10000)).animate({bottom: 25 + 'px'},333);
function closeaddhome() {
$('.addhome').animate({bottom: -100 + 'px'},333);
}
