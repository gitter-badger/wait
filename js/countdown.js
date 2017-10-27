var countDownDate = new Date("Dec 25, 2017 00:00:00").getTime();

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
        document.getElementById("countdown").innerHTML = "Whoops, This page needs a new year update! Please let the owner know - https://github.com/VutonDesign/wait/issues/new ";
    }
}, 1000);
 
