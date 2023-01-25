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