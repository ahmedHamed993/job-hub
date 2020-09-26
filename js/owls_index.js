$(document).ready(function(){
    $("select").niceSelect();
    /*---------------------------------------------------------*/
    $('.owl-one').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:3000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
    /*------------------------------------------------------------*/
    $('.owl-two').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:3000,
        // center:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })
    /*------------------------------------------------------------*/

    $('.owl-three').owlCarousel({
        loop:true,
        margin:50,
        nav:true,
        dots:false,
        autoplay:true,
        autoplayTimeout:6000,
        center:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    /*------------------------------------------------------------*/
    // preloading screen 


    
})

