var countDownDate = new Date("11 20 2023").getTime();

var now = new Date().getTime();
var timeleft = countDownDate - now;

var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
document.getElementById("days").innerHTML = days + " Дней";

if (timeleft < 0) {
    document.getElementById("days").innerHTML = "";
    document.getElementById("days").innerHTML = "< 1 Дня";
}
