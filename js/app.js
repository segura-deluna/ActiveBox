$(function() {

    //Fixed Header
    let header = $('#header'),
        intro = $('#intro'),
        introH = intro.innerHeight(),
        scrollPos = $(window).scrollTop(),
        nav = $('#nav'),
        navToggle = $('#navToggle');

    checkScroll(scrollPos, introH);

    $(window).on('scroll resize', function() {
        introH = intro.innerHeight();//перезаписываем высоту при ресайзе
        scrollPos = $(this).scrollTop();//получаем текущую высоту скролла

        checkScroll(scrollPos, introH);
        
    });

    function checkScroll(scrollPos, introH) {
        if( scrollPos > introH) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
        }
    }


    //Smooth Scroll
    $('[data-scroll]').on('click', function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        nav.removeClass('show');
        
        $('html, body').animate({
            scrollTop: elementOffset - 57
        }, 1000);
    });


    //Nav Toggle
    navToggle.on('click', function(event) {
        event.preventDefault();

        nav.toggleClass('show');
    });

    //Reviews Slider
    let slider = $('#reviewsSlider');

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
      });
    
});