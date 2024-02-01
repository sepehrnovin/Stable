$('.owl-carousel').owlCarousel({
    rtl:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:2
        }
    }
})
$(document).ready(function () {
    $(".word-but").click(function (e) { 
        e.preventDefault();
        $(".word").show(500);
        $(".pro").hide(500);
    });
    $(".coding").click(function (e) { 
        e.preventDefault();
        $(".word").hide(500);
        $(".pro").show(500);
    });
    $(".all").click(function (e) { 
        e.preventDefault();
        $(".word").show(500);
        $(".pro").show(500);
    });
});