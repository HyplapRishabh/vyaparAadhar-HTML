/*---------------------------------------------------------------------*/ ;
(function($) {

    /*================= Global Variable Start =================*/
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    var IEbellow9 = !$.support.leadingWhitespace;
    var iPhoneAndiPad = /iPhone|iPod/i.test(navigator.userAgent);
    var isIE = navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0;

    function isIEver() {
        var myNav = navigator.userAgent.toLowerCase();
        return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
    }
    //if (isIEver () == 8) {}	   
    var ww = document.body.clientWidth,
        wh = document.body.clientHeight;
    var mobilePort = 992,
        ipadView = 1024,
        wideScreen = 1600;
    var jsFolder = "writereaddata/js/";
    var cssFolder = "writereaddata/Portal/Design_CSS/";

    /*================= Global Variable End =================*/
    document.write('<link rel="stylesheet" type="text/css" href="' + cssFolder + 'animate.css">');


    /*================= On Document Load Start =================*/
    $(document).ready(function() {

       

        $('.contactToggle').click(function() {
            $(this).next().slideToggle('400');
        });

        $("#nav li.MenuLi1 ul li:nth-child(5)").removeClass("megaMenu");
        $("#nav li.MenuLi1 ul li:nth-child(2)").removeClass("megaMenu");

        $('.onclickShowTab').click(function() {
            setTimeout(function() {
                $(".showTab").show();
                $(".autoTriggerClick").prev().addClass("r-tabs-tab r-tabs-state-active");
                $(".autoTriggerClick").trigger("click");
            }, 100);
        });


        //Account Yes/No Popup
        $('.openYesNoPopup').click(function() {
            $(".yesNoPopupOverlay").fadeIn(500);
        });


        if ($(".amcustomTab").length) {

            $('.amtabNavigation li a').click(function(e) {
                //alert(1);													
                e.preventDefault();
                $(this).parent().addClass("active");
                $(this).parent().siblings().removeClass("active");
                var tab = $(this).attr("href");
                //$(this).parent().parent().next().find(".amamcustomTabContent").fadeOut();
                $(tab).siblings(".amamcustomTabContent").fadeOut();
                $(tab).fadeIn();
            });

            $(".amtabNavigation").each(function() {
                $(this).find(".amtabNavigation li:first").addClass("active");
            });
            $(".amtabNavigation li.active a").trigger("click");
        }

        if ($('#header').length) {
            $("body").removeClass("noHeader");
        } else {
            $("body").addClass("noHeader");
        }
        if ($('.bobRadiance').length) {
            $("body").addClass("bobRadiancePage");
        }

        //Happy life festival
        setTimeout(function() { $(".youtubeVd .play").trigger("click"); }, 100);


        setTimeout(function() {
            if ($(".fixedErrorMsg").length) {
                $(".fixedErrorMsg").slideDown("slow");
                setTimeout(function() { $('.fixedErrorMsg').slideUp(); }, 5000);
            }
            if ($(".fixedSuccessMsg").length) {
                $(".fixedSuccessMsg").slideDown("slow");
                setTimeout(function() { $('.fixedSuccessMsg').slideUp(); }, 5000);
            }
        }, 500);


        $('body').removeClass('noJS').addClass("hasJS");
        $(this).scrollTop(0);

        //Murge bank popup
        $('#onLoadShowPopup').addClass("active");
        $('.onLoadShowPopupOverlay').addClass("active");


        // Lazy load
        if ($('.lazy').length) {
            /*$('.lazy').lazy({
            	delay: 0
            });*/
            $(window).scroll(function() {
                $('.lazy').lazy({
                    delay: 0
                });
            });

            $('.exclusiveOffers .swiper-button-prev, .exclusiveOffers .swiper-button-next').click(function() {
                $('.lazy').lazy({
                    bind: "event",
                    delay: 0
                });
            });
        }

        $(window).on('resize', function() {
            $(window).scroll(function() {
                if ($(window).width() > 1279) {
                    if ($(window).scrollTop() > 350) {
                        $('.eTradeAccMain .buttonRow .button').css({ 'position': 'fixed', 'left': 'auto', 'right': 0, 'top': 240, 'z-index': 100 });
                    } else {
                        $('.eTradeAccMain .buttonRow .button').css({ 'position': 'relative', 'left': 'auto', 'right': 'auto', 'top': 0, 'z-index': 0 });
                    }
                } else {
                    $('.eTradeAccMain .buttonRow .button').css({ 'position': 'relative', 'left': 'auto', 'right': 'auto', 'top': 0, 'z-index': 0 });
                }
            });
        });

        var careerHref = window.location.pathname,
            careeHrefHash = window.location.hash;

        if (careerHref == '/career-detail.htm') {
            setTimeout(function() {
                var tabNav = $('.tabNav').find('.al');
                if (tabNav.attr('href', '#tab-5') && careeHrefHash == '#tab-18') {
                    $('html, body').animate({ scrollTop: $('.careerDetail').offset().top - 220 }, 400);
                    tabNav.parent().addClass('r-tabs-state-active').siblings().removeClass('r-tabs-state-active').addClass('r-tabs-state-default');
                    tabNav.click();
                }

                if (tabNav.attr('href', '#tab-5') && careeHrefHash == '#tab-19') {
                    $('html, body').animate({ scrollTop: $('.careerDetail').offset().top - 220 }, 400);
                    tabNav.parent().addClass('r-tabs-state-active').siblings().removeClass('r-tabs-state-active').addClass('r-tabs-state-default');
                    tabNav.click();
                }

                if (tabNav.attr('href', '#tab-5') && careeHrefHash == '#tab-20') {
                    $('html, body').animate({ scrollTop: $('.careerDetail').offset().top - 220 }, 400);
                    tabNav.parent().addClass('r-tabs-state-active').siblings().removeClass('r-tabs-state-active').addClass('r-tabs-state-default');
                    tabNav.click();
                }

                if (tabNav.attr('href', '#tab-5') && careeHrefHash == '#tab-21') {
                    $('html, body').animate({ scrollTop: $('.careerDetail').offset().top - 220 }, 400);
                    tabNav.parent().addClass('r-tabs-state-active').siblings().removeClass('r-tabs-state-active').addClass('r-tabs-state-default');
                    tabNav.click();
                }
            }, 100);
        }

        // CTA Scroll
        if ($('.largeBannerPage .loanTopNav') && !$('.largeBannerPage .loanTopNav.mrgBtmzero').length) {
            $(window).on('resize', function() {
                if ($(window).width() > 1500) {
                    $(window).scroll(function() {
                        if ($(window).scrollTop() > 495) {
                            $('.loanTopNav').css({ 'position': 'fixed', 'left': 0, 'right': 0, 'top': 0, 'z-index': 999, 'transition': '350ms ease' });
                            //$('.loanTopNav ul').css('padding', '26px 0');
                            $('#content').css('padding-top', 30);
                        } else {
                            $('.loanTopNav, .loanTopNav ul, #content').removeAttr('style');
                        }
                    });
                } else if ($(window).width() > 1439) {
                    $(window).scroll(function() {
                        if ($(window).scrollTop() > 460) {
                            $('.loanTopNav').css({ 'position': 'fixed', 'left': 0, 'right': 0, 'top': 0, 'z-index': 999, 'transition': '350ms ease' });
                            //$('.loanTopNav ul').css('padding', '26px 0');
                            $('#content').css('padding-top', 30);
                        } else {
                            $('.loanTopNav, .loanTopNav ul, #content').removeAttr('style');
                        }
                    });
                } else if ($(window).width() > 1200) {
                    $(window).scroll(function() {
                        if ($(window).scrollTop() > 430) {
                            $('.loanTopNav').css({ 'position': 'fixed', 'left': 0, 'right': 0, 'top': 0, 'z-index': 999, 'transition': '350ms ease' });
                            //$('.loanTopNav ul').css('padding', '26px 0');
                            $('#content').css('padding-top', 30);
                        } else {
                            $('.loanTopNav, .loanTopNav ul, #content').removeAttr('style');
                        }
                    });
                } else {
                    $(window).scroll(function() {
                        if ($(window).scrollTop() > 495) {
                            $('.loanTopNav, .loanTopNav ul, #content').removeAttr('style');
                        } else {
                            $('.loanTopNav, .loanTopNav ul, #content').removeAttr('style');
                        }
                    });
                }
            }).trigger('resize');
        }

        /*$('.foundationThemeTopImg01').animate({ 'top': 28, 'opacity': 1, 'z-index': 99 }, 800);
	$('.foundationThemeTopImg02').css('opacity', 1);
    $('.foundationThemeTopImg03').css('opacity', 1);
	
	if($('#header').hasClass('headerScroll')){
		$(this).find('.foundationThemeTopImg01').hide();
	}
	$(window).on('resize', function(){
		if($(window).width() > 1440){
			$('.foundationThemeTopImg02').animate({ 'left': 0 }, 800);
			$('.foundationThemeTopImg03').animate({ 'right': 0 }, 800);
		} else if($(window).width() > 1439) {
			$('.foundationThemeTopImg02').animate({ 'left': 0 }, 800);
			$('.foundationThemeTopImg03').animate({ 'right': '-50px' }, 800);
		} else if($(window).width() > 1365) {
			$('.foundationThemeTopImg02').animate({ 'left': '-43px' }, 800);
			$('.foundationThemeTopImg03').animate({ 'right': '-49px' }, 800);
		} else if($(window).width() > 1279) {
			$('.foundationThemeTopImg02').animate({ 'left': '-12px' }, 800);
			$('.foundationThemeTopImg03').animate({ 'right': '-85px' }, 800);
		} else {
			$('.foundationThemeTopImg02').animate({ 'left': 0 }, 800);
			$('.foundationThemeTopImg03').animate({ 'right': 0 }, 800);
		}
		
		$(window).scroll(function(){
			if($(window).width() > 1440){					  
				if($(window).scrollTop() > 150){
					$('.foundationThemeMidImg01').animate({ 'left': 0 }, 800);
					$('.foundationThemeMidImg02').animate({ 'width': 162, 'right': 0 }, 800);
				}
				if($(window).scrollTop() > 700){
					$('.foundationThemeMidImg03').animate({ 'left': 0 }, 800);
					$('.foundationThemeMidImg04').animate({ 'width': 171, 'right': 0 }, 800);
				}
			} else if($(window).width() > 1439) {
				if($(window).scrollTop() > 150){
					$('.foundationThemeMidImg01').animate({ 'left': '-40px' }, 800);
					$('.foundationThemeMidImg02').animate({ 'width': 162, 'right': 0 }, 800);
				}
				if($(window).scrollTop() > 700){
					$('.foundationThemeMidImg03').animate({ 'left': 0 }, 800);
					$('.foundationThemeMidImg04').animate({ 'width': 171, 'right': 0 }, 800);
				}
			} else if($(window).width() > 1365) {
				if($(window).scrollTop() > 150){
					$('.foundationThemeMidImg01').animate({ 'left': '-40px' }, 800);
					$('.foundationThemeMidImg02').animate({ 'width': 162, 'right': 0 }, 800);
				}
				if($(window).scrollTop() > 700){
					$('.foundationThemeMidImg03').animate({ 'left': '-45px' }, 800);
					$('.foundationThemeMidImg04').animate({ 'width': 171, 'right': 0 }, 800);
				}
			} else if($(window).width() > 1279) {
				if($(window).scrollTop() > 150){
					$('.foundationThemeMidImg01').animate({ 'left': '-64px' }, 800);
					$('.foundationThemeMidImg02').animate({ 'width': 92, 'right': 0 }, 800);
				}
				if($(window).scrollTop() > 700){
					$('.foundationThemeMidImg03').animate({ 'left': '-58px' }, 800);
					$('.foundationThemeMidImg04').animate({ 'width': 90, 'right': '-20px' }, 800);
				}
			}
		});
	}).trigger('resize');
	*/


        getWidth();
        menuMove();
        faqMobAccordion();
        accountMobAccordion();
        GlobalNetworkPopup();
        datePicker();
        smartBankingMobile();
        bannerBgSet();
        singleBannerBgSet();
        //Set Element to vertical center using padding
        //$.fn.verticalAlignText = function () {return this.css("padding-top", ($(this).parent().height() - $(this).height()) / 2 + 'px');};

        /*setTimeout(function(){
        	$('.vCenter').each(function () {$(this).verticalAlignText();});
        }, 800);*/

        if ($('.contentAcc').length) {
            var serviceChargesURL = window.location.pathname,
                serviceChargesHash = window.location.hash;
            if (serviceChargesURL == '/service-charges-fees.htm' && serviceChargesHash == '#serCharges5') {
                $('html, body').animate({
                    scrollTop: $('#serCharges5').offset().top - 200
                });
                $('#serCharges5').addClass('active').next().show();
            }

            var serviceChargesURL1 = window.location.pathname,
                serviceChargesHash1 = window.location.hash;
            if (serviceChargesURL1 == '/service-charges-fees.htm' && serviceChargesHash1 == '#dematCharges') {
                $('html, body').animate({
                    scrollTop: $('#dematCharges').offset().top - 200
                });
                $('#dematCharges').addClass('active').next().show();
            }
        }

        var schemeURL = window.location.pathname,
            schemeHash = window.location.hash;
        if (schemeURL == '/govt-schemes.htm' && schemeHash == '#pmjjby') {
            $(window).on('resize', function() {
                if ($(window).width() > 992) {
                    $('html, body').animate({
                        scrollTop: $('#pmjjby').offset().top - 200
                    });
                } else {
                    $('html, body').animate({
                        scrollTop: $('#pmjjby').offset().top


                    });
                }
            }).trigger('resize');
        }


        var kisanDivasBoxURL1 = window.location.pathname,
            kisanDivasHash1 = window.location.hash;
        if (kisanDivasBoxURL1 == '/rural-agriculture.htm' && kisanDivasHash1 == '#kisanDivasBox1') {
            $('html, body').animate({
                scrollTop: $('#kisanDivasBox1').offset().top - 200
            });
            $('#kisanDivasBox1').addClass('active').next().show();
        }


        var kisanDivasBoxURL2 = window.location.pathname,
            kisanDivasHash2 = window.location.hash;
        if (kisanDivasBoxURL2 == '/rural-agriculture.htm' && kisanDivasHash2 == '#kisanDivasBox2') {
            $('html, body').animate({
                scrollTop: $('#kisanDivasBox2').offset().top - 200
            });
            $('#kisanDivasBox2').addClass('active').next().show();
        }

        var kisanDivasBoxURL3 = window.location.pathname,
            kisanDivasHash3 = window.location.hash;
        if (kisanDivasBoxURL3 == '/rural-agriculture.htm' && kisanDivasHash3 == '#kisanDivasBox3') {
            $('html, body').animate({
                scrollTop: $('#kisanDivasBox3').offset().top - 200
            });
            $('#kisanDivasBox3').addClass('active').next().show();
        }

        var kisanDivasBoxURL4 = window.location.pathname,
            kisanDivasHash4 = window.location.hash;
        if (kisanDivasBoxURL4 == '/rural-agriculture.htm' && kisanDivasHash4 == '#kisanDivasBox4') {
            $('html, body').animate({
                scrollTop: $('#kisanDivasBox4').offset().top - 200
            });
            $('#kisanDivasBox4').addClass('active').next().show();
        }

        var kisanDivasBoxURL5 = window.location.pathname,
            kisanDivasHash5 = window.location.hash;
        if (kisanDivasBoxURL5 == '/rural-agriculture.htm' && kisanDivasHash5 == '#kisanDivasBox5') {
            $('html, body').animate({
                scrollTop: $('#kisanDivasBox5').offset().top - 200
            });
            $('#kisanDivasBox5').addClass('active').next().show();
        }

        var kisanDivasBoxURL6 = window.location.pathname,
            kisanDivasHash6 = window.location.hash;
        if (kisanDivasBoxURL6 == '/rural-agriculture.htm' && kisanDivasHash6 == '#kisanDivasBox6') {
            $('html, body').animate({
                scrollTop: $('#kisanDivasBox6').offset().top - 200
            });
            $('#kisanDivasBox6').addClass('active').next().show();
        }

        var kisanDivasBoxURL7 = window.location.pathname,
            kisanDivasHash7 = window.location.hash;
        if (kisanDivasBoxURL7 == '/rural-agriculture.htm' && kisanDivasHash7 == '#kisanDivasBox7') {
            $('html, body').animate({
                scrollTop: $('#kisanDivasBox7').offset().top - 200
            });
            $('#kisanDivasBox7').addClass('active').next().show();
        }


        /*$('.skipLink').click(function(e){
        	e.preventDefault();
        	$('.mothersdayPopup').fadeOut();							 
        });
	
        setTimeout(function(){
        	$('.mothersdayPopup').fadeOut();					
        }, 5000);*/


        $(window).on('resize', function() {
            $(window).scroll(function() {
                if ($(window).width() > 1279) {
                    if ($(window).scrollTop() > 100) {
                        $('.rightFixedBtnAp .button').css({ 'position': 'fixed', 'left': 'auto', 'right': 0, 'top': 240, 'z-index': 100 });
                    } else {
                        $('.rightFixedBtnAp .button').css({ 'position': 'relative', 'left': 'auto', 'right': 'auto', 'top': 0, 'z-index': 0 });
                    }
                } else {
                    $('.rightFixedBtnAp .button').css({ 'position': 'relative', 'left': 'auto', 'right': 'auto', 'top': 0, 'z-index': 0 });
                }
            });
        });


        //Kisan Divas Slider
        if ($(".kisanZoneList").length) {
            $(".kisanZoneListWrap").each(function() {
                var nextBtn = $(this).find(".swiper-button-next");
                var prevBtn = $(this).find(".swiper-button-prev");
                var kisanZoneList = new Swiper($(this).find('.kisanZoneList'), {
                    nextButton: nextBtn,
                    prevButton: prevBtn,
                    keyboardControl: false,
                    slidesPerView: 4,
                    spaceBetween: 5,
                    autoplay: 4000,

                    loop: true,
                    breakpoints: {
                        992: {
                            slidesPerView: 3

                        },
                        768: {
                            slidesPerView: 2

                        },
                        599: {
                            slidesPerView: 1,
                            spaceBetween: 0,

                        }
                    }
                });
            });
        }


        if ($(".marqueeScrolling li").length > 1) {
            var $mq = $('.marquee').marquee({
                speed: 25000,
                gap: 0,
                duplicated: true,
                pauseOnHover: true
            });
            $(".btnMPause").toggle(function() {
                $(this).addClass('play');
                $(this).text('Play');
                $mq.marquee('pause');
            }, function() {
                $(this).removeClass('play');
                $(this).text('Pause');
                $mq.marquee('resume');
                return false;
            });
        };


        // Multiple Ticker	
        if ($(".ticker").length) {
            $('.ticker').each(function(i) {
                $(this).addClass('tickerDiv' + i).attr('id', 'ticker' + i);
                $('#ticker' + i).find('.tickerDivBlock').first().addClass('newsTikker' + i).attr('id', 'newsTikker' + i);
                $('#ticker' + i).find('a.playPause').attr('id', 'stopNews' + i)
                $('#newsTikker' + i).vTicker({ speed: 1E3, pause: 10E3, animation: "fade", mousePause: false, showItems: 4, height: 250, direction: 'up' })
                $("#stopNews" + i).click(function() {
                    if ($(this).hasClass('stop')) {
                        $(this).removeClass("stop").addClass("play homeSprite").text("Play").attr('title', 'Play');
                    } else {
                        $(this).removeClass("play").addClass("stop homeSprite").text("Pause").attr('title', 'pause');
                    }
                    return false;
                });
            });
        };



        //Announcements hide show
        if ($(".announcements").length > 0) {
            $('.announcements .title').click(function() {
                if ($('.announcements').hasClass("active")) {
                    $('.announcements').removeClass("active");
                } else {
                    $('.announcements').addClass("active");
                }
                return false;
            });

            $(document).bind('click touchstart', function(e) {
                if ($(e.target).closest('.announcements .box').length === 0) {
                    $('.announcements').removeClass("active");

                }
            });


        }

        if ($(".breadcrumb").length > 0) {
            $('.breadcrumb .brdcMobIcon').click(function() {
                if ($('.breadcrumb ul').hasClass("active")) {
                    $('.breadcrumb ul').removeClass("active");
                } else {
                    $('.breadcrumb ul').addClass("active");
                }
                return false;
            });

            $(document).bind('click touchstart', function(e) {
                if ($(e.target).closest('.breadcrumb').length === 0) {

                    $('.breadcrumb ul').removeClass("active");

                }
            });


        }

        // Counter
        if ($('.desktop .counter').length) {
            $('.counter').counterUp({
                delay: 10,
                time: 3000
            });
        }




        // Career Tab Counter
        $('.careerTabs .tabNav li:nth-child(2)').one("click", function() {
            if ($('.careerCounter').length) {
                $('.careerCounter').counterUp({
                    delay: 3,
                    time: 1000
                });
            }

            //Career Progress Bar
            $('.ReachScal').percentcircle({
                animate: true,
                diameter: 90,
                guage: 3,
                coverBg: '#fff',
                bgColor: '#efefef',
                fillColor: '#ff6633',
                percentSize: '15px',
                percentWeight: 'normal'
            });
        });


        //loan Leadmanagment
        if ($(".loanLinkSlider").length) {
            var hash = window.location.href;
            res = hash.split('?')[1];
            res1 = '#leadMangement' + res.charAt(0);

            setTimeout(function() {
                $(".loanLinkSlider").children().find(res1).addClass("active");
                var bannerText = $(".loanLinkSlider").children().find(res1).text();
                //$(".innerBanner .pageTitle h1").text(bannerText);
                //$("#maharashtraMap").find(res).trigger('click');
            }, 200);
        }

        // Page Scrolling
        $('a[href="#content"]').click(function() {
            skipTo = $(this).attr('href');
            skipTo = $(skipTo).offset().top - 80;
            $('html, body').animate({ scrollTop: skipTo }, '1000');
            //$(this).fadeOut('fast');
            //$('.slideArrow2').fadeIn('fast');
            return false;
        });

        $('a[href="#tradeDisclaimer"]').click(function() {
            skipToDisclaimer = $(this).attr('href');
            skipToDisclaimer = $(skipToDisclaimer).offset().top - 230;
            $('html, body').animate({ scrollTop: skipToDisclaimer }, '1000');
            $("#tradeDisclaimer .accTrigger").addClass("active");
            $("#tradeDisclaimer .accordDetail").css({ 'display': 'block' });
            return false;
        });

        $('a[href="#exploreMore"]').click(function() {
            skipTo = $(this).attr('href');
            skipToUrl = $(skipTo).offset().top - 210;
            $('html, body').animate({ scrollTop: skipToUrl }, '1000');
            //$(this).fadeOut('fast');
            //$('.slideArrow3').fadeIn('fast');
            return false;
        });

        $('a[href="#exclusiveOffers"]').click(function() {
            skipTo = $(this).attr('href');
            skipTo = $(skipTo).offset().top;
            $('html, body').animate({ scrollTop: skipTo }, '1000');
            //$(this).fadeOut('fast');
            //$('#backtotop').fadeIn('fast');
            return false;
        });

        $(window).scroll(function() {
            if ($(window).scrollTop() > 1500) {
                $('#backtotop').fadeIn('fast');
            } else {
                $('#backtotop').fadeOut('fast');
            }

            if ($(window).scrollTop() > 500) {
                $('.rightFixedButton').addClass('active');
            } else {
                $('.rightFixedButton').removeClass('active');
            }

            /*if($(window).scrollTop()<120){
            	$('.slideArrow1').fadeIn('fast');
            }*/

        });

        $('.slideArrow2, .slideArrow3').hide();

        $('.slideArrow1').click(function() {
            $(this).fadeOut('fast');
            $('.slideArrow2').fadeIn('fast');
        });

        $('.slideArrow2').click(function() {
            $(this).fadeOut('fast');
            $('.slideArrow3').fadeIn('fast');
        });

        $('.slideArrow3').click(function() {
            $(this).fadeOut('fast');
            //$('.slideArrow3').fadeIn('fast');
        });

        $('#backtotop').click(function() {
            $('html, body').animate({ scrollTop: 0 }, '200');
            $('.slideArrow1').fadeIn('fast');
            return false;
        });

        //recentlyVisitedLinks
        if ($(".recentlyVisitedLinks li").length > 0) {
            $(".recentlyVisitedPopup").show();
            $(".recentlyVisitedPopup h3").click(function() {
                $(this).next().slideToggle("fast");
                $(this).toggleClass("active");
            });

        }

        // For device checking
        if (isMobile == false) {

        };




        /*================= On Document Load and Resize Start =================*/
        $(window).on('resize', function() {

            ww = document.body.clientWidth;
            wh = document.body.clientHeight;

            //$('.vCenter').each(function () {$(this).verticalAlignText();});	

            if ($("body").hasClass("mobilePort")) {
                $("body").removeClass("wob");
            }

            //verticalText();

            //$('.container').resize(function(){});

        }).trigger('resize');
        /*================= On Document Load and Resize End =================*/
        //emiCalculator
        if ($(".emiCalculatorWrap").length) {
            $(".highcharts-series").eq($(".highcharts-series").size() - 2).hide();
            $(".highcharts-tracker").eq($(".highcharts-tracker").size() - 3).hide().css('');
            $(".highcharts-tracker").eq($(".highcharts-tracker").size() - 3).find('path').hide();

            $('#loan-amount').val('100000')
            $('#interest-rate').val('13')
            $('#year').val('5');

            //Rural Agri Calculator
            if ($(".ruralAgriCalculator").length) {
                $('#loan-amount').val('3000')
                $('#interest-rate').val('7')
                $('#year').val('15');
            }


            if ($(".carLoanEmiCalculator").length) {
                $('#interest-rate').val('7.25');
                $('#year').val('7');
            }


            if ($('input').prev('span').length == 0) {
                $("<span class='uncheked'></span>").insertBefore('input:radio, input:checkbox');
            }
            $('.repayment-type input:radio').eq(0).attr('checked', 'checked').prev('span').addClass('cheked')

            $('input:radio').each(function() {
                var Check = $(this).is(':checked');
                if (Check) {
                    $(this).prev('span').addClass('cheked').removeClass('uncheked').parent().siblings().find('span').addClass('uncheked').removeClass('cheked');
                }
            })

            $('input:radio').live('click', function() {
                var Check = $(this).is(':checked');
                if (Check) {
                    $(this).prev('span').addClass('cheked').removeClass('uncheked').parent().siblings().find('span').addClass('uncheked').removeClass('cheked');
                }
                $("#repayment").text(monthlyRepayment);
            });

            $("#repayment").text(monthlyRepayment);
            slider();
            calculatter(yearArrayAmount());



            if ($(".ruralAgriCalculator").length) {
                $("#loan-amount").keyup(function(e) {
                    if (isNaN(this.value)) {
                        alert('Please enter integer value')
                        this.value = "3000";
                        return
                    };
                    if (this.value > 20000000) {
                        alert('Please enter loan amount between 3000 to 20000000');
                        this.value = "3000"
                        slider_range_min(this.value);
                        return;
                    }
                    //if(this.value<10000 ) return;
                    slider_range_min(this.value);
                    calculatter(yearArrayAmount());
                });
            }



            if (!$(".ruralAgriCalculator").length) {
                $("#loan-amount").keyup(function(e) {
                    if (isNaN(this.value)) {
                        alert('Please enter integer value')
                        this.value = "100000";
                        return
                    };
                    if (this.value > 20000000) {
                        alert('Please enter loan amount between 100000 to 20000000');
                        this.value = "100000"
                        slider_range_min(this.value);
                        return;
                    }
                    //if(this.value<10000 ) return;
                    slider_range_min(this.value);
                    calculatter(yearArrayAmount());
                });
            }

            $('#loan-amount').parent().prepend('<span class="error alignRight">Min. 100000</span>');
            $('#interest-rate').parent().prepend('<span class="error alignRight">Min. 6</span>');
            $('#year').parent().prepend('<span class="error alignRight">Min. 1</span>');

            //Rural Agri Calculator
            if ($(".ruralAgriCalculator").length) {
                $('#loan-amount').parent().prepend('<span class="error alignRight ruralAgriMin">Min. 3000</span>');
                $('#interest-rate').parent().prepend('<span class="error alignRight ruralAgriMin">Min. 7</span>');
                $('#year').parent().prepend('<span class="error alignRight ruralAgriMin">Min. 1</span>');
            }

            if (!$(".ruralAgriCalculator").length) {
                $("#interest-rate").keyup(function(e) {
                    var interest = parseFloat(this.value.replace(' % p.a', ''));
                    if (isFloat(interest) || !isNaN(interest)) {} else {
                        //alert('Please enter integer value')
                        this.value = ""
                        return
                    }
                    this.value = this.value.replace(/[^\d\.\-]/g, '');
                    if (interest > 22) {
                        alert('Please enter interest rate between 6 to 22');
                        this.value = ""
                        return;
                    }
                    /*if(isNaN(interest)){
                    	//$('#interest-rate').focus();
                    	$('#year').val('');
                    	slider_range_min(1);
                    }*/
                    /*if(!isNaN(interest)){
                    	$('#year').val('5');
                    }*/
                    //if(interest<8 ) return;
                    slider_range_min2(interest);
                    calculatter(yearArrayAmount());
                });
            }


            //Rural Agri Calculator
            if ($(".ruralAgriCalculator").length) {
                $("#interest-rate").keyup(function(e) {
                    var interest = parseFloat(this.value.replace(' % p.a', ''));
                    if (isFloat(interest) || !isNaN(interest)) {} else {
                        //alert('Please enter integer value')
                        this.value = "7"
                        slider_range_min2(interest);
                        calculatter(yearArrayAmount());
                        return;
                    }
                    this.value = this.value.replace(/[^\d\.\-]/g, '');
                    if (interest > 20) {
                        alert('Please enter interest rate between 7 to 20');
                        this.value = "7"
                        slider_range_min2(interest);
                        calculatter(yearArrayAmount());
                        return;
                    }
                    /*if(isNaN(interest)){
                    	//$('#interest-rate').focus();
                    	$('#year').val('');
                    	slider_range_min(1);
                    }*/
                    /*if(!isNaN(interest)){
                    	$('#year').val('5');
                    }*/
                    //if(interest<8 ) return;
                    slider_range_min2(interest);
                    calculatter(yearArrayAmount());
                });
            }



            if ($(".carLoanEmiCalculator").length) {
                $("#interest-rate").keyup(function(e) {
                    var interest = parseFloat(this.value.replace(' % p.a', ''));
                    if (isFloat(interest) || !isNaN(interest)) {} else {
                        //alert('Please enter integer value')
                        this.value = ""
                        return
                    }
                    this.value = this.value.replace(/[^\d\.\-]/g, '');
                    if (interest > 7.25) {
                        alert('Please enter interest rate between 6 to 7.25');
                        this.value = ""
                        return;
                    }
                    /*if(isNaN(interest)){
                    	//$('#interest-rate').focus();
                    	$('#year').val('');
                    	slider_range_min(1);
                    }*/
                    /*if(!isNaN(interest)){
                    	$('#year').val('5');
                    }*/
                    //if(interest<8 ) return;
                    slider_range_min2(interest);
                    calculatter(yearArrayAmount());
                });
            }

            if (!$(".ruralAgriCalculator").length) {
                $("#year").keyup(function(e) {
                    var year = parseInt($("#year").val().replace(' year', ''));
                    if (isNaN(year)) {
                        //alert('Please enter integer value')
                        this.value = ""
                        return
                    };
                    this.value = this.value.replace(/[^\d\.\-]/g, '');
                    if (year > 35) {
                        alert('Please enter year between 1 to 35')
                        return;
                    }
                    slider_range_min3(year);
                    calculatter(yearArrayAmount());
                });
            }


            //Rural Agri Calculator
            if ($(".ruralAgriCalculator").length) {
                $("#year").keyup(function(e) {
                    var year = parseInt($("#year").val().replace(' year', ''));
                    if (isNaN(year)) {
                        //alert('Please enter integer value')
                        this.value = ""
                        return
                    };
                    this.value = this.value.replace(/[^\d\.\-]/g, '');
                    if (year > 15) {
                        alert('Please enter year between 1 to 15')
                        this.value = "15";
                        return;
                    }
                    slider_range_min3(year);
                    calculatter(yearArrayAmount());
                });
            }


            if ($(".carLoanEmiCalculator").length) {
                $("#year").keyup(function(e) {
                    var year = parseInt($("#year").val().replace(' year', ''));
                    if (isNaN(year)) {
                        //alert('Please enter integer value')
                        this.value = ""
                        return
                    };
                    this.value = this.value.replace(/[^\d\.\-]/g, '');
                    if (year > 7) {
                        alert('Please enter year between 1 to 7')
                        return;
                    }
                    slider_range_min3(year);
                    calculatter(yearArrayAmount());
                });
            }
            if (!$(".ruralAgriCalculator").length) {
                $("#loan-amount").blur(function() {
                    if (this.value < 100000) {
                        alert('Please enter loan amount between 100000 to 20000000');
                        slider_range_min(1);
                        //return;
                        //$(this).focus();
                    }
                    //$(this).val('');
                    //$('#loan-amount').focus();
                })
            }

            //Rural Agri Calculator
            if ($(".ruralAgriCalculator").length) {
                $("#loan-amount").blur(function() {
                    if (this.value < 3000) {
                        alert('Please enter loan amount between 3000 to 20000000');
                        slider_range_min(this.value);
                        this.value = "3000";
                        return;
                        //return;
                        //$(this).focus();
                    }
                    //$(this).val('');
                    //$('#loan-amount').focus();
                })
            }

            if (!$(".ruralAgriCalculator").length) {
                $("#interest-rate").blur(function() {
                    var interest = parseFloat(this.value.replace(' % p.a', ''));
                    if (interest < 6) {
                        alert('Please enter interest rate between 6 to 22')
                        $('#interest-rate').val('');
                        slider_range_min2(1);
                        $('#interest-rate').focus();
                    }
                    if (isNaN(interest)) {
                        //$('#year').val('');
                        slider_range_min2(1);
                        //slider_range_min3(1);
                        calculatter(yearArrayAmount());
                    }
                    /*if(!isNaN(interest)){
                    	$('#year').val('5');
                    }*/
                })
            }

            if ($(".ruralAgriCalculator").length) {

                $("#interest-rate").blur(function() {
                    var interest = parseFloat(this.value.replace(' % p.a', ''));
                    if (interest < 7) {
                        alert('Please enter interest rate between 7 to 20')
                        $('#interest-rate').val('7');
                        slider_range_min2(7);
                        $('#interest-rate').focus();
                        slider_range_min2(interest);
                        calculatter(yearArrayAmount());
                    }
                    if (isNaN(interest)) {
                        //$('#year').val('');
                        slider_range_min2(interest);
                        //slider_range_min3(1);
                        calculatter(yearArrayAmount());
                    }
                    /*if(!isNaN(interest)){
                    	$('#year').val('5');
                    }*/
                })
            }

            if (!$(".ruralAgriCalculator").length) {
                $("#year").blur(function() {
                    var year;
                    year = parseInt($("#year").val().replace(' year', ''));
                    year = parseInt($("#year").val().replace('year', ''));
                    if (year < 1) {
                        alert('Please enter year between 1 to 35')
                        $('#year').val('');
                        $('#year').focus();
                        slider_range_min3(1);
                    }
                    if (year > 35) {
                        $("#year").val('');
                        slider_range_min3(1);
                        calculatter(yearArrayAmount());
                    }
                    if (isNaN(year)) {
                        //$('#interest-rate').val('');			
                        //slider_range_min2(1);
                        slider_range_min3(1);
                        calculatter(yearArrayAmount());
                    }
                })
            }

            if ($(".ruralAgriCalculator").length) {
                $("#year").blur(function() {
                    var year;
                    year = parseInt($("#year").val().replace(' year', ''));
                    year = parseInt($("#year").val().replace('year', ''));
                    if (year < 1) {
                        alert('Please enter year between 1 to 15')
                        $('#year').val('15');
                        $('#year').focus();
                        slider_range_min3(1);
                    }
                    if (year > 15) {
                        $("#year").val('15');
                        slider_range_min3(1);
                        calculatter(yearArrayAmount());
                    }
                    if (isNaN(year)) {
                        //$('#interest-rate').val('');			
                        //slider_range_min2(1);
                        slider_range_min3(1);
                        calculatter(yearArrayAmount());
                    }
                })
            }

            if ($(".carLoanEmiCalculator").length) {
                $("#year").blur(function() {
                    var year;
                    year = parseInt($("#year").val().replace(' year', ''));
                    year = parseInt($("#year").val().replace('year', ''));
                    if (year < 1) {
                        alert('Please enter year between 1 to 7')
                        $('#year').val('');
                        $('#year').focus();
                        slider_range_min3(1);
                    }
                    if (year > 7) {
                        $("#year").val('');
                        slider_range_min3(1);
                        calculatter(yearArrayAmount());
                    }
                    if (isNaN(year)) {
                        //$('#interest-rate').val('');			
                        //slider_range_min2(1);
                        slider_range_min3(1);
                        calculatter(yearArrayAmount());
                    }
                });
            }


            $(".popup-click2Talk").css('left', ($(window).width() - $(".popup-click2Talk").width()) / 2)
            $(".click2Talk").click(function() {
                $("#cee_overlay").show();
                $(".popup-click2Talk").fadeIn();
            })

            $("#cee_closeBtn,#cee_overlay").click(function() {
                $("#cee_overlay").fadeOut(500);
                $(".popup-click2Talk").fadeOut(400);
            });

            slider_range_min(100000);
            slider_range_min2(13);
            slider_range_min3(5);

            $('#year').keydown(function(e) {
                var unicode = e.charCode ? e.charCode : e.keyCode
                if ((unicode >= 96 && unicode <= 105) || (unicode >= 49 && unicode <= 57) || unicode == 8 || unicode == 37 || unicode == 39 || unicode == 46) {
                    return true;
                }
                /*else{
                			return false //disable key press
                		}*/
            });

        }

        /*Navigation */
        if ($("#navMob").length) {
            if ($(".toggleMenu").length == 0) {
                $("#mainNav").prepend('<div class="menuBar"><a href="#" class="toggleMenu"><span class="mobileMenu">Menu</span><span class="iconBar homeSprite"></span></a></div>');
            }
            $(".toggleMenu").click(function() {
                $(this).toggleClass("active");

                $("body").addClass("activeMobNav");
                return false;
            });
            $("#navMob li a").each(function() {
                if ($(this).next().length) {
                    $(this).parent().addClass("parent");
                };
            })
            $("#navMob li.parent").each(function() {
                if ($(this).has(".menuIcon").length <= 0) $(this).append('<i class="menuIcon">&nbsp;</i>')
            });
            dropdown('nav', 'hover', 1);
            adjustMenu();


            /*var $menuOverlay = $('.menuOverlay');
            $('#nav').hover(function(){
            	$('#wrapper').prepend('<div class="menuOverlay"></div>');
            	$('.menuOverlay').fadeIn();
            }, function(){
            	$('.menuOverlay').remove();
            });*/

        };









        //Main nav add class active

        //$(".headerRow .topNav li a").filter(function(){
        //return this.href == location.href.replace(/#.*/, "");
        //}).addClass("active");


        //$("#nav a").filter(function(){
        //		return this.href == location.href.replace(/#.*/, "");
        //	}).addClass("current").parent().addClass("current").parent().parent().addClass("current").parent().parent().addClass("current").parent().parent().addClass("current");
        //	
        //	
        //	//Nav First child add class active
        //	if (!$('#nav > li').hasClass('current')){
        //	  	$('#nav .MenuLi1').addClass('current');
        //	}
        //	else{
        //			$("#nav a").filter(function(){
        //				return this.href == location.href.replace(/#.*/, "");
        //			}).addClass("current").parent().addClass("current").parent().parent().addClass("current").parent().parent().addClass("current").parent().parent().addClass("current");
        //		}








        //Custome Select
        if ($("select.customSelect").length) {
            $("select.customSelect").customSelect();
        }


        if ($(".didyouknowSlider").length) {
            $('.didyouClick').magnificPopup({
                type: 'inline',
                fixedContentPos: false,
                fixedBgPos: true,
                overflowY: 'auto',
                closeBtnInside: true,
                preloader: false,
                midClick: true,
                removalDelay: 300,
                mainClass: 'my-mfp-zoom-in',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                },
            });
        }


        //Director Profile Popup
        $('.directorProfile, .inlinePopup').magnificPopup({
            type: 'inline',
            fixedContentPos: false,
            fixedBgPos: true,
            overflowY: 'auto',
            closeBtnInside: true,
            preloader: false,
            midClick: true,
            removalDelay: 300,
            mainClass: 'my-mfp-zoom-in'
        });

        $('.callBackLink .callBacPopup').click(function(event) {
            $('body').append('<div class="requestPopOverlay"></div>');
            $('.requestPopOverlay').fadeIn();
            $('#request-callback-popup').fadeIn();
            $('#request-callback-popup').css('top', event.pageY - 120);
            return false;
        });


        $('#request-callback-popup .mfp-close').click(function() {


            $('.requestPopOverlay').remove();
            $('#request-callback-popup').fadeOut();
            window.location.pathname.reload();
            return false;
        });

        //Buy Now Popup
        $('.applyNowLinks').click(function(event) {
            $('body').append('<div class="requestPopOverlay"></div>');
            $('.requestPopOverlay').fadeIn();
            $('#applyNowPopup').fadeIn();
            //$('#applyNowPopup').css('top', event.pageY - 120);
            return false;
        });


        $('#applyNowPopup .mfp-close').click(function() {
            $('.requestPopOverlay').remove();
            $('#applyNowPopup').fadeOut();
            return false;
        });




        //callBackScroll();
        //var winHeight = $(window).height() - 370;
        //$(".callBackHeight").height(winHeight);

        $('.videosPopup').magnificPopup({
            type: 'iframe',
            mainClass: 'closeBtnIn',
            preloader: false,
            closeBtnInside: false,
            fixedContentPos: false
        });


        //Photo Gallery
        $('.litebox').magnificPopup({
            //delegate: 'a',
            type: 'image',
            tLoading: 'Loading image...',
            mainClass: 'closeBtnIn', //mfp-img-mobile
            closeBtnInside: false,
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [1] // Will preload 0 - before current, and 1 after the current image
            }
        });

        //Awards Popup
        $('.imgPopup').magnificPopup({
            type: 'image',
            closeOnContentClick: false,
            mainClass: 'closeBtnIn', //mfp-img-mobile
            closeBtnInside: false
        });

        //Blog info graphics popup
        $('.blogInfoGra').magnificPopup({
            type: 'image',
            closeOnContentClick: false,
            mainClass: 'closeBtnIn', //mfp-img-mobile
            closeBtnInside: false,
            fixedContentPos: false,
        });

        if ($(".homeVideoList").length) {
            $('.blogInfoGra').magnificPopup({
                type: 'inline',
                fixedContentPos: false,
                fixedBgPos: true,
                overflowY: 'auto',
                closeBtnInside: true,
                preloader: false,
                midClick: true,
                removalDelay: 300,
                mainClass: 'my-mfp-zoom-in',
            });
        }

        //Accordion
        if ($(".accordion").length) {
            $('.accordion .accordDetail').hide();
            $(".accordion .accordDetail:first").show();
            $(".accordion .accTrigger:first").addClass("active");
            $('.accordion .accTrigger').click(function() {
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active');
                    $(this).next().slideUp();
                } else {
                    if ($('body').hasClass('desktop')) {
                        $('.accordion .accTrigger').removeClass('active');
                        $('.accordion .accordDetail').slideUp();
                    }
                    $(this).addClass('active');
                    $(this).next().slideDown();
                }
                return false;
            });
        };


        //Accordion
        if ($(".accordionFooter").length) {
            if ($(window).width() < 768) {
                $('.accordionFooter .accordDetailFooter').hide();

                $('.accordionFooter .accTriggerFooter').click(function() {
                    if ($(this).hasClass('active')) {
                        $(this).removeClass('active');
                        $(this).next().slideUp();
                    } else {
                        if ($('body').hasClass('desktop')) {
                            $('.accordionFooter .accTriggerFooter').removeClass('active');
                            $('.accordionFooter .accordDetailFooter').slideUp();
                        }
                        $(this).addClass('active');
                        $(this).next().slideDown();
                    }
                    return false;
                });
            }
        }




        //Accordion
        if ($(".contentAcc").length) {
            //$('.contentAcc .accordDetail').hide();
            //$(".contentAcc .accordDetail:first").hide(); 
            //$(".contentAcc .accTrigger:first").addClass("active");	
            $('.contentAcc .accTrigger').click(function() {
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active');
                    $(this).next().slideUp();
                } else {
                    if ($('body').hasClass('desktop')) {
                        $('.contentAcc .accTrigger').removeClass('active');
                        $('.contentAcc .accordDetail').slideUp();
                    }
                    $(this).addClass('active');
                    $(this).next().slideDown();
                }
                return false;
            });
        };

        //Key Milestones
        if ($(".bankFounded").length) {
            $('.customTabNav a').click(function(e) {
                e.preventDefault();
                $(this).parent().addClass("active");
                $(this).parents("ul").siblings().find("li").removeClass("active");
                //$(this).parent().prevAll().addClass("active");
                var outerHeight = 30;
                $(this).parent().prevAll().each(function() {
                    outerHeight += $(this).outerHeight();
                });
                $(".bankFounded .customTab .middleBorder").css('height', outerHeight + 'px');
                var tab = $(this).attr("href");
                $(this).closest(".customTabNav").siblings(".tabContainer").find(".customTabContent").not(tab).css("display", "none");
                $(tab).show();
            });

            $(".customTab").each(function() {
                $(this).find(".customTabNav li:first").addClass("active");
            });
            $(".customTabNav li.active a").trigger("click");
        };

        //Custom tab for History page
        if ($(".customTab").length) {
            $('.customTabNav a').click(function(e) {
                e.preventDefault();
                $(this).parent().addClass("active");
                $(this).parent().siblings().removeClass("active");
                //$(this).parent().prevAll().addClass("active");
                var outerHeight = 30;
                $(this).parent().prevAll().each(function() {
                    outerHeight += $(this).outerHeight();
                });
                $(".bankFounded .customTab .middleBorder").css('height', outerHeight + 'px');
                var tab = $(this).attr("href");
                $(this).closest(".customTabNav").siblings(".tabContainer").find(".customTabContent").not(tab).css("display", "none");
                $(tab).show();
            });

            $(".customTab").each(function() {
                $(this).find(".customTabNav li:first").addClass("active");
            });
            $(".customTabNav li.active a").trigger("click");
        };

        //Internet Banking Apply Tab
        if ($(".ibApplyTab").length) {
            $('.ibApplyTabNav a').click(function(e) {
                e.preventDefault();
                $(this).parent().addClass("active");
                $(this).parent().siblings().removeClass("active");
                var tab = $(this).attr("href");
                $(this).closest(".ibApplyTabNav").siblings(".ibApplyTabContainer").find(".ibApplyCustomTabContent").not(tab).css("display", "none");
                $(tab).show();
            });

            $(".ibApplyTab").each(function() {
                $(this).find(".ibApplyTabNav li:first").addClass("active");
            });
            $(".ibApplyTabNav li.active a").trigger("click");
        };


        //Branches Location Hide Show
        /*$('.branchesList ul li a').click(function() {
		$('html, body').animate({
        	scrollTop: $("#globalMap").offset().top - 200
    	}, 500);
	});*/

        if ($(".branchDetail").length > 0) {
            $('.branchesList ul li a').click(function() {
                var BrancheDetail = $(this).attr('href');
                $("body").prepend('<div class="gnOverlayLayer"></div>');

                if ($(BrancheDetail).hasClass('active')) {
                    $(BrancheDetail).removeClass('active');
                } else {
                    $(BrancheDetail).addClass('active');
                }
                return false;
            });

            $('.branchDetail .close').click(function() {
                $(".branchDetail").removeClass('active');
                $(".gnOverlayLayer").remove();
            });

            $(document).bind('mousedown touchstart', function(e) {
                if ($(e.target).closest('.branchDetail').length === 0) {
                    $('.branchDetail').removeClass('active');
                    $(".gnOverlayLayer").remove();
                }
            });
        }

        if ($(".branchDetail").length > 0) {
            $('.globalPresence .map .marker').click(function() {

                if ($(this).next().hasClass('active')) {
                    $(this).next().removeClass('active');
                } else {
                    $(this).next().addClass('active');
                }
                return false;
            });

            $(document).bind('mousedown touchstart', function(e) {
                if ($(e.target).closest('.branchDetail').length === 0) {
                    $('.branchDetail').removeClass('active');
                }
            });
        }


        //Debit card more benifits
        if ($(".debitCard .otherBenefits .box").length > 0) {
            $('.debitCard .benefitsBtn').click(function() {

                if ($(this).next().hasClass('animated bounceInLeft')) {
                    $(this).next().removeClass('animated bounceInLeft');
                } else {
                    $(this).next().addClass('animated bounceInLeft');
                }
                return false;
            });

            $('.debitCard .otherBenefits .box .close').click(function() {
                $(".debitCard .otherBenefits .box").removeClass('animated bounceInLeft');
            });

            $(document).bind('mousedown touchstart', function(e) {
                if ($(e.target).closest('.debitCard .otherBenefits .box').length === 0) {
                    $('.debitCard .otherBenefits .box').removeClass('animated bounceInLeft');
                }
            });
        }

        if ($(".debitCard .row:nth-child(even) .otherBenefits .box").length > 0) {
            $('.debitCard .row:nth-child(even)  .benefitsBtn').click(function() {

                if ($(this).next().hasClass('animated bounceInRight')) {
                    $(this).next().removeClass('animated bounceInRight');
                } else {
                    $(this).next().addClass('animated bounceInRight');
                    $(this).next().removeClass('bounceInLeft');
                }
                return false;
            });

            $(document).bind('mousedown touchstart', function(e) {
                if ($(e.target).closest('.debitCard .row:nth-child(even)  .otherBenefits .box').length === 0) {
                    $('.debitCard .row:nth-child(even)  .otherBenefits .box').removeClass('animated bounceInRight');
                }
            });
        }




        //Left Nav Hide Show
        if ($("#menuLeft").length > 0) {
            $("#menuLeft li > ul").hide();
            $("#menuLeft li.activeLI > ul").show();
            $("#menuLeft li > ul li a[class=active]").parents('ul').show().prev('a').addClass('active');
            $("#menuLeft li:has(ul)").addClass("parent");
            $("#menuLeft li:has(ul)").append("<em class='menuLeftPlus'></em>");
            $("#menuLeft li .menuLeftPlus").on('click', function(e) {
                if (e.target && e.target.nodeName == "A") {
                    //window.location.href = $('#nav li.MenuLi a').attr('href');
                    //return;
                } else {
                    $(this).parent().toggleClass('activeLI');
                    $(this).siblings('ul').stop().slideToggle('slow');
                    //return false;

                    $(this).parent().siblings('li').find('ul:visible').slideUp('slow').parent('li').removeClass('activeLI').find('a').removeClass('active');
                    return false;
                }
            });
        }

        //Sidebar nav add class active
        $("#menuLeft a").filter(function() {
            return this.href == location.href.replace(/#.*/, "");
        }).parent().addClass("activeLI").find('ul').show();

        /*var visaCard_position = $('.row.visaCard').offset().top - 200;

    $(window).scroll(function () {
        var scrollBar = $(this).scrollTop();
        if (scrollBar >= visaCard_position) {
            $('.row.visaCard .imgHolder').addClass('animated bounceInLeft');
			$('.row.visaCard .otherBenefits').addClass('animated bounceInLeft');
			$('.row.visaCard .keyFeatures').addClass('animated bounceInRight');
        }
    });*/

        // Google Map gmap3 
        /*if( $("#headOfficeMap").length){	
	
        	var lang = 22.3119202; 
        	var lati = 73.1723659;
        	var contentString = '<div id="content">'+
            '<strong>' + 'VyaparAadhar' + '</strong>'+
            '<div id="bodyContent">'+ 'Vyapar Aadhar Bhavan, R C Dutt Road,' + '<br/>' +
        	'Alkapuri, Vashi - 390007'
            '</div></div>';
        	
        	var map = new google.maps.Map(document.getElementById('headOfficeMap'), {
        	zoom:16
        	,center: new google.maps.LatLng(lang , lati)

        	,mapTypeId: google.maps.MapTypeId.ROADMAP
        	});	
        	
            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });
        	google.maps.event.addListener(map, 'click', function() {
        	  infowindow.close();
        	});
        	var marker = new google.maps.Marker({
        	  map: map,
        	  position: new google.maps.LatLng(lang , lati)
        	});
        	google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map,marker);
            });
        	infowindow.open(map,marker);
        };
	
	
	
	
        	if( $("#corOfficeMap").length){	
        	var lang = 19.060610;  
        	var lati = 72.863982;
        	var contentString = '<div id="content">'+
            '<strong>' + 'VyaparAadhar' + '</strong>'+
            '<div id="bodyContent">'+ 'Vyapar Aadhar Corporate Centre, Plot No. C-26, Block G,' + '<br/>' +
        	'Bandra Kurla Complex, Bandra (East),' + '<br/>' +
        	'Mumbai 400051'
            '</div></div>';

        	
        	var map = new google.maps.Map(document.getElementById('corOfficeMap'), {
        	zoom: 16
        	,center: new google.maps.LatLng(lang , lati)
        	,mapTypeId: google.maps.MapTypeId.ROADMAP
        	});	
        	
            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });
        	google.maps.event.addListener(map, 'click', function() {
        	  infowindow.close();
        	});
        	var marker = new google.maps.Marker({
        	  map: map,
        	  position: new google.maps.LatLng(lang , lati)
        	});
        	google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map,marker);
            });
        	infowindow.open(map,marker);
        	
        };
	
	
        function corOfficeMapReload() {
        	if( $("#corOfficeMap").length){	
        	var lang = 19.060610;  
        	var lati = 72.863982;
        	var contentString = '<div id="content">'+
            '<strong>' + 'VyaparAadhar' + '</strong>'+
            '<div id="bodyContent">'+ 'Vyapar Aadhar Corporate Centre, Plot No. C-26, Block G,' + '<br/>' +
        	'Bandra Kurla Complex, Bandra (East),' + '<br/>' +
        	'Mumbai 400051'
            '</div></div>';
        	
        	var map = new google.maps.Map(document.getElementById('corOfficeMap'), {
        	zoom: 16
        	,center: new google.maps.LatLng(lang , lati)
        	,mapTypeId: google.maps.MapTypeId.ROADMAP
        	});	
        	
            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });
        	google.maps.event.addListener(map, 'click', function() {
        	  infowindow.close();
        	});
        	var marker = new google.maps.Marker({
        	  map: map,
        	  position: new google.maps.LatLng(lang , lati)
        	});
        	google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map,marker);
            });
        	infowindow.open(map,marker);
        	
        };
        }
	
        $('.contactOffInfo .officesTab li:nth-child(2) a').click(function() {
        	setTimeout(function(){ corOfficeMapReload(); }, 30);
        });*/




        //Branch/ATM locator map
        var atmLocator1 = "<div class='atmPopupBox'><h3>Branch</h3><h4>Gujarat University <span>(2.5 km)</span></h4><p>Opp Ncc Ground, Ellisbridge, Ashram Road, Ahmedabad, Gujarat</p><ul><li><div class='label'>Call</div><div class='value'>079-64731110</div></li><li><div class='label'>Email</div><div class='value'><a href='mailto:lawahm@vyaparaadhar.com'>lawahm@vyaparaadhar.com</a></div></li><li> <div class='label'>IFSC</div><div class='value'>BARB0ASHRAM</div></li></ul></div>";

        var atmLocator2 = "<div class='atmPopupBox'><h3>Branch</h3><h4>Nehru Nagar <span>(2.5 km)</span></h4><p>Opp Ncc Ground, Ellisbridge, Ashram Road, Ahmedabad, Gujarat</p><ul><li><div class='label'>Call</div><div class='value'>079-64731110</div></li><li><div class='label'>Email</div><div class='value'><a href='mailto:lawahm@vyaparaadhar.com'>lawahm@vyaparaadhar.com</a></div></li><li> <div class='label'>IFSC</div><div class='value'>BARB0ASHRAM</div></li></ul></div>";

        var atmLocator3 = "<div class='atmPopupBox'><h3>Branch</h3><h4>Ambawadi <span>(1 km)</span></h4><p>Opp Ncc Ground, Ellisbridge, Ashram Road, Ahmedabad, Gujarat</p><ul><li><div class='label'>Call</div><div class='value'>079-64731110</div></li><li><div class='label'>Email</div><div class='value'><a href='mailto:lawahm@vyaparaadhar.com'>lawahm@vyaparaadhar.com</a></div></li><li> <div class='label'>IFSC</div><div class='value'>BARB0ASHRAM</div></li></ul></div>";

        var atmLocator4 = "<div class='atmPopupBox'><h3>Branch</h3><h4>Ellisbridge <span>(2.5 km)</span></h4><p>Opp Ncc Ground, Ellisbridge, Ashram Road, Ahmedabad, Gujarat</p><ul><li><div class='label'>Call</div><div class='value'>079-64731110</div></li><li><div class='label'>Email</div><div class='value'><a href='mailto:lawahm@vyaparaadhar.com'>lawahm@vyaparaadhar.com</a></div></li><li> <div class='label'>IFSC</div><div class='value'>BARB0ASHRAM</div></li></ul></div>";

        var atmLocator5 = "<div class='atmPopupBox'><h3>Branch</h3><h4>Saraspur <span>(3.5 km)</span></h4><p>Opp Ncc Ground, Ellisbridge, Ashram Road, Ahmedabad, Gujarat</p><ul><li><div class='label'>Call</div><div class='value'>079-64731110</div></li><li><div class='label'>Email</div><div class='value'><a href='mailto:lawahm@vyaparaadhar.com'>lawahm@vyaparaadhar.com</a></div></li><li> <div class='label'>IFSC</div><div class='value'>BARB0ASHRAM</div></li></ul></div>";

        if ($("#atmLocatorMa").length) {

            $("#atmLocatorMap").gmap3({
                map: {
                    options: {
                        center: [23.018903, 72.554840],
                        zoom: 13
                    }
                },
                marker: {
                    values: [
                        { latLng: [23.035863, 72.546854], data: atmLocator1 },
                        { latLng: [23.018330, 72.533718], data: atmLocator2 },
                        { latLng: [23.018903, 72.554840], data: atmLocator3 },
                        { latLng: [23.021522, 72.571876], data: atmLocator4 },
                        { latLng: [23.019525, 72.599766], data: atmLocator5 },
                    ],
                    options: {
                        draggable: false,
                        icon: "writereaddata/images/atm-map-marker.png"
                    },
                    events: {
                        click: function(marker, event, context) {
                            var map = $(this).gmap3("get"),
                                infowindow = $(this).gmap3({ get: { name: "infowindow" } });
                            if (infowindow) {
                                infowindow.open(map, marker);
                                infowindow.setContent(context.data);
                            } else {
                                $(this).gmap3({
                                    infowindow: {
                                        anchor: marker,
                                        options: { content: context.data }
                                    }
                                });
                            }
                        },

                    }
                }
            });
        }

        // Responsive Tabing Script
        if ($(".resTab").length) {
            $('.resTab').responsiveTabs({
                rotate: false,
                startCollapsed: 'tab' //accordion
                    ,
                collapsible: 'accordion' //accordion
                    ,
                scrollToAccordion: true,
                scrollToAccordionOnLoad: false
            });
        };

        if ($(".resTab2").length) {
            $('.resTab2').responsiveTabs({
                rotate: false,
                startCollapsed: 'tab' //accordion
                    ,
                collapsible: 'accordion' //accordion
                    ,
                scrollToAccordion: true,
                scrollToAccordionOnLoad: false
            });
        };

        // Responsive Table
        if ($(".responsiveTable").length) {
            $(".responsiveTable").each(function() {
                $(this).find('td').removeAttr('width');
                //$(this).find('td').removeAttr('align');
                var head_col_count = $(this).find('tr th').size();
                // loop which replaces td
                for (i = 0; i <= head_col_count; i++) {
                    // head column label extraction
                    var head_col_label = $(this).find('tr th:nth-child(' + i + ')').text();
                    // replaces td with <div class="column" data-label="label">
                    $(this).find('tr td:nth-child(' + i + ')').attr("data-label", head_col_label);
                }
            });
        };

        // Responsive Table

        if ($(".tableData").length) {
            $(".tableData").each(function() {
                $(this).wrap('<div class="tableOut"></div>');
            });
        };

        //Custom Scrollbar
        /*$(".loanDetail .tabContent").mCustomScrollbar({
        	setHeight:490,
        	theme:"dark-3"
        });*/







        $('#nav ul li.parent').hover(function() {
            $('.sliderOverlay').addClass('active');
        }, function() {
            $('.sliderOverlay').removeClass('active');
        });

        // Home Product Listing
        if ($('.homeProductListing').length) {
            $('.homeProductListing').find('li').hover(function() {
                $('.bgfullImg').removeAttr('class').addClass('bgfullImg ' + $(this).attr('class') + 'Bg');
                $(this).find('.sprite').addClass('fadeInUp').siblings('.productTitle').addClass('fadeInUp').siblings('.exploreBtn').addClass('fadeInUp');

                setTimeout(function() {
                    $('.bgfullImg').addClass('fadeIn hover');
                }, 750);
            }, function() {
                $('.bgfullImg').removeAttr('class').addClass('bgfullImg barodaConnectBg');
                $(this).find('.sprite').removeClass('fadeInUp').siblings('.productTitle').removeClass('fadeInUp').siblings('.exploreBtn').removeClass('fadeInUp');
            });
        }

        // BOB Global Network
        if ($('.bobNetwork').length) {
            $('.networkLink').click(function() {
                $(this).parent().prepend('<div class="overlayLayer"></div>');
                $(this).next().addClass("active");
                return false;
            });
            $('.networkCloseBtn').click(function() {
                $('.overlayLayer').remove();
                $('.bobNetwork').removeClass("active");
                return false;
            });
        }

        // Offer Listing Hover
        /*if($('.shareNknowBtns').length){
        	$('.exclusiveOffersList').find('.swiper-slide').hover(function(){
        		var $this = $(this).find('.shareNknowBtns');
        		$this.children('.shareNknowOverlay').addClass('active');
        		$this.animate({ 'bottom': 0 }, 400);
        		$this.children('.shareNknowBtnsInner').stop().fadeIn(200);
        		$(this).find('.shareOn').addClass('fadeInUp').next().addClass('fadeInUp').next().addClass('fadeInUp');
        	}, function(){
        		var $this = $(this).find('.shareNknowBtns');
        		$this.children('.shareNknowOverlay').removeClass('active');
        		$this.animate({ 'bottom': '-150%' }, 400);
        		$this.children('.shareNknowBtnsInner').stop().fadeOut(200);
        		$(this).find('.shareOn').addClass('fadeInUp').next().removeClass('fadeInUp').next().removeClass('fadeInUp');
        	});
        }*/





        if ($('.breadcrumb span.currentPage').is(':empty')) {
            $('.breadcrumb').addClass("smallBreadcrumb");
        }


        // Offer Listing Hover
        /*if($('.shareNknowBtns').length){
        	$('.exclusiveOffersList').find('.swiper-slide').hover(function(){
        		var $this = $(this).find('.shareNknowBtns');
        		$this.children('.shareNknowOverlay').addClass('active');
        		$this.animate({ 'bottom': 0 }, 400);
        		$this.children('.shareNknowBtnsInner').stop().fadeIn(200);
        		$(this).find('.shareOn').addClass('fadeInUp').next().addClass('fadeInUp').next().addClass('fadeInUp');
        	}, function(){
        		var $this = $(this).find('.shareNknowBtns');
        		$this.children('.shareNknowOverlay').removeClass('active');
        		$this.animate({ 'bottom': '-150%' }, 400);
        		$this.children('.shareNknowBtnsInner').stop().fadeOut(200);
        		$(this).find('.shareOn').addClass('fadeInUp').next().removeClass('fadeInUp').next().removeClass('fadeInUp');
        	});
        }*/

        //Footer Hide Show
        if ($(".footerHide").length > 0) {
            //$('.footerHide').addClass('footerSlideUp');
            $('.footerSlideup').click(function() {
                $(".announcements").removeClass("active");
                $("html, body").animate({ scrollTop: $(document).height() }, 200);
                if ($('.footerHide').hasClass('footerSlideUp')) {
                    $(this).removeClass('active');
                    $('.footerHide').addClass('footerSlideDown');
                    $('.footerHide').removeClass('footerSlideUp');
                    $(".footerSlideup").attr('title', 'Click to Open');
                } else {
                    $('.footerHide').removeClass('footerSlideDown');
                    $('.footerHide').addClass('footerSlideUp');
                    $(this).addClass('active');
                    $(".footerSlideup").attr('title', 'Click to Close');
                }
                return false;
            });

            /*$(document).bind('mousedown touchstart', function(e) {
            		if ($(e.target).closest('.footerHide').length === 0) {
            			$('.footerHide').removeClass('footerSlideUp');
            		}
            });*/
        }






        // Read More/Less
        $('.awardDesc').readmore({ speed: 500 });
        /*if(localStorage.getItem('wasVisited') !== undefined){
        $('.bbheader').hide();
		$('body').addClass('layoutSwitch');
		$('.bbContainer').removeClass('loading').addClass('loaded');
    } else {
        localStorage.setItem('wasVisited', 1);
        $('.bbheader').show();
    }*/

        if ($('.innerBanner').length) {
            $('.innerBanner .pageTitle h1').addClass('animated fadeInLeftBig');
        }



        //toggle searchbar
        /*if($(".headerRow .bottomRow").length > 0){
        	$('.searchBox input').click(function() {
        		if($('.searchBox').hasClass('active')) {
        			$(".searchBox").removeClass("active");
        			$(".headerRow .topNav").removeClass("active");
        			
        		} else {
        			$(".searchBox").addClass("active");
        			$(".headerRow .topNav").addClass("active");
        		}
        		  return false;
        	});

		
        	$(document).bind('mousedown touchstart', function(e) {
        			if ($(e.target).closest('.searchBox').length === 0) {
        				alert(1);
        				$(".searchBox").removeClass("active");
        				$(".headerRow .topNav").removeClass("active");
        			}
        	});		
        }*/

        if ($(".searchBox").length) {
            $("input.searchInput").focusin(function() {
                $('.headerRow .searchBox').addClass("active");
                $(".headerRow .scrollMenu").addClass("active");
            });
            $("input.searchInput").focusout(function() {
                $('.headerRow .searchBox').removeClass("active");
                $(".headerRow .scrollMenu").removeClass("active");
            });
        }


        //smartBanking banner filter
        if ($(".smartWayInfoWrap").length) {
            $("body").addClass("smartBankingPage")
            $("#ContentPlaceHolder1_UserCMSHeader1_header").addClass("noFixed");
            var spinerTag = '<i class="topBdr"></i><i class="rightBdr"></i><i class="bottomBdr"></i><i class="leftBdr"></i>'
            $(".roundBox4").append(spinerTag);
            $(".smartWayInfoWrap .circleFilter").on("click", function(e) {
                e.preventDefault();
                var activeRound = $(this).attr("data-rel");
                if ($(this).hasClass("active")) {
                    $(".smartBankingList .circleFilter").parent().removeClass("active");
                    $(".roundBoxText").removeClass("active")
                    $(".circleFilter").removeClass("active");
                    $(".roundBoxText").removeClass("inactive");
                    $(".smartCounterText").removeClass("active");
                    $(".smartMainText").show();
                    $(".smartCounterTitle, .smartCounterSmallText").removeClass("active");
                } else {
                    $(".smartBankingList .circleFilter").parent().removeClass("active");
                    $(".smartMainText").show();
                    $(".smartCounterText").removeClass("active");
                    $(".smartCounterTitle, .smartCounterSmallText").removeClass("active");
                    $(".roundBoxText").removeClass("active")
                    $(".circleFilter").removeClass("active");
                    $(".roundBoxText").addClass("inactive");
                    $(this).removeClass("inactive").addClass("active");
                    $(".roundBoxBg").find($("." + activeRound)).removeClass("inactive").addClass("active");
                }
            });
            var scrollTopDiv
            $(".smartBankingList .circleFilter").on("click", function(e) {
                e.preventDefault();
                setTimeout(function() {
                    scrollTopDiv = $("#smartBankingWrap").offset().top + 110;
                    $('html, body').animate({ scrollTop: scrollTopDiv }, '1000');
                }, 1000);
                var activeRound1 = $(this).attr("data-rel");
                var selectedCount1 = $(".roundBoxBg").find($(".hoverCircle." + activeRound1)).length;
                var selectedCountParent = $(".smartWayInfoWrap .circleFilter").find().attr("data-rel", activeRound1);
                $(".smartCounterText").text(selectedCount1).addClass("active");
                $(".smartCounterTitle, .smartCounterSmallText").addClass("active");
                if ($(this).parent().hasClass("active")) {
                    $(".smartBankingList .circleFilter").parent().removeClass("active");
                    $(".smartCounterTitle, .smartCounterSmallText").removeClass("active");
                    $(".smartCounterText").removeClass("active");
                    $(".roundBoxText").removeClass("active");
                    $(".selectedCountParent").removeClass("active");
                    $(".roundBoxText").removeClass("inactive");
                    $(".smartMainText").show();
                } else {
                    $(".smartMainText").hide();
                    $(".roundBoxText").removeClass("active")
                    $(".smartBankingList .circleFilter").parent().removeClass("active");
                    $(this).parent().addClass("active");
                    $(".roundBoxText").addClass("inactive");
                    $(".selectedCountParent").addClass("active");
                    $(".smartCounterText").addClass("active");
                    $(".roundBoxBg").find($(".hoverCircle." + activeRound1)).removeClass("inactive").addClass("active");
                }
            });
            $(".roundBoxText").on("mouseenter", function() {
                var activeList = $(this).attr("data-rel");
                //$(".roundBoxText").removeClass("active")
                //$(".circleFilter").removeClass("active");
                //$(this).addClass("active");
                $(".smartBankingList").find($("." + activeList)).parent().addClass("related");
            });
            $(".roundBoxText").on("mouseleave", function() {
                $(".smartBankingList .circleFilter").parent().removeClass("related");
                if ($(this).hasClass("related")) {

                } else {
                    $(this).removeClass("related");
                }
            });


        }


        if ($(".rightFixedBox").length) {
            $('.rightFixedBox').addClass('active');
            var homeURL = window.location.pathname;
            //alert(currentURL)
            if (homeURL == '/' || homeURL == '/index.htm') {
                //$('.socialList').hide();
                $('.homeRightNav .homeRightNavSlide').addClass('active');
                if (screen.width > 1025) {
                    $('.homeRightNav .homeRightNavSlide').next('.box').addClass('active');
                }

                setTimeout(function() {
                    $('.homeRightNav .homeRightNavSlide').removeClass('active');
                    if (screen.width > 1025) {
                        $('.homeRightNav .homeRightNavSlide').next('.box').removeClass('active');
                    }
                }, 1000);
            }

            $('.homeRightNav .homeRightNavSlide .actionBtn').click(function() {
                if (!$(this).parent().hasClass('active')) {

                    if ($(this).closest('.homeRightNav').hasClass('hide')) {
                        $(this).parent().css({ 'width': 150, 'margin-left': -80 }).siblings().css({ 'width': 'auto', 'margin-left': 0 });
                    }
                    $(this).parent().addClass('active').next('.box').addClass('active');
                    $(".adiBobChatbot").addClass("active");
                    //$(this).parent().siblings().removeClass('active').next('.box').removeClass('active');
                    if ($(this).closest('.homeRightNav').hasClass('hide')) {
                        $(this).parent().siblings().find('.text').hide();
                        $(this).parent().find('.text').show();
                    }
                } else {
                    $(this).parent().removeClass('active').next('.box').removeClass('active');
                    $(".adiBobChatbot").removeClass("active");
                    if ($(this).closest('.homeRightNav').hasClass('hide')) {
                        $(this).parent().css({ 'width': 'auto', 'margin-left': 0 });
                    }
                    if ($(this).closest('.homeRightNav').hasClass('hide')) {
                        $(this).parent().find('.text').hide();
                    }
                }
                return false;
            });

            $('.homeRightNav .box').bind('click touchstart', function(e) {
                e.stopPropagation();
            });

            $(window).scroll(function(e) {
                e.stopPropagation();
                //e.preventDefault();
                $('.homeRightNav .homeRightNavSlide .actionBtn').parent().removeClass('active').next('.box').removeClass('active');
                if ($('.homeRightNav').hasClass('hide')) {
                    $('.homeRightNav .homeRightNavSlide').css({ 'margin-left': 0 }).find('.text').hide();
                }
            });

            $('body').bind('click touchstart', function(e) {
                e.stopPropagation();
                //e.preventDefault();
                $('.homeRightNav .homeRightNavSlide').css({ 'margin-left': 0 })
                if ($('.homeRightNav').hasClass('hide')) {
                    $('.homeRightNav').find('.text').hide();
                }
                $('.homeRightNav .homeRightNavSlide .actionBtn').parent().removeClass('active').next('.box').removeClass('active');
            });

            $('.rateCloseBtn').click(function() {

                $('.homeRightNav .homeRightNavSlide').css({ 'margin-left': 0 })
                if ($('.homeRightNav').hasClass('hide')) {
                    $('.homeRightNav').find('.text').hide();
                }
                $('.homeRightNav .homeRightNavSlide .actionBtn').parent().removeClass('active').next('.box').removeClass('active');
            });
        }



        //overseas Dropdown
        //$(".overseasDropdownblock .overseasText").hide();
        $('.overseasDropdownblock a.indiaSite').click(function(e) {
            e.preventDefault();
            e.stopPropagation();
            if ($(this).next().is(':hidden')) {
                $(this).next().slideDown();
            } else {
                $(this).next().slideUp();
            }
        });




        /* $(document).click(function(e) {
        if (!$(e.target).is('.overseasDropdownblock a.indiaSite, .overseasDropdownblock a.indiaSite *')) {
            $(".overseasDropdownblock").hide();
        }
    	});*/

        $('.overseasDropdownblock .overseasLink').click(function(event) {
            $('body').append('<div class="requestPopOverlay"></div>');
            $('.requestPopOverlay').fadeIn();
            $('#overseasPopup').fadeIn();
            $('#overseasPopup').css('top', event.pageY - 0);
            $(this).parent().hide();
            $(".overseasDropdownblock a.indiaSite").text("Overseas").append("<span class='icon homeSprite'></span>");
            return false;
        });


        $('#overseasPopup .mfp-close').click(function() {
            $('.requestPopOverlay').remove();
            $('#overseasPopup').fadeOut();
            $(".overseasDropdownblock a.indiaSite").text("India").append("<span class='icon homeSprite'></span>");
            return false;
        });


        $("body").click(function() {
            //alert("hii");
            $(".overseasDropdownblock .overseasText:visible").slideUp();
        });


        /*$(".overseasDropdownblock .overseasText").hide();
        $('.overseasDropdownblock a.indiaSite').click(function(e) {
        	 e.preventDefault();
        	$(this).next().show();
        	
        });
	
	
        $('.overseasText').click(function(e) {
        					  
        	$(this).hide();
        	$(".overseasDropdownblock a.indiaSite").text("Overseas");
        	$(this).parent().addClass("active"); 
        });
	
        $('#overseasPopup > .mfp-close').click(function(){
        	
        	$(".overseasDropdownblock a.indiaSite").text("India");								  
        }); */
        /*  $(".overseasDropdownblock").click(function (e) {
            e.stopPropagation();
        });

        $(document).click(function () {
            $(".overseasText").slideUp();
            
        });*/



        /*$('.breadcrumb').filter(function(){
    	return $.trim($(this).children('a').attr('href')) == '';
		
	}).hide().parent().addClass("noBreadcrumb");*/

        //Page title set bottom when no breadcrumb
        if ($(".breadcrumb li span > a").length < 1) {
            $(".breadcrumb").addClass("hideBreadCum");
            $(".pageTitle").addClass("hideBreadCum");
        }

        //Blog banner image
        if ($(".pageBanner").length) {
            $(".pageBanner").each(function() {
                if ($(".pageBanner .pageBannerImg > img").length) {
                    var blogimagePath = $(".pageBanner .pageBannerImg > img").attr("src");
                    $(".pageBanner .pageBannerImg").css("background-image", "url( " + blogimagePath + " )");
                }
            });
        }

        //on load show popup
        $("#onLoadShowPopup .mfp-close").click(function() {
            $('#onLoadShowPopup').removeClass("active");
            $('.onLoadShowPopupOverlay').removeClass("active");
        });


        // on click href loaction for download form
        if ($('.applicationForm').length) {
            if (window.location.hash) {
                var hash = window.location.href;
                var res = hash.split('#')[1];
                if ($("#" + res).length) {
                    setTimeout(function() {
                        $(".applicationForm .accTrigger").each(function() {
                            if ($(this).attr("id") === res) {
                                $(this).trigger('click');
                                var targetLink = $(".applicationForm");
                                $('html,body').animate({ scrollTop: $(targetLink).offset().top - 120 }, 800);
                            }
                        });
                    }, 400);
                }
            }
        }



        /********************Start Up JS********************/
        $(window).scroll(function() {
            if ($(window).scrollTop() >= 10) {
                $('.strUpHeader').addClass('stUpheaderFixed');
            } else {
                $('.strUpHeader').removeClass('stUpheaderFixed');
            }
        });


        $('#strUpNav li a.land-on-same-page, .strUpHomeBanner .strUpBtnGroup a').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 100
                    }, 600);
                    return false;
                }
            }
        });

        $('#strUpNav li a.land-on-same-page').on('click', function(e) {
            e.preventDefault();
            setTimeout(function() {
                $('li.nav-active').removeClass('nav-active');
                $(this).parent('li').addClass('nav-active');
            }, 100);
        });

        var navLink = $('#strUpNav a');
        console.log(navLink);
        var aArray = [];

        for (var i = 0; i < navLink.length; i++) {
            console.log(i);
            var aChild = navLink[i];
            var navArray = $(aChild).attr('href');
            console.log(navArray);
            aArray.push(navArray);
            console.log(aArray);
            var selector = aArray.join(" , ");
            console.log(selector);
        }

        $(window).scroll(function() {
            var scrollTop = $(window).scrollTop();
            var tops = [];
            $(selector).each(function() {
                var top = $(this).position().top - 110;
                if (scrollTop > top) {
                    var id = $(this).attr('id');
                    setTimeout(function() {
                        $('.nav-active').removeClass('nav-active');
                        $('#strUpNav li a[href="#' + id + '"]').parent().addClass('nav-active');
                    }, 100);
                }
                tops.push(top);
            });
        });


        //Mobile Filter
        if ($(".strUpWrap").length) {
            $('.strUpWrap .strUpNavIcon').click(function(e) {
                e.preventDefault();
                if (!$(this).hasClass('active')) {
                    $(this).addClass('active');
                    $(this).next().addClass('active');
                } else {
                    $(this).removeClass('active');
                    $(this).next().removeClass('active');
                }
                return false;
            });
        }

        $(document).click(function() {
            $('.strUpWrap #strUpNav').removeClass('active');
            $('.strUpWrap .strUpNavIcon').removeClass('active');
        });

        $("#strUpNav li a").on("click", function() {
            $("#strUpNav").removeClass('active');
            $(".strUpWrap .strUpNavIcon").removeClass('active');
        });

        // To open Internal link Dialogbox for target_blank 	
        $('a.targetBlankLink').click(function(e) {

            e.preventDefault();
            var url = $(this).attr("href");
            smoke.confirm("You are being redirected to 3rd party website and Bank is not responsible for the content therein.", function(e) {
                if (e) {
                    window.open(url, "_blank");
                } else {
                    return false;
                }
            }, {
                ok: "Yes",
                cancel: "No",
                classname: "custom-class",
                reverseButtons: true
            });
        });

        $('a.targetBlankLinkNew').click(function(e) {
            e.preventDefault();
            var url = $(this).attr("href");
            smoke.confirm("By clicking on the hyper-link, you will be leaving Bank's website and entering website operated by the other parties. VyaparAadhar does not control or endorse such websites, and bears no responsibility for the contents therein.", function(e) {
                if (e) {
                    window.open(url, "_blank");
                } else {
                    return false;
                }
            }, {
                ok: "Yes",
                cancel: "No",
                classname: "custom-class",
                reverseButtons: true
            });
        });


        /********************Start Up JS End********************/

        //New Home page Mobile Design
        if ($(".homeLinksList").length) {
            $(".homeLinksList").append("<div class='homeLinksListSlider'><div class='swiper-container'><div class='swiper-wrapper'></div><div class='swiper-pagination'></div></div></div>");
            $(".homeLinksList").find(".homeLinksListSlider").insertAfter(".homeLinksList");
            var homeLinksListCloneSector = $('.homeLinksList li .homeImpLinkBox').clone();
            $(homeLinksListCloneSector).appendTo(".homeLinksListSlider .swiper-wrapper");

            $(".homeLinksListSlider .homeImpLinkBox").each(function() {
                $(this).wrap("<div class='swiper-slide'></div>");
            });
        }

        if ($(".homeLinksListSlider").length) {
            var homeLinksListSlider = new Swiper('.homeLinksListSlider .swiper-container', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                slidesPerView: 5,
                slidesPerGroup: 5,
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                spaceBetween: 0,
                autoplay: false,
                speed: 2000,
                autoplayStopOnLast: true,
                loop: true,
                breakpoints: {
                    359: {
                        slidesPerView: 2,
                        slidesPerGroup: 2
                    },
                    479: {
                        slidesPerView: 3,
                        slidesPerGroup: 3
                    },
                    639: {
                        slidesPerView: 4,
                        slidesPerGroup: 4
                    }
                }
            });
        }



        $(".hdMobileAppDownld .closeMbApp").click(function() {
            $(".hdMobileAppDownld").slideUp();
            $("body").addClass("noAppPopup");
        });


        //Most Viewed Pages
        if ($(".bobViewedPagesWrap").length) {
            $('.bobViewedPagesWrap .titleText').click(function(e) {
                e.preventDefault();
                if (!$(this).hasClass('active')) {
                    $(this).addClass('active');
                    $(this).next().slideDown();
                    $('html, body').animate({
                        scrollTop: $(this).offset().top - 180
                    }, 500);
                } else {
                    $(this).removeClass('active');
                    $(this).next().slideUp();
                }
                return false;
            });
        }
        $('.rightFixedBox .networkCloseBtn').click(function() {
            $(".homeRightNavSlide, .rightFixedBox .box").removeClass("active");
            $(".adiBobChatbot").removeClass("active");
        });


        $('.lazyImage').Lazy({
            scrollDirection: 'vertical',
            effect: 'fadeIn',
            visibleOnly: true,
            onError: function(element) {
                console.log('error loading ' + element.data('src'));
            }
        });



        if ($("#footer").length) {
            $(window).on("scroll", function() {
                var sectionTop = $("#footer").offset().top - 250;
                var scroll = $(window).scrollTop();
                if (scroll >= sectionTop) {
                    $("#footer").addClass("activeFeed");
                    if ($(".addthis_toolbox").length) {
                        facebookFeed();
                    }
                }
            });
        }



        //Innovation Search
        $('#search-btn').on('click', function() {
            $('#search-wrap').slideToggle();
        })
        $('.closer-search-btn').on('click', function() {
            $('#search-wrap').slideUp();
        });

        //Innovation Responsive menu

        $('.main-menu').on('click', function() {
            $(this).toggleClass('open-menu');
            $('.hamburger').toggleClass('is-active');
            $('#nav').toggleClass('show-menu');
        })

        //Innovation Bg Image
        if ($(".innoBgImage").length) {
            $(".innoBgImage").each(function() {
                var imagePath = $(this).find("img").attr("src");
                $(this).css("background-image", "url( " + imagePath + " )");
            });
        }


        //Js 2020
        //Accordion
        if ($(".homeFaqAcc").length) {
            //$('.contentAcc .accordDetail').hide();
            //$(".contentAcc .accordDetail:first").hide(); 
            //$(".contentAcc .accTrigger:first").addClass("active");	
            $('.homeFaqAcc .accTrigger').click(function() {
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active');
                    $(this).next().slideUp();
                } else {
                    if ($('body').hasClass('desktop')) {
                        $('.homeFaqAcc .accTrigger').removeClass('active');
                        $('.homeFaqAcc .accordDetail').slideUp();
                    }
                    $(this).addClass('active');
                    $(this).next().slideDown();
                }
                return false;
            });
        };

        //Site Search
        if ($(".siteSearchWrap").length) {
            $('.siteSearchClick').click(function(e) {
                e.preventDefault();
                if (!$(this).hasClass('active')) {
                    $(this).addClass('active');
                    $(this).next().slideDown(300);
                } else {
                    $(this).removeClass('active');
                    $(this).next().slideUp(300);
                }
                return false;
            });
        }
        $('.siteSearchClick').click(function(e) {
            e.stopPropagation();
        });

        $(document).click(function() {
            $('.siteSearchToggle').slideUp();
            $('.siteSearchClick').removeClass('active');
        });


        if ($(".device .footerMegamenu").length) {
            $('.footerMenuCol h2').click(function() {
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active');
                    $(this).next().slideUp();
                } else {
                    if ($('body').hasClass('device')) {
                        $('.footerMenuCol h2').removeClass('active');
                        $('.footerMenuCol ul').slideUp();
                    }
                    $(this).addClass('active');
                    $(this).next().slideDown();
                }
                return false;
            });
        };


        //First Menu Show
        $("#navMob > li:first-child > .menuIcon").trigger("click");
        $("#navMob > li.parent > .menuIcon").click(function() {
            $("#navMob ul").hide();
            $("#navMob li li .menuIcon").removeClass("active");
            $(this).prev().show();
        });
        $("#navMob > li.parent").click(function() {
            $("#navMob > li.parent").removeClass("active");
            $(this).addClass("active");
        });

        $(".showCartArea").click(function() {
            $(this).next().stop().toggleClass("active");
            $(this).toggleClass("active");
        });

        if ($('.bottomFixedBtn').length) {
            $("#footer").addClass("footerWithBtn");

        }

        if ($('.bottomFixedBtn').length) {
            $("#loanUrlListLink").click(function() {
                //location.href = $("#loanUrlList option:selected").val();
                window.open($('#loanUrlList option:selected').val(), '_blank');
            });
        }

        if ($('.bannerFixedBtn').length) {
            $("#bannerLoanUrlListLink").click(function() {
                //location.href = $("#loanUrlList option:selected").val();
                window.open($('#bannerLoanUrlList option:selected').val(), '_blank');
            });
        }

        if ($('.TrackFixedBtn').length) {
            $("#TrackLoanUrlListLink").click(function() {
                //location.href = $("#loanUrlList option:selected").val();
                window.open($('#TrackLoanUrlList option:selected').val(), '_blank');
            });
        }


        //Js 2020 End



        //ScrollReveal
        if ($.browser.msie && parseInt($.browser.version, 10) === 8) {} else {
            window.sr = new scrollReveal({
                reset: false,
                move: '50px',
                mobile: false,
                vFactor: 0.50,
            });
        }



        // saving account popup
        if ($(".infoPopup").length) {
            $('a.infoPopup').click(function(e) {
                e.preventDefault();
                var url = $(this).attr("href");
                smoke.confirm('<div class="promptModal"><h2 class="promptTitle">To proceed the following should be handy</h2><ul class="bulletText"><li>PAN Card</li><li> Aadhar Card</li><li>Operational Mobile number Registered with Aadhar No</li><li>Valid E mail ID</li><li>Internet, Camera/Webcam & Microphone enabled Mobile/Device</li><li>Enable browser Location of the device used for Account opening.( Setting>> Type location in search setting>>Site setting>> Location>> Allow) and allow when prompted.</li><li>This Account can be opened by Resident Indian Individuals ( having no political exposure) aged 18 years and above.</li><li>This facility is for customers who do not have account with Bank.</li><li>You should be in a well-lit area with good network</li></ul></div>', function(e) {
                    if (e) {
                        window.open(url, "_blank");
                    } else {
                        return false;
                    }
                }, {
                    ok: "Yes",
                    cancel: "No",
                    classname: "custom-class",
                    reverseButtons: true
                });
            });
        }

        if ($(".infoPopupSalaryAccount").length) {
            $('a.infoPopupSalaryAccount').click(function(e) {
                e.preventDefault();
                var url = $(this).attr("href");
                smoke.confirm('<div class="promptModal"><h2 class="promptTitle">To proceed the following should be handy</h2><ul class="bulletText"><li>PAN Card</li><li> Aadhar Card</li><li>Operational Mobile number Registered with Aadhar No</li><li>Valid E mail ID</li><li>Internet, Camera/Webcam & Microphone enabled Mobile/Device</li><li>Enable browser Location of the device used for Account opening.( Setting>> Type location in search setting>>Site setting>> Location>> Allow) and allow when prompted.</li><li>This Account can be opened by Resident Indian Individuals ( having no political exposure) aged 18 years and above.</li><li>This facility is for customers who do not have account with Bank.</li><li>You should be in a well-lit area with good network</li><li>Upload Proof of Employment ( Salary Slip/Employer certificate/Employee ID) when prompted.</li></ul></div>', function(e) {
                    if (e) {
                        window.open(url, "_blank");
                    } else {
                        return false;
                    }
                }, {
                    ok: "Yes",
                    cancel: "No",
                    classname: "custom-class",
                    reverseButtons: true
                });
            });
        }

        if ($(".infoPopupPensionAccount").length) {
            $('a.infoPopupPensionAccount').click(function(e) {
                e.preventDefault();
                var url = $(this).attr("href");
                smoke.confirm('<div class="promptModal"><h2 class="promptTitle">To proceed the following should be handy</h2><ul class="bulletText"><li>PAN Card</li><li> Aadhar Card</li><li>Operational Mobile number Registered with Aadhar No</li><li>Valid E mail ID</li><li>Internet, Camera/Webcam & Microphone enabled Mobile/Device</li><li>Enable browser Location of the device used for Account opening.( Setting>> Type location in search setting>>Site setting>> Location>> Allow) and allow when prompted.</li><li>This Account can be opened by Resident Indian Individuals ( having no political exposure) aged 18 years and above.</li><li>This facility is for customers who do not have account with Bank.</li><li>You should be in a well-lit area with good network</li><li>Upload Pension Payment Order when promted</li></ul></div>', function(e) {
                    if (e) {
                        window.open(url, "_blank");
                    } else {
                        return false;
                    }
                }, {
                    ok: "Yes",
                    cancel: "No",
                    classname: "custom-class",
                    reverseButtons: true
                });
            });
        }

        if ($(".infoPopupSeniorCitizen").length) {
            $('a.infoPopupSeniorCitizen').click(function(e) {
                e.preventDefault();
                var url = $(this).attr("href");
                smoke.confirm('<div class="promptModal"><h2 class="promptTitle">To proceed the following should be handy</h2><ul class="bulletText"><li>PAN Card</li><li> Aadhar Card</li><li>Operational Mobile number Registered with Aadhar No</li><li>Valid E mail ID</li><li>Internet, Camera/Webcam & Microphone enabled Mobile/Device</li><li>Enable browser Location of the device used for Account opening.( Setting>> Type location in search setting>>Site setting>> Location>> Allow) and allow when prompted.</li><li>This Account can be opened by Resident Indian Individuals ( having no political exposure) aged 18 years and above.</li><li>This facility is for customers who do not have account with Bank.</li><li>You should be in a well-lit area with good network</li><li>Please include This Account can be opened only by individuals aged 60 and above.</li></ul></div>', function(e) {
                    if (e) {
                        window.open(url, "_blank");
                    } else {
                        return false;
                    }
                }, {
                    ok: "Yes",
                    cancel: "No",
                    classname: "custom-class",
                    reverseButtons: true
                });
            });
        }



    });





    //Call back popup scroll
    /*function callBackScroll(){
    	$(".callBackHeight").mCustomScrollbar({
    		setHeight:winHeight,
    		theme:"dark-3",
    		updateOnContentResize: true
    	});
    }*/



    $(".debitCard .row .imgHolder").attr("data-sr", "move 50px enter left over 1s");
    $(".debitCard .row .otherBenefits").attr("data-sr", "move 150px enter left over 1s");
    $(".debitCard .row .keyFeatures").attr("data-sr", "move 50px enter right over 1s");

    $(".debitCard .row:nth-child(even) .imgHolder").attr("data-sr", "move 50px enter right over 1s");
    $(".debitCard .row:nth-child(even) .otherBenefits").attr("data-sr", "move 150px enter right over 1s");
    $(".debitCard .row:nth-child(even) .keyFeatures").attr("data-sr", "move 50px enter left over 1s");

    $(".loanTypeList li:nth-child(1), .loanTypeList li:nth-child(5), .loanTypeList li:nth-child(9), .loanTypeList li:nth-child(13)").attr("data-sr", "enter bottom over 0.4s and move 100px");
    $(".loanTypeList li:nth-child(2), .loanTypeList li:nth-child(6), .loanTypeList li:nth-child(10)").attr("data-sr", "enter bottom over 0.6s and move 200px");
    $(".loanTypeList li:nth-child(3), .loanTypeList li:nth-child(7), .loanTypeList li:nth-child(11)").attr("data-sr", "enter bottom over 0.8s and move 300px");
    $(".loanTypeList li:nth-child(4), .loanTypeList li:nth-child(8), .loanTypeList li:nth-child(12)").attr("data-sr", "enter bottom over 1s and move 400px");

    $(".appInfo .appInfoBg").attr("data-sr", "move 50px enter right over 0.6s");
    $(".appInfo h2").attr("data-sr", "move 50px enter left over 0.6s");
    $(".appInfo ul").attr("data-sr", "move 50px enter left over 0.6s");
    $(".mconnectFeatures .newFeaturesList").attr("data-sr", "move 50px enter bottom over 0.6s");
    $(".mconnectContact .leftCol").attr("data-sr", "move 50px enter left over 0.6s");
    $(".mconnectContact .rightCol").attr("data-sr", "move 50px enter right over 0.6s");

    $(".mpassbookBenefits ul li, .mclipKeyList li").attr("data-sr", "move 50px enter left over 0.6s");
    $(".mpassbookBenefits ul.rightList li, .mclipKeyList ul.rightList li").attr("data-sr", "move 50px enter right over 0.6s");
    $(".mpassbookBenefits .imgHolder").attr("data-sr", "move 50px enter bottom over 0.6s");
    /*$(".mpassbookRegPro ul li").attr("data-sr","move 50px enter left over 0.6s");
    $(".mpassbookRegPro ul li:nth-child(2)").attr("data-sr","move 100px enter left over 0.7s");
    $(".mpassbookRegPro ul li:nth-child(3)").attr("data-sr","move 150px enter left over 0.8s");
    $(".mpassbookRegPro ul li:nth-child(4)").attr("data-sr","move 200px enter left over 0.9s");
    $(".mpassbookRegPro ul li:nth-child(5)").attr("data-sr","move 250px enter left over 1s");*/
    $(".aboutUsList li").attr("data-sr", "move 50px enter bottom over 0.6s");



    $(".homeLinks ul li, .homeProductsInner .homeProductListing li, .homeProductsInner .homeProductListing li:nth-child(7)").attr("data-sr", "move 50px enter bottom over 0.3s");
    $(".homeLinks ul li:nth-child(2), .homeProductsInner .homeProductListing li:nth-child(2), .homeProductsInner .homeProductListing li:nth-child(8)").attr("data-sr", "move 50px enter bottom over 0.3s");
    $(".homeLinks ul li:nth-child(3), .homeProductsInner .homeProductListing li:nth-child(3), .homeProductsInner .homeProductListing li:nth-child(9)").attr("data-sr", "move 100px enter bottom over 0.3s");
    $(".homeLinks ul li:nth-child(4), .homeProductsInner .homeProductListing li:nth-child(4), .homeProductsInner .homeProductListing li:nth-child(10)").attr("data-sr", "move 150px enter bottom over 0.3s");
    $(".homeLinks ul li:nth-child(5), .homeProductsInner .homeProductListing li:nth-child(5), .homeProductsInner .homeProductListing li:nth-child(11)").attr("data-sr", "move 200px enter bottom over 0.3s");
    $(".homeLinks ul li:nth-child(6), .homeProductsInner .homeProductListing li:nth-child(6), .homeProductsInner .homeProductListing li:nth-child(12)").attr("data-sr", "move 250px enter bottom over 0.3s");


    $(".digitMark ul li:nth-child(1), .digitMark ul li:nth-child(3), .digitMark ul li:nth-child(5), .digitMark ul li:nth-child(7), .digitMark ul li:nth-child(9), .digitMark ul li:nth-child(11), .digitMark ul li:nth-child(13), .digitMark ul li:nth-child(15), .digitMark ul li:nth-child(17), .digitMark ul li:nth-child(19), .digitMark ul li:nth-child(21), .digitMark ul li:nth-child(23), .digitMark ul li:nth-child(25), .digitMark ul li:nth-child(27)").attr("data-sr", "move 250px enter left over 1s");

    $(".digitMark ul li:nth-child(2), .digitMark ul li:nth-child(4), .digitMark ul li:nth-child(6), .digitMark ul li:nth-child(8), .digitMark ul li:nth-child(10), .digitMark ul li:nth-child(12), .digitMark ul li:nth-child(14), .digitMark ul li:nth-child(16), .digitMark ul li:nth-child(18), .digitMark ul li:nth-child(20), .digitMark ul li:nth-child(22), .digitMark ul li:nth-child(24), .digitMark ul li:nth-child(26), .digitMark ul li:nth-child(28)").attr("data-sr", "move 250px enter right over 1s");





    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 150) {
            $(".bobMedia ul li:nth-child(3)").addClass("fadeInRight animated");
            $(".bobMedia ul li:nth-child(4), .bobMedia ul li:nth-child(5), .bobMedia ul li:nth-child(6)").addClass("fadeInUp animated");
        }
    });

    if ($('.headerRow').length) {
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            homepages = ['/', 'index.htm'];

            if (!homepages.indexOf(window.location.pathname) >= 0) {
                if ($('.desktop').length) {
                    if (scroll >= 150) {
                        //$('.headerRow').css('padding', '11px 0');
                        //$('.callBackLink').css('bottom', -64);
                        $('.callBackLinkHover').css('top', -15);
                        $('#header').addClass('headerScroll');
                        $(function() {
                            var scrollMenuTop = $('#mainNav').clone();
                            $('.scrollMenu').html(scrollMenuTop);
                        });

                        if ($('.radiance').length) {
                            $('.radiance #header').removeClass('headerScroll');
                        }

                        $('.foundationThemeTopImg01').css({ 'top': '-5px' });
                        $('.foundationThemeTopImg02').css({ 'top': 0, 'display': 'none' });
                        $('.foundationThemeTopImg03').css({ 'top': 0, 'display': 'none' });

                    } else {
                        //$('.headerRow').css('padding', '18px 0');
                        //$('.callBackLink').css('bottom', -67);
                        $('.callBackLinkHover').css('top', -10);
                        $('#header').removeClass('headerScroll');

                        $('.foundationThemeTopImg01').css({ 'top': 28 });
                        $('.foundationThemeTopImg02').css({ 'top': 27, 'display': 'block' });
                        $('.foundationThemeTopImg03').css({ 'top': 27, 'display': 'block' });
                    }
                }
            }



            // Get URL
            var currentURL = window.location.pathname;
            //alert(currentURL)
            if (currentURL == '/wealth-management.htm') {
                $('.sideRightMenu').hide();
            }


            if ($('.exclusiveOffersList').length) {
                $('body').on('click', '.socialShare', function() {
                    var url = $(this).closest('.shareNknowBtns').siblings('a').find('img').attr('src');
                    //alert(url)
                    if ($(this).hasClass('facebook-share')) {
                        window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, 'Share Facebook', config = 'height=400, width=600');
                    }

                    if ($(this).hasClass('twitter-share')) {
                        window.open('http://twitter.com/home?status=' + url, 'Share Twitter', config = 'height=400, width=600');
                    }

                    return false;
                });
            }

            $(window).scroll(function() {
                if ($(window).scrollTop() > 180) {
                    $('.announcements').removeClass('slide');

                    $('.announcements').removeClass('active');
                    $('.rightFixedBox').removeClass('active');
                    $(".adiFrameOpen").css({ 'right': '-50px' });
                } else {
                    $('.announcements').addClass('slide');
                    $('.rightFixedBox').addClass('active');
                    $(".adiFrameOpen").css({ 'right': '0' });
                }
            });

        });

    }

    if ($(window).width() < 992) {
        $('#header').removeClass('headerScroll');
    }



    //Start loadpopup close and Masking link
    if ($("#onLoadShowPopup .mfp-close").length) {
        setTimeout(function() {
            $("#onLoadShowPopup .mfp-close").trigger("click");
        }, 7000);
    }
    if ($(window).width() < 992) {
        $('#header').removeClass('headerScroll');
    }

    if ($(".onLoadShowPopup").length) {
        $('img[usemap]').rwdImageMaps();
    }
    //End loadpopup close and Masking link		
    /*================= On Document Load End =================*/

    /*================= On Window Resize Start =================*/
    $(window).bind('resize orientationchange', function() {
        getWidth();
        adjustMenu();
        menuMove();
        //faqMobAccordion();
        GlobalNetworkPopup();
        bannerBgSet();
        singleBannerBgSet();

        if ($(window).width() < 992) {
            $('#header').removeClass('headerScroll');
        }

        //$('.vCenter').each(function () {$(this).verticalAlignText();});

    });

    /*================= On Window Resize End =================*/

    /*================= On Window Load Start =================*/
    $(window).load(function() {
        /*	setTimeout(function() {
        		$('html, body').scrollTop(0);
        	}, 10);*/

        setTimeout(function() {
            $(".announcements, .sliderArrow, .liveWebChatBtn").addClass("slide");
            $(".socialList").addClass("active");
        }, 1500);


        if ($('#welcomePopup').length) {
            $('#welcomePopup').fadeIn();
            $('body').append('<div class="welcomePopupOverlay"></div>');
            $('.welcomePopupOverlay').fadeIn();
        }

        $('#welcomePopup .mfp-close').click(function() {
            $('.welcomePopupOverlay').remove();
            $('#welcomePopup').fadeOut();
            return false;
        });

        setTimeout(function() {
            $('.welcomePopupOverlay').remove();
            $('#welcomePopup').fadeOut();
        }, 25000);

        if (IEbellow9) {

            $('.lazy').each(function() {
                var $this = $(this);
                $this.attr('src', $this.data('src'));
            });

            /*$('#welcomePopup').hide();
            $('.welcomePopupOverlay').remove();
            //$('.welcomePopupOverlay').hide();
		
            if($('.oldIEMsg').length){
            	$('.oldIEMsg').fadeIn();
            	$('body').append('<div class="oldIEMsgOverlay"></div>');
            	$('.oldIEMsgOverlay').fadeIn();
		
            	$('.oldIEMsg .mfp-close').click(function(){
            		$('.oldIEMsgOverlay').remove();
            		$('.oldIEMsg').fadeOut();
            		
            		$('#welcomePopup').fadeIn();
            		$('body').append('<div class="welcomePopupOverlay"></div>');
            		$('.welcomePopupOverlay').fadeIn();
            		return false;
            	});				
            }*/
        }

        /*$('a').each(function() {
        	this.href = this.href.replace("http://apps.bobinside.com/MSMELoanApps/", "https://apps.bobinside.com/MSMELoanApps/");
        });*/

    });
    /*================= On Document Load End =================*/


    function getWidth() {

        ww = document.body.clientWidth;
        if (ww > wideScreen) { $('body').removeClass('device').addClass('desktop widerDesktop'); }
        if (ww > mobilePort && ww <= wideScreen) { $('body').removeClass('device widerDesktop').addClass('desktop'); }
        if (ww <= mobilePort) { $('body').removeClass('desktop widerDesktop').addClass('device'); }
        if (ww > 767 && ww < 1025) { $('body').addClass('ipad'); } else { $('body').removeClass('ipad'); }
    }

})(jQuery);


function validate() {
    return false;
};

function isFloat(value) {

    return value != "" && !isNaN(value) && Math.round(value) != value;
}

function monthlyRepayment() {
    var loan_amount = parseInt($("#loan-amount").val());
    var interest_rate = parseFloat($("#interest-rate").val().replace(' % p.a', '')) / 100;
    var year = parseInt($("#year").val().replace(' year', '')) * 12;
    var total = 0;

    if ($('.repayment-type input:radio').eq(0).is(':checked')) {
        total = (loan_amount * interest_rate / 12) * (Math.pow((1 + interest_rate / 12), year) / (Math.pow((1 + interest_rate / 12), year) - 1))
        return total.toFixed(2);
    } else {
        total = loan_amount * interest_rate / 12;
        return total.toFixed(2);
    }
}

function yearArrayAmount() {
    var principalBalArray = new Array();
    var interestBalArray = new Array();
    var TotalOwing = new Array();

    var principal = parseInt($("#loan-amount").val());

    var interest_rate = parseFloat($("#interest-rate").val().replace(' % p.a', '')) / 100;
    var year = parseInt($("#year").val().replace(' year', '') * 12);
    var year2 = parseInt($("#year").val().replace(' year', ''));
    var installment = (principal * interest_rate / 12) * (Math.pow((1 + interest_rate / 12), year) / (Math.pow((1 + interest_rate / 12), year) - 1))
    $("#repayment").text(Math.round(installment));
    var interest_rateVal = 0,
        interestTotalBal = 0,
        principalBal = principal;

    principalBalArray.push(principal);
    interestBalArray.push(sumArrayFun(0));
    TotalOwing.push((principal + sumArrayFun(0)));

    var firstMonth_interestVal = ((principal * interest_rate / 12))

    for (var i = 1; i <= year; i++) {
        interest_rateVal = (principalBal * interest_rate) / 12;
        var sunmArray = sumArrayFun(i)
        principalBal = principalBal - installment + interest_rateVal;
        //alert(principal+"--"+interest_rateVal+"--"+installment+"--"+principalBal+"--"+sunmArray+"----"+(principalBal+sunmArray));

        principalBalArray.push(principalBal)
        interestBalArray.push(sunmArray)
        TotalOwing.push(principalBal + sunmArray);
    }

    var principalVal = new Array();
    var interestVal = new Array();
    var TotalVal = new Array();
    var plus = 0;
    for (var i = 0; i <= year2; i++) {
        if (year2 == i) plus = 0;
        var principalVal2 = principalBalArray[i * 12] + plus;
        var interestVal2 = interestBalArray[i * 12] + plus;
        var TotalVal2 = TotalOwing[i * 12] + plus;

        var val1, val2;
        val1 = firstMonth_interestVal + interestBalArray[1] - interestVal2;
        val2 = principal - principalVal2;

        TotalVal.push(Math.round(val1 + val2));
        interestVal.push(Math.round(val1));

        principalVal.push(Math.round(val2));
    }
    return [principalVal, interestVal, TotalVal];
}


function Interest() {
    var year_Array_Amount = new Array();
    var principal = parseInt($("#loan-amount").val());
    var interest_rate = parseFloat($("#interest-rate").val().replace(' % p.a', '')) / 100;
    var year = parseInt($("#year").val().replace(' year', '') * 12);

    var interestArray = [];
    var principalBalarray = [];
    var principalBal = principal,
        interest_rateVal = 0,
        installment = 0,
        interestTotalBal;

    installment = (principal * interest_rate / 12) * (Math.pow((1 + interest_rate / 12), year) / (Math.pow((1 + interest_rate / 12), year) - 1));
    installment = installment.toFixed(2);

    for (var i = 1; i <= year; i++) {
        interest_rateVal = (principalBal * interest_rate) / 12;
        principalBalarray.push(principalBal);
        principalBal = (principalBal - installment) + interest_rateVal;
        interestArray.push(interest_rateVal);
    }
    return [interestArray, principalBalarray];
}


function sumArrayFun(countNumber) {
    var principalBalArray = Interest();

    var sumVal = 0;

    for (var i = countNumber; i < principalBalArray[0].length; i++) {
        sumVal = sumVal + principalBalArray[0][i];
    }

    return sumVal;
}

function slider() {
    var slider_range_minValue = 10000,
        slider_range_min2Value = 8,
        slider_range_min3Value = 1;
    slider_range_min(slider_range_minValue);
    slider_range_min2(slider_range_min2Value);
    slider_range_min3(slider_range_min3Value)
}

function slider_range_min(value) {
    $("#slider-range-min").slider({
        range: "min",
        value: value,
        min: 100000,
        max: 20000000,
        step: 1,
        slide: function(event, ui) {
            $("#loan-amount").val(ui.value);
            $("#repayment").text(monthlyRepayment);
            calculatter(yearArrayAmount());
        }
    });
}


//Rural Agri Calculator
if ($(".ruralAgriCalculator").length) {
    function slider_range_min(value) {
        $("#slider-range-min").slider({
            range: "min",
            value: value,
            min: 3000,
            max: 20000000,
            step: 1,
            slide: function(event, ui) {
                $("#loan-amount").val(ui.value);
                $("#repayment").text(monthlyRepayment);
                calculatter(yearArrayAmount());
            }
        });
    }

}


function slider_range_min2(value) {
    $("#slider-range-min2").slider({
        range: "min",
        value: value,
        min: 6,
        max: 22,
        step: 0.5,
        slide: function(event, ui) {
            $("#interest-rate").val(ui.value);
            $("#repayment").text(monthlyRepayment);
            calculatter(yearArrayAmount());
        }
    });
}


//Rural Agri Calculator
if ($(".ruralAgriCalculator").length) {
    function slider_range_min2(value) {
        $("#slider-range-min2").slider({
            range: "min",
            value: value,
            min: 7,
            max: 20,
            step: 0.5,
            slide: function(event, ui) {
                $("#interest-rate").val(ui.value);
                $("#repayment").text(monthlyRepayment);
                calculatter(yearArrayAmount());
            }
        });
    }

}

if ($(".carLoanEmiCalculator").length) {
    function slider_range_min2(value) {
        $("#slider-range-min2").slider({
            range: "min",
            value: value,
            min: 6,
            max: 7.25,
            step: 0.05,
            slide: function(event, ui) {
                $("#interest-rate").val(ui.value);
                $("#repayment").text(monthlyRepayment);
                calculatter(yearArrayAmount());
            }
        });
    }
}

function slider_range_min3(value) {
    value = value * 100;
    $("#slider-range-min3").slider({
        animate: true,
        range: "min",
        value: value,
        min: 100,
        max: 3500,
        step: 1,
        slide: function(event, ui) {
            var test = ui.value / 100;
            test = test.toFixed(0)
            $("#year").val(test);
            $("#repayment").text(monthlyRepayment);
            calculatter(yearArrayAmount());
        }
    });
}

//Rural Agri Calculator
if ($(".ruralAgriCalculator").length) {
    function slider_range_min3(value) {
        value = value * 100;
        $("#slider-range-min3").slider({
            animate: true,
            range: "min",
            value: value,
            min: 100,
            max: 1500,
            step: 1,
            slide: function(event, ui) {
                var test = ui.value / 100;
                test = test.toFixed(0)
                $("#year").val(test);
                $("#repayment").text(monthlyRepayment);
                calculatter(yearArrayAmount());
            }
        });
    }
}

if ($(".carLoanEmiCalculator").length) {
    function slider_range_min3(value) {
        value = value * 100;
        $("#slider-range-min3").slider({
            animate: true,
            range: "min",
            value: value,
            min: 100,
            max: 700,
            step: 1,
            slide: function(event, ui) {
                var test = ui.value / 100;
                test = test.toFixed(0)
                $("#year").val(test);
                $("#repayment").text(monthlyRepayment);
                calculatter(yearArrayAmount());
            }
        });
    }
}

function calculatter(loanAmount) {
    var myData1 = loanAmount[0];
    var myData2 = loanAmount[1]
    var myData3 = loanAmount[2]

    var principal = parseInt($("#loan-amount").val());
    var year = parseInt($("#year").val().replace(' year', ''))
    var gird = Math.round(myData3[0] / 8);
    var gird2 = 0.1 * year;

    $('#emiChart').highcharts({
        chart: {
            type: 'areaspline',
            backgroundColor: {
                linearGradient: [0, 0, 000, 500],
                stops: [
                    [0, 'rgb(244, 244, 244)'],
                    [1, 'rgb(215, 215, 215)']
                ]
            }
        },

        title: {
            text: ''
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 150,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor: '#eeeeee'
        },
        legend: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false
        },

        xAxis: {
            gridLineColor: '#e0e0e0',
            // tickInterval: 1,
            minorTickInterval: gird2,
            //categories:[0,10,20,30,40,50]	
            title: {
                text: 'Years elapsed',
                style: {
                    color: '#888989',
                    'font-size': '12px'
                }
            }
        },

        yAxis: {

            minorTickInterval: gird,
            gridLineColor: '#e0e0e0',
            title: {
                text: 'Loan Paid (Rs.)',
                style: {
                    color: '#888989',
                    'font-size': '12px'
                }
            }

        },

        tooltip: {
            headerFormat: '<b> Year {point.key}</b><br>',
            shared: true,
            valueSuffix: ' '
                // headerFormat: '<b>{series.name}</b><br />',
                //  pointFormat: 'Total = {point.y} Rs,<br> Year = {point.x}'
        },



        series: [{
                name: 'Total',
                data: myData3,
                color: "#666",
                fillOpacity: 1,
                pointStart: 0
            },
            {
                marker: {
                    enabled: false
                },
                states: {
                    hover: {
                        enabled: false
                    }
                },
                name: 'Principal ',
                data: myData1,
                color: "#666",
                fillOpacity: 0,
                pointStart: 0,
                enabled: false
            },
            {
                name: 'Interest ',
                data: myData2,
                color: "#f45e2e",
                fillOpacity: 1,
                pointStart: 0
            }
        ]
    });
    $(".highcharts-series").eq($(".highcharts-series").size() - 2).hide();
    $(".highcharts-tracker").eq($(".highcharts-tracker").size() - 3).hide().css('');
    $(".highcharts-tracker").eq($(".highcharts-tracker").size() - 3).find('path').hide();
}


/*function verticalText() {
   var pageHeight = $(window).height()/2;
   var bannerHeight = $('.innerLargeBanner').height()/2;
   $('.innerBannerCaption .vCenter').css({ 'padding-top': (pageHeight-bannerHeight) + 50 });
}

verticalText();*/


function menuMove() {
    if ($(".footerSocialFeed").length == 0) {
        var socialFeeds = $('.socialFeedsInner').clone();
        $(socialFeeds).appendTo("#footer .topRow").wrap("<div class='footerSocialFeed'></div>");
    }

    if ($(".mobileNav").length == 0) {
        var navigation = $('#nav').clone();
        $(navigation).appendTo("body").wrap("<div class='mobileNav'></div>");
        if ($(".mobileNav #navMob").length == 0) {
            $(".mobileNav #nav").attr("id", "navMob");
            $(".mobileNav").append("<span class='close'></span>");
            $(".mobileNav").append("<span class='navigationText'>Navigation</span>");
            $(".mobileNav").append("<span class='logoText'><span class='logoIcon homeSprite'></span></span>");
            $(".mobileNav .close").click(function() {
                $("body").removeClass("activeMobNav");
            });
        }
    }
}






//Faq Responsive Accordion  
function faqMobAccordion() {

    if ($(".faqPageDetail").length) {
        if ($('.device').length) {
            $('.faqRow .a').hide();

            $('.faqRow .q').on("click", function(e) {
                e.stopPropagation();
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active');
                    $(this).next().hide().removeAttr("style");


                } else {
                    var openNxt = $(this).next();
                    $('.faqRow .q').removeClass('active');
                    $('.faqRow .a').not(openNxt).hide().removeAttr("style");



                    $(this).addClass('active');
                    $(this).next().show();

                }

            });
        } else {
            $('.faqRow .a').removeAttr("style");
            $('.faqRow .q').removeClass('active');
        }
    }
}







function accountMobAccordion() {
    //Faq Responsive Accordion
    if ($(".accMobileAccordion").length) {
        if (screen.width < 768) {
            $('.mobAccordionDetail').hide();


            //$(".accordionFooter .accordDetailFooter:first").show(); 
            //$(".accordionFooter .accTriggerFooter:first").addClass("active");	
            $('.mobAccordionTrigger').click(function() {
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active');
                    $(this).next().slideUp();
                } else {
                    if ($('body').hasClass('desktop')) {
                        $('.mobAccordionTrigger').removeClass('active');
                        $('.mobAccordionDetail').slideUp();
                    }
                    $(this).addClass('active');
                    $(this).next().slideDown();
                }
                return false;
            });
        }

    }
}



//Branches Location Hide Show
function GlobalNetworkPopup() {
    if (screen.width > 1025) {
        $('.branchesList ul li a').click(function() {
            $('html, body').animate({
                scrollTop: $("#globalMap").offset().top - 200
            }, 500);
        });
    }
}


//datepicker function
function datePicker() {
    //Datepicker
    if ($('.datepicker').length) {
        $.datepicker.setDefaults({
            showOn: "both",
            dateFormat: "dd/mm/yy",
            changeMonth: true,
            changeYear: true
                //,maxDate : 0

            //,buttonImage: "images/calendar.png"
            //,buttonImageOnly: true
            //,shortYearCutoff: 50
            ,
            buttonText: "<span class='sprite calIcon'></span>",
            beforeShow: function(textbox, instance) {
                instance.dpDiv.css({
                    marginTop: /*(textbox.offsetHeight)*/ 0 + 'px',
                    marginLeft: 0 + 'px'
                });
            }
        });

        $(".datepicker").datepicker({
            dateFormat: "dd/mm/yy",
            showOn: "both",
            buttonText: "<span class='sprite calIcon'></span>",
            shortYearCutoff: 50
                //,buttonImage: "images/calendar.png"
                //,buttonImageOnly: true
                ,
            beforeShow: function(textbox, instance) {
                instance.dpDiv.css({
                    marginTop: /*(textbox.offsetHeight)*/ 0 + 'px',
                    marginLeft: 0 + 'px'
                });
            }
        });
    }
    //Datepicker
    if ($('.birthDatePicker').length) {
        $.datepicker.setDefaults({
            showOn: "both",
            dateFormat: "dd/mm/yy",
            changeMonth: true,
            changeYear: true,
            maxDate: 0

            //,buttonImage: "images/calendar.png"
            //,buttonImageOnly: true
            //,shortYearCutoff: 50
            ,
            buttonText: "<span class='sprite calIcon'></span>",
            beforeShow: function(textbox, instance) {
                instance.dpDiv.css({
                    marginTop: /*(textbox.offsetHeight)*/ 0 + 'px',
                    marginLeft: 0 + 'px'
                });
            }
        });

        $(".birthDatePicker").datepicker({
            dateFormat: "dd/mm/yy",
            showOn: "both",
            buttonText: "<span class='sprite calIcon'></span>",
            shortYearCutoff: 50
                //,buttonImage: "images/calendar.png"
                //,buttonImageOnly: true
                ,
            beforeShow: function(textbox, instance) {
                instance.dpDiv.css({
                    marginTop: /*(textbox.offsetHeight)*/ 0 + 'px',
                    marginLeft: 0 + 'px'
                });
            }
        });
    }
}





function smartBankingMobile() {
    if ($(".smartBankingWrap").length) {
        $('<div class="sbsMobAcc"><div class="contentAcc"></div></div>').appendTo(".smartBankingWrap .container").insertBefore(".smartBankingList");
        $(".smartBankingList .circleFilter").clone().appendTo(".contentAcc").wrap('<div class="accTrigger"></div>');
        $(".accTrigger a").each(function() {
            var sbsActiveDiv = $(this).attr("data-rel");
            $('<div class="accordDetail"></div>').appendTo(".contentAcc").insertAfter($(this).parent());
            $(".roundBoxBg").find("." + sbsActiveDiv).clone().appendTo($(this).parent().next());
        });
    }





}


function bannerBgSet() {
    if ($(window).width() < 768) {
        $(".swiper-slide").each(function() {
            var imgPath = $(this).attr("data-smallimage");
            $(this).find(".bannerImgWrap").css("background-image", "url(" + imgPath + ")");
        });

        var imgShow = $('.largeSingleBanner').attr("data-smallimage");
        if (imgShow == 'none') {
            $('.bannerImgWrap').addClass('noBgImage').find('img').css('visibility', 'visible');
        }

        if (imgShow == '/writereaddata/images/inner-banner.jpg') {
            $('.bannerImgWrap').addClass('defaultImg');
        }
    } else {
        $(".innerBanner .bannerImgWrap").css('background-image', 'none');
    }
}


function singleBannerBgSet() {
    if ($(window).width() < 768) {
        $(".largeSingleBanner").each(function() {
            var imgPath = $(this).attr("data-smallimage");
            $(this).find(".bannerImgWrap").css("background-image", "url(" + imgPath + ")");
        });
    } else {
        $(".innerBanner .bannerImgWrap").css('background-image', 'none');
    }

}


//Happy life festival 
document.addEventListener("DOMContentLoaded",
    function() {
        var div, n,
            v = document.getElementsByClassName("youtubeVd");
        for (n = 0; n < v.length; n++) {
            div = document.createElement("div");
            div.setAttribute("data-id", v[n].dataset.id);
            div.innerHTML = labnolThumb(v[n].dataset.id);
            div.onclick = labnolIframe;
            v[n].appendChild(div);
        }
    });

function labnolThumb(id) {
    var thumb = '<img src="https://i.ytimg.com/vi/ID/hqdefault.jpg">',
        play = '<div class="play"></div>';
    return thumb.replace("ID", id) + play;
}

function labnolIframe() {
    var iframe = document.createElement("iframe");
    iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.id + "?rel=0");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "1");
    this.parentNode.replaceChild(iframe, this);
}


function facebookFeed() {
    if ($(".addthis_toolbox").length) {
        setTimeout(function() {
            var s = document.createElement("script");
            s.type = "text/javascript";
            s.src = "//s7.addthis.com/js/300/addthis_widget.js#pubid=xa-4ed72f87598419b9";
            $("head").append(s);

            if (typeof addthis_config !== "undefined") {
                addthis_config.ui_click = true
            } else {
                var addthis_config = {
                    ui_click: true
                };
            }
        }, 2000);
    }

}