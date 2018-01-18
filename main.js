// The main coundown code
var countDownDate = new Date("Dec 25, 2018 00:00:00").getTime();

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

// Preload the favicon
var images = new Array();
function preloadImages(){
    for (i=0; i < preloadImages.arguments.length; i++){

         images[i] = new Image();

        images[i].src = preloadImages.arguments[i];
    }
}
preloadImages("favicon.ico");


// Current date feature
  function showDate() {

    var d = new Date();
    var curr_date = d.getDate();
    var curr_month = d.getMonth() + 1; //months are zero based
    var curr_year = d.getFullYear();
    document.write(curr_date + "." + curr_month + "." + curr_year);

  }

// Post two helpful little console logs
console.log("Hello! This website is open-source and hosted on GitHub. If you here to look at the code for the page, you can view it all at https://github.com/vutondesign/wait");
console.log("Info and credits - The site was build using Javascript, HTML & Bootstrap, The favicon is a twemoji.");
console.log("You can read more about Wait at https://github.com/vutondesign/wait/blob/master/README.md");
