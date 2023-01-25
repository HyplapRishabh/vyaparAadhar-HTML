// document.getElementById("header").classList.add('navbar');
$("main").addClass("start_up");
$(document).ready(function() {
    //define global variable here
    var winW = jQuery(window).width(),
        winH = jQuery(window).height();

    if (winW < 767) {
        $('footer .vapa-footer-nav-links h6').on('click', function() {
            if ($(this).hasClass('active-mob-footer-dropdown')) {
                $(this).removeClass('active-mob-footer-dropdown');
                $(this).next('ul').slideUp();
            } else {
                $('footer .vapa-footer-nav-links ul').slideUp();
                $('footer .vapa-footer-nav-links h6').removeClass('active-mob-footer-dropdown');
                $(this).addClass('active-mob-footer-dropdown');
                $(this).next('ul').slideDown();
            }

        });
    }

    //video and popup section
    jQuery('.video-click').on('click', function() {
        jQuery('body').addClass('video-popup-open');
        jQuery('.popup-video-div iframe').attr('src', jQuery(this).attr('data-iframe'));
    });
    jQuery('.popup-video-div .closed').on('click', function() {
        jQuery('body').removeClass('video-popup-open');
        jQuery('.popup-video-div iframe').attr('src', '');
    });
    jQuery('.popup-yes-no').on('click', function(e) {
        e.preventDefault();
        jQuery('body').addClass('popup-yes-no-open');
        jQuery('.yes-btn').attr('href', jQuery(this).attr('href'));
        jQuery('.popup-yes-no-div .update-content p').text(jQuery(this).attr('data-desc'));
        var databtn = jQuery(this).attr('data-btn');
        if (databtn == 'no') {
            jQuery('.popup-yes-no-div .btn-div-popup').css('display', 'none');
        }
    });
    jQuery('.popup-yes-no-div .closed,.no-btn,.yes-btn').on('click', function() {

        jQuery('body').removeClass('popup-yes-no-open popup-cloud-open');
        jQuery('.popup-yes-no-div .btn-div-popup').css('display', 'block');
        // jQuery('.yes-btn').attr('href', '');
        jQuery('.popup-yes-no-div .update-content p').text('');
    });
    jQuery('.cloud-sevices-popup').on('click', function() {
        jQuery('body').addClass('popup-cloud-open');
    });

    // $('.scroll-y').mCustomScrollbar({
    //     axis: "y",
    //     theme: "dark",
    //     scrollbarPosition: "inside"
    // });

    // slider div define here 
    $('.inner-slider-div').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: true
    });
    $('#slider-id').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<svg class="prev-slide vapa-round-arrow-orange-svg" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" aria-disabled="true" style=""><defs><style>.vapa-round-arrow-orange-svg .a,.vapa-round-arrow-orange-svg .d{fill:none;}.vapa-round-arrow-orange-svg .a{stroke:rgba(242,101,35,0.5);}.vapa-round-arrow-orange-svg .b{fill:#F76C6C;}.vapa-round-arrow-orange-svg .c{stroke:none;}</style></defs><g transform="translate(0.028 0.467)"><g class="a" transform="translate(-0.028 -0.467)"><circle class="c" cx="15" cy="15" r="15"></circle><circle class="d" cx="15" cy="15" r="14.5"></circle></g><g transform="translate(11.739 20.251) rotate(-90)"><path class="b" d="M9.964,5.481l-.332.334a.555.555,0,0,1-.783,0L5.065,2.031,1.277,5.819a.555.555,0,0,1-.783,0L.162,5.487a.554.554,0,0,1,0-.783L4.672.178A.566.566,0,0,1,5.065,0h0a.566.566,0,0,1,.392.178L9.964,4.692a.559.559,0,0,1,.162.4A.554.554,0,0,1,9.964,5.481Z"></path></g></g></svg>',
        nextArrow: '<svg class="nxt-slide vapa-round-arrow-orange-svg" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" style="" aria-disabled="false"><defs><style>.vapa-round-arrow-orange-svg .a,.vapa-round-arrow-orange-svg .d{fill:none;}.vapa-round-arrow-orange-svg .a{stroke:rgba(242,101,35,0.5);}.vapa-round-arrow-orange-svg .b{fill:#F76C6C;}.vapa-round-arrow-orange-svg .c{stroke:none;}</style></defs><g transform="translate(0.467 0.467)"><g class="a" transform="translate(-0.467 -0.467)"><circle class="c" cx="15" cy="15" r="15"></circle><circle class="d" cx="15" cy="15" r="14.5"></circle></g><g transform="translate(11.822 20.244) rotate(-90)"><g transform="translate(0 0)"><path class="b" d="M9.971.5,9.639.166a.556.556,0,0,0-.784,0L5.069,3.953,1.278.162a.556.556,0,0,0-.784,0L.162.494a.555.555,0,0,0,0,.784l4.513,4.53a.567.567,0,0,0,.393.178h0a.566.566,0,0,0,.392-.178L9.971,1.29a.56.56,0,0,0,.162-.4A.554.554,0,0,0,9.971.5Z"></path></g></g></g></svg>',
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1008,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    });
    $('#event-slider-id').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4500,
        prevArrow: '<svg class="prev-slide vapa-round-arrow-orange-svg" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" aria-disabled="true" style=""><defs><style>.vapa-round-arrow-orange-svg .a,.vapa-round-arrow-orange-svg .d{fill:none;}.vapa-round-arrow-orange-svg .a{stroke:rgba(242,101,35,0.5);}.vapa-round-arrow-orange-svg .b{fill:#F76C6C;}.vapa-round-arrow-orange-svg .c{stroke:none;}</style></defs><g transform="translate(0.028 0.467)"><g class="a" transform="translate(-0.028 -0.467)"><circle class="c" cx="15" cy="15" r="15"></circle><circle class="d" cx="15" cy="15" r="14.5"></circle></g><g transform="translate(11.739 20.251) rotate(-90)"><path class="b" d="M9.964,5.481l-.332.334a.555.555,0,0,1-.783,0L5.065,2.031,1.277,5.819a.555.555,0,0,1-.783,0L.162,5.487a.554.554,0,0,1,0-.783L4.672.178A.566.566,0,0,1,5.065,0h0a.566.566,0,0,1,.392.178L9.964,4.692a.559.559,0,0,1,.162.4A.554.554,0,0,1,9.964,5.481Z"></path></g></g></svg>',
        nextArrow: '<svg class="nxt-slide vapa-round-arrow-orange-svg" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" style="" aria-disabled="false"><defs><style>.vapa-round-arrow-orange-svg .a,.vapa-round-arrow-orange-svg .d{fill:none;}.vapa-round-arrow-orange-svg .a{stroke:rgba(242,101,35,0.5);}.vapa-round-arrow-orange-svg .b{fill:#F76C6C;}.vapa-round-arrow-orange-svg .c{stroke:none;}</style></defs><g transform="translate(0.467 0.467)"><g class="a" transform="translate(-0.467 -0.467)"><circle class="c" cx="15" cy="15" r="15"></circle><circle class="d" cx="15" cy="15" r="14.5"></circle></g><g transform="translate(11.822 20.244) rotate(-90)"><g transform="translate(0 0)"><path class="b" d="M9.971.5,9.639.166a.556.556,0,0,0-.784,0L5.069,3.953,1.278.162a.556.556,0,0,0-.784,0L.162.494a.555.555,0,0,0,0,.784l4.513,4.53a.567.567,0,0,0,.393.178h0a.566.566,0,0,0,.392-.178L9.971,1.29a.56.56,0,0,0,.162-.4A.554.554,0,0,0,9.971.5Z"></path></g></g></g></svg>',
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1008,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('#resources-slider-id').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4700,
        prevArrow: '<svg class="prev-slide vapa-round-arrow-orange-svg" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" aria-disabled="true" style=""><defs><style>.vapa-round-arrow-orange-svg .a,.vapa-round-arrow-orange-svg .d{fill:none;}.vapa-round-arrow-orange-svg .a{stroke:rgba(242,101,35,0.5);}.vapa-round-arrow-orange-svg .b{fill:#F76C6C;}.vapa-round-arrow-orange-svg .c{stroke:none;}</style></defs><g transform="translate(0.028 0.467)"><g class="a" transform="translate(-0.028 -0.467)"><circle class="c" cx="15" cy="15" r="15"></circle><circle class="d" cx="15" cy="15" r="14.5"></circle></g><g transform="translate(11.739 20.251) rotate(-90)"><path class="b" d="M9.964,5.481l-.332.334a.555.555,0,0,1-.783,0L5.065,2.031,1.277,5.819a.555.555,0,0,1-.783,0L.162,5.487a.554.554,0,0,1,0-.783L4.672.178A.566.566,0,0,1,5.065,0h0a.566.566,0,0,1,.392.178L9.964,4.692a.559.559,0,0,1,.162.4A.554.554,0,0,1,9.964,5.481Z"></path></g></g></svg>',
        nextArrow: '<svg class="nxt-slide vapa-round-arrow-orange-svg" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" style="" aria-disabled="false"><defs><style>.vapa-round-arrow-orange-svg .a,.vapa-round-arrow-orange-svg .d{fill:none;}.vapa-round-arrow-orange-svg .a{stroke:rgba(242,101,35,0.5);}.vapa-round-arrow-orange-svg .b{fill:#F76C6C;}.vapa-round-arrow-orange-svg .c{stroke:none;}</style></defs><g transform="translate(0.467 0.467)"><g class="a" transform="translate(-0.467 -0.467)"><circle class="c" cx="15" cy="15" r="15"></circle><circle class="d" cx="15" cy="15" r="14.5"></circle></g><g transform="translate(11.822 20.244) rotate(-90)"><g transform="translate(0 0)"><path class="b" d="M9.971.5,9.639.166a.556.556,0,0,0-.784,0L5.069,3.953,1.278.162a.556.556,0,0,0-.784,0L.162.494a.555.555,0,0,0,0,.784l4.513,4.53a.567.567,0,0,0,.393.178h0a.566.566,0,0,0,.392-.178L9.971,1.29a.56.56,0,0,0,.162-.4A.554.554,0,0,0,9.971.5Z"></path></g></g></g></svg>',
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1008,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
    $('#customer-id').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: '<svg class="prev-slide vapa-round-arrow-orange-svg" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" aria-disabled="true" style=""><defs><style>.vapa-round-arrow-orange-svg .a,.vapa-round-arrow-orange-svg .d{fill:none;}.vapa-round-arrow-orange-svg .a{stroke:rgba(242,101,35,0.5);}.vapa-round-arrow-orange-svg .b{fill:#F76C6C;}.vapa-round-arrow-orange-svg .c{stroke:none;}</style></defs><g transform="translate(0.028 0.467)"><g class="a" transform="translate(-0.028 -0.467)"><circle class="c" cx="15" cy="15" r="15"></circle><circle class="d" cx="15" cy="15" r="14.5"></circle></g><g transform="translate(11.739 20.251) rotate(-90)"><path class="b" d="M9.964,5.481l-.332.334a.555.555,0,0,1-.783,0L5.065,2.031,1.277,5.819a.555.555,0,0,1-.783,0L.162,5.487a.554.554,0,0,1,0-.783L4.672.178A.566.566,0,0,1,5.065,0h0a.566.566,0,0,1,.392.178L9.964,4.692a.559.559,0,0,1,.162.4A.554.554,0,0,1,9.964,5.481Z"></path></g></g></svg>',
        nextArrow: '<svg class="nxt-slide vapa-round-arrow-orange-svg" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" style="" aria-disabled="false"><defs><style>.vapa-round-arrow-orange-svg .a,.vapa-round-arrow-orange-svg .d{fill:none;}.vapa-round-arrow-orange-svg .a{stroke:rgba(242,101,35,0.5);}.vapa-round-arrow-orange-svg .b{fill:#F76C6C;}.vapa-round-arrow-orange-svg .c{stroke:none;}</style></defs><g transform="translate(0.467 0.467)"><g class="a" transform="translate(-0.467 -0.467)"><circle class="c" cx="15" cy="15" r="15"></circle><circle class="d" cx="15" cy="15" r="14.5"></circle></g><g transform="translate(11.822 20.244) rotate(-90)"><g transform="translate(0 0)"><path class="b" d="M9.971.5,9.639.166a.556.556,0,0,0-.784,0L5.069,3.953,1.278.162a.556.556,0,0,0-.784,0L.162.494a.555.555,0,0,0,0,.784l4.513,4.53a.567.567,0,0,0,.393.178h0a.566.566,0,0,0,.392-.178L9.971,1.29a.56.56,0,0,0,.162-.4A.554.554,0,0,0,9.971.5Z"></path></g></g></g></svg>',
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1008,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('#customer-stories').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: '<svg class="prev-slide vapa-round-arrow-orange-svg" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" aria-disabled="true" style=""><defs><style>.vapa-round-arrow-orange-svg .a,.vapa-round-arrow-orange-svg .d{fill:none;}.vapa-round-arrow-orange-svg .a{stroke:rgba(242,101,35,0.5);}.vapa-round-arrow-orange-svg .b{fill:#F76C6C;}.vapa-round-arrow-orange-svg .c{stroke:none;}</style></defs><g transform="translate(0.028 0.467)"><g class="a" transform="translate(-0.028 -0.467)"><circle class="c" cx="15" cy="15" r="15"></circle><circle class="d" cx="15" cy="15" r="14.5"></circle></g><g transform="translate(11.739 20.251) rotate(-90)"><path class="b" d="M9.964,5.481l-.332.334a.555.555,0,0,1-.783,0L5.065,2.031,1.277,5.819a.555.555,0,0,1-.783,0L.162,5.487a.554.554,0,0,1,0-.783L4.672.178A.566.566,0,0,1,5.065,0h0a.566.566,0,0,1,.392.178L9.964,4.692a.559.559,0,0,1,.162.4A.554.554,0,0,1,9.964,5.481Z"></path></g></g></svg>',
        nextArrow: '<svg class="nxt-slide vapa-round-arrow-orange-svg" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" style="" aria-disabled="false"><defs><style>.vapa-round-arrow-orange-svg .a,.vapa-round-arrow-orange-svg .d{fill:none;}.vapa-round-arrow-orange-svg .a{stroke:rgba(242,101,35,0.5);}.vapa-round-arrow-orange-svg .b{fill:#F76C6C;}.vapa-round-arrow-orange-svg .c{stroke:none;}</style></defs><g transform="translate(0.467 0.467)"><g class="a" transform="translate(-0.467 -0.467)"><circle class="c" cx="15" cy="15" r="15"></circle><circle class="d" cx="15" cy="15" r="14.5"></circle></g><g transform="translate(11.822 20.244) rotate(-90)"><g transform="translate(0 0)"><path class="b" d="M9.971.5,9.639.166a.556.556,0,0,0-.784,0L5.069,3.953,1.278.162a.556.556,0,0,0-.784,0L.162.494a.555.555,0,0,0,0,.784l4.513,4.53a.567.567,0,0,0,.393.178h0a.566.566,0,0,0,.392-.178L9.971,1.29a.56.56,0,0,0,.162-.4A.554.554,0,0,0,9.971.5Z"></path></g></g></g></svg>',
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1008,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    //scroll events here
    $(window).scroll(function() {
        var Scroll_posY = $(this).scrollTop();
        if (Scroll_posY > 50) {
            $('body').addClass('shrink');
        } else {
            $('body').removeClass('shrink');
        }
        $('.menu a.scroll-p').each(function(e) {
            if (Scroll_posY >= $($(this).attr('href')).offset().top - 300) {
                $('.menu a.scroll-p').removeClass('active');
                $(this).addClass('active');


            }
        });
    });
    $('.menu a.scroll-p').on('click', function() {
        var header_height = $('header').outerHeight();
        $('.menu a.scroll-p').removeClass('active');
        $(this).addClass('active');
        $('html,body').animate({
            scrollTop: $($(this).attr('href')).offset().top - header_height
        }, 1000);

    });
    jQuery('.cta').on('click', function() {
        if (winW > 767) {
            jQuery("html, body").animate({ scrollTop: 0 }, 600);

        } else {
            var header_height = $('header').outerHeight() + 20;

            $('html,body').animate({
                    scrollTop: $($(this).attr('href')).offset().top - header_height
                },
                1000);
        }
        return false;



    });
    $(".btn").on("click", function() {
        $('body').toggleClass("show");
    });

    // faqs function here
    jQuery('.faqs-main-div li h6').on('click', function() {
        if (jQuery(this).parents('li').hasClass('active')) {
            jQuery(this).parents('li').removeClass('active');
            jQuery(this).next('.faqs-content-div').slideUp();
        } else {
            jQuery(this).parents('ul').find('li').removeClass('active').find('.faqs-content-div').slideUp();
            jQuery(this).parents('li').addClass('active');
            jQuery(this).next('.faqs-content-div').slideDown();
        }
    })

    //load more here
    jQuery(".load-more-content .load-div").slice(0, 4).show();

    jQuery(".load-more-content .load-more-btn").on('click', function(e) {
        jQuery(".load-more-content .load-div:hidden").slice(0, 2).slideDown();

        if (jQuery(".load-more-content .load-div:hidden").length == 0) {
            jQuery(this).parents('.load-more-content').find('.load-more-btn').fadeOut('slow');
        }
    });
    jQuery('.data-click').on('click', function() {
        jQuery('.display-div').removeClass('active');
        jQuery('.' + jQuery(this).attr('data-next')).addClass('active');
    });

});