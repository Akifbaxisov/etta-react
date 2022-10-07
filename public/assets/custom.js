"use strict";

$(document).ready(function () {

    const body = $('body');

    /*====================================================================================================================*/
    /* Navbar Toggle Actions */
    /*====================================================================================================================*/

    $('.navbar-toggler').on('click', function () {
        body.toggleClass('navbar-shown');
    });

    $('*').on('click', function (e) {
        if (!$(e.target).is('.navbar-toggler')
            && !$(e.target).is('.navbar-toggler *')
            && !$(e.target).is('.navbar-collapse')
            && !$(e.target).is('.navbar-collapse *')) {
            setTimeout(function () {
                body.removeClass('navbar-shown');
            }, 300);
            $('#mainNavbar').collapse('hide')
        }
    });

    /*====================================================================================================================*/
    /* Toggle Sub Menu */
    /*====================================================================================================================*/

    // const dropdownToggle = $('.dropdown-toggle');
    
    // dropdownToggle.on('click', function () {
    //     const id = this.id;

    //     $('[aria-labelledby="' + id + '"]').addClass('shown');
    // });


    // const getBackMenu = $('.get-back');

    // getBackMenu.on('click', function () {

    //     const id1 = $(this).attr('data-menu');

    //     $('[aria-labelledby="' + id1 + '"]').toggleClass('shown');
    // });

    /*====================================================================================================================*/
    /* Append Overlay To Body */
    /*====================================================================================================================*/

    body.append('<div class="overlay" role="presentation"></div>');

    /*====================================================================================================================*/
    /* Basket */
    /*====================================================================================================================*/

    $('.add-to-card').on('click', function () {
      body.addClass('basket-shown');
    });


    $('.basket-toggle').on('click', function () {
        body.toggleClass('basket-shown');
    });

    $('*').on('click', function (e) {
        if (!$(e.target).is('.basket-toggle')
            && !$(e.target).is('.basket-toggle *')
            && !$(e.target).is('.basket')
            && !$(e.target).is('.add-to-card')
            && !$(e.target).is('.basket *')) {
            body.removeClass('basket-shown');
        }
    });

   


    /*====================================================================================================================*/
    /* Init Wow Animations */
    /*====================================================================================================================*/

    new WOW().init({mobile: false});

    /*================================================================================================================*/
    // Scroll To Target
    /*================================================================================================================*/

    $('.scroll-to').each(function () {

        let $target = $(this),
            $offsetTop, lastId,
            menuItems = $('.scroll-to'),
            scrollItems = menuItems.map(function(){
                const item = $($(this).attr("href"));
                if (item.length) { return item; }
            });


        if ($target.data('as-ot')) {
            $offsetTop = $target.data('as-ot');
        }
        if ($(window).width() >= 1200) {
            if ($target.data('lg-ot')) {
                $offsetTop = $target.data('lg-ot');
            }
        }
        if ($(window).width() < 1200 && $(window).width() > 991) {
            if ($target.data('md-ot')) {
                $offsetTop = $target.data('md-ot');
            }
        }
        if ($(window).width() < 992 && $(window).width() > 767) {
            if ($target.data('sm-ot')) {
                $offsetTop = $target.data('sm-ot');
            }
        }
        if ($(window).width() < 768) {
            if ($target.data('xs-ot')) {
                $offsetTop = $target.data('xs-ot');
            }
        }

        $target.on('click', function (event) {

            $('html, body').stop().animate({scrollTop: $($target.attr('href')).offset().top - $offsetTop}, 500);

            event.preventDefault();

        });

        $(window).scroll(function(){

            const fromTop = $(this).scrollTop() + $offsetTop;

            let cur = scrollItems.map(function(){
                if ($(this).offset().top < fromTop + 1)
                    return this;
            });

            cur = cur[cur.length-1];
            const id = cur && cur.length ? cur[0].id : "";

            if (lastId !== id) {
                lastId = id;
                menuItems.removeClass("active").filter("[href='#"+id+"']").addClass("active");
            }
        });

    });

    /*====================================================================================================================*/
    /* Init Tooltip With Class Name */
    /*====================================================================================================================*/

    if($(window).width() > 991){
        $('[data-toggle="tooltip"], .tooltip-toggle').tooltip()
    }


    if ($('.main-slider').length > 0) {

        let popularCountriesCarousel;
  
        if ($(window).width() < 768) {
          popularCountriesCarousel = tns({
            container: '.main-slider',
            items: 1,
            autoplay: true,
            autoplayButtonOutput: false,
            navPosition: 'bottom',
            mouseDrag: true,
            lazyload: true,
            controls: false,
            nav: true
          });
        }
        else {
          popularCountriesCarousel = tns({
            container: '.main-slider',
            items: 1,
            autoplay: true,
            autoplayButtonOutput: false,
            navPosition: 'bottom',
            mouseDrag: true,
            lazyload: true,
            controls: false,
            navContainer: '.main-slider-thumbnails',
            navAsThumbnails: true,
          });
  
          var customControls = tns({
            container: '.main-slider-thumbnails',
            items: 5,
            gutter: 30,
            mouseDrag: true,
            nav: false,
            lazyload: true,
            controls: false,
          });
        }
  
      }
  
      if ($('.brands-carousel').length > 0) {
        var brandsCarousel = tns({
          container: '.brands-carousel',
          items: 2,
          autoplay: true,
          autoplayButtonOutput: false,
          navPosition: 'bottom',
          mouseDrag: true,
          controls: false,
  
          responsive: {
            0: {
              items: 3,
              gutter: 20,
              center: true
            },
            576: {
              items: 4,
              gutter: 30
            },
            768: {
              items: 4,
              gutter: 40,
              center: true
            },
            992: {
              items: 5,
              gutter: 60,
              center: false
            },
          }
        });
      }
  
      if ($('.new-products-carousel').length > 0) {
        var newProductsCarousel = tns({
          container: '.new-products-carousel',
          autoplay: true,
          autoplayButtonOutput: false,
          navPosition: 'bottom',
          mouseDrag: true,
          controls: false,
          responsive: {
            0: {
              items: 2,
              gutter: 8,
              center: true
            },
            575: {
              gutter: 16,
              center: false
            },
            768: {
              items: 3,
              gutter: 16,
            },
            992: {
              items: 3,
              gutter: 30,
            },
          }
        });
      }
  
      if ($('.article-carousel').length > 0) {
        var articleCarousel = tns({
          container: '.article-carousel',
          autoplay: true,
          autoplayButtonOutput: false,
          navPosition: 'bottom',
          mouseDrag: true,
          controls: false,
          responsive: {
            0: {
              items: 1,
              gutter: 8,
              center: true,
              edgePadding: 40,
            },
            575: {
              gutter: 16,
              center: false
            },
            768: {
              items: 2,
              gutter: 16,
              edgePadding: 0,
            },
            1200: {
              gutter: 30,
            },
          }
        });
      }
  
      if ($('.product-images').length > 0) {
        var productImages = tns({
          container: '.product-images',
          items: 1,
          autoplay: false,
          autoplayButtonOutput: false,
          navPosition: 'bottom',
          mouseDrag: true,
          lazyload: true,
          controls: false,
          nav: true
        });
      }

});
