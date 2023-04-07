        // PRE LOADER
setTimeout(function(){
    $('.loader-bg').fadeToggle();
}, 500);
        // END OF PRE LOADER


        // FIXED NAVBAR ON SCROLL
$(window).scroll(function() {

// Write code here
 var scroll = $(window).scrollTop();
 if (scroll >= 200) {
    $(".header").addClass("header-scroll");
} else {
    $(".header").removeClass("header-scroll");
}
});

        // END OF FIXED NAVBAR ON SCROLL


        // PROGRESS BAR ANIMATION
$(".bar1").animate({
            width:"95%",
    }, 800);
    $(".bar2").animate({
            width: "92%",
    }, 1000);
    $(".bar3").animate({
            width: "91%",
    }, 1250);
    $(".bar4").animate({
            width: "97%",
    }, 1500);
        // END OF  PROGRESS BAR ANIMATION
