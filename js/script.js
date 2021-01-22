$(function () {

    "use strict";


    //    Bonus slider

    $('.bonus_slider').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 1200,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
           },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
           }, {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
           },
  ]

    });

    //    Bonus slider

    $('.casino_slider').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 1200,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
           },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
           }, {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
           },
  ]
    }); 
    //    Banner slider

    $('.banner_slider').slick({
        dots: false,
        infinite: true,
        autoplay: false,
        arrows: false,
        autoplaySpeed: 1200,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
    });


    // Script for OffCanvas Menu Activation
    
    $(document).ready(function () {
        $('.header_bar').on('click', function () {
            $('.offcanva, .off-canvas-overlay').addClass('active');
        })

        $('.cross').on('click', function () {
            $('.offcanva, .off-canvas-overlay').removeClass('active');
        })

        $('.off-canvas-overlay').on('click', function () {
            $('.offcanva, .off-canvas-overlay').removeClass('active');
        })
    })


});
