//Slider script
//counter
//arrows
var counter = 0;
$(document).ready(function () {
    $(".right_arrow img").on("click", function () {
        if (counter == 2) {
            return;
        } else {
            counter = counter + 1;
            console.log(counter);
        }
        //add class 'active'
        $(".active").removeClass("active");
        $(".slider_wrap").eq(counter).toggleClass("active");
        //dots
        $("div.dots i.active_dots").removeClass("active_dots");
        $(".slider_wrap.active div.dots i").eq(counter).toggleClass("active_dots");

    });
    $(".left_arrow img").on("click", function () {
        if (counter == 0) {
            return;
        } else {
            counter = counter - 1;
            console.log(counter);
        }
        //add class 'active'
        $(".active").toggleClass("active");
        $(".slider_wrap").eq(counter).toggleClass("active");
        //dots
        $("div.dots i.active_dots").removeClass("active_dots");
        $(".slider_wrap.active div.dots i").eq(counter).toggleClass("active_dots");
    });
});
//dots click
$(document).ready(function () {
    $("div.dots i").on("click", function () {
        var current_dot = $(this).index();
        $(".active").removeClass("active");
        $(".slider_wrap").eq(current_dot).toggleClass("active");
        $(".slider_wrap.active div.dots i").eq(current_dot).removeClass("active_dots").toggleClass("active_dots");
    });
});
//To top
$(document).ready(function () {
    $(".to_top").on("click", function () {
        var scr = $(window).scrollTop();
        console.log(scr);
        $('body,html').animate({
            scrollTop: 0,
        }, 1500);
    });
});
//modal
$(document).ready(function () {
    
    $("div.header_top_bar_menu ul li:last-child").on("click", function(e){
        e.stopPropagation();
        $(".modal_popup").fadeIn();
    });
    $(".modal_popup,.form_modal button").on("click",function(){
        $(this).fadeToggle();
    });
});
