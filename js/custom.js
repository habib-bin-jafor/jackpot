
// countdown js;

var countDownDate = new Date("Jan 5, 2030 15:37:25").getTime();
var x = setInterval(function () {
var now = new Date().getTime();
var distance = countDownDate - now;
// var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);
// document.getElementById("day").innerHTML = days
document.getElementById("hour").innerHTML = hours
document.getElementById("min").innerHTML = minutes
document.getElementById("sec").innerHTML = seconds
if (distance < 0) {
clearInterval(x);
document.getElementById("demo").innerHTML = "EXPIRED";
}
}, 1000);



// countdown ;

$(document).ready(function(){
      $(".banner-bottom-slider").slick({
          arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,

        responsive: [
            {
              breakpoint: 520,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
              }
            },

            {
              breakpoint: 767,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
              }
            },
            
            
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]



      });


    // nicescrolll ;

    $("#niceScroll").niceScroll({
        cursorcolor: "1f004f",
        cursorwidth: "10px",
        cursorborder: "transparent",
        autohidemode: false,
        background: "#000",
        iframeautoresize: true,
        smoothscroll: true,

            }); 



})














    















