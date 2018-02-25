// The main coundown code

var countDownDate = new Date("Dec 30, 2018 00:00:00").getTime();

var x = setInterval(function() {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Merry Christmas!";
    }
}, 1000);

var audio = new Audio('sound.mp3');
audio.play();
audio.loop = true;

// Preload the favicon
var images = new Array();
function preloadImages(){
    for (i=0; i < preloadImages.arguments.length; i++){

         images[i] = new Image();

        images[i].src = preloadImages.arguments[i];
    }
}
preloadImages("favicon.ico, bg.png");

// Post some helpful little console logs
console.log("Hello! This website is open-source and hosted on GitHub. If you're here to look at the code for the page, you can view it all at https://github.com/ktrvs/wait");
console.log("You can read more about Wait at https://github.com/ktrvs/wait/blob/master/README.md");
console.log("-------------------");
console.log("You can also support wait by sharing it with your friends, and leaving a star on GitHub.");