const currentYear = new Date().getFullYear();
var count = new Date(`January 1, ${currentYear + 1}  00:00:00`).getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var d = count - now;
    
    var days = Math.floor(d/(1000*60*60*24));
    var hours = Math.floor((d%(1000*60*60*24)) / (1000*60*60));
    var  minutes = Math.floor((d%(1000*60*60)) / (1000*60));
    var seconds = Math.floor((d%(1000*60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    if (seconds % 2 == 0) {
        document.getElementById("seconds").style.color = '#ef1f1f';
    }
    else {
        document.getElementById("seconds").style.color = '#fff'
    }
}, 1000)

let year = new Date().getFullYear();
let title = document.getElementById("title").innerHTML = `Countdown ${year + 1}`;
let fullYear = document.getElementById("text").innerHTML = `${year + 1}`;