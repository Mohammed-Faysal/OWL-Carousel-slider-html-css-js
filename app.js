$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        center: true,
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        autoplayHoverPause:true,
        smartSpeed: 1500,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        }
    })

})