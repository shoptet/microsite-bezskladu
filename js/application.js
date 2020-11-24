// Mouse move parallax effect
(function ( $ ) {
    $.fn.extend({

        mouseParallax: function(options) {

            var defaults = { moveFactor: 5, zIndexValue: "-1", targetContainer: 'body' };

            var options = $.extend(defaults, options);

            return this.each(function() {
                var o = options;
                var background = $(this);

                $(o.targetContainer).on('mousemove', function(e){

                    mouseX = e.pageX;
                    mouseY = e.pageY;

                    windowWidth = $(window).width();
                    windowHeight = $(window).height();

                    percentX = ((mouseX/windowWidth)*o.moveFactor) - (o.moveFactor/2);
                    percentY = ((mouseY/windowHeight)*o.moveFactor) - (o.moveFactor/2);

                    leftString = (0-percentX-o.moveFactor)+"%";
                    rightString = (0-percentX-o.moveFactor)+"%";
                    topString = (0-percentY-o.moveFactor)+"%";
                    bottomString = (0-percentY-o.moveFactor)+"%";

                    background[0].style.left = leftString;
                    background[0].style.right = rightString;
                    background[0].style.top = topString;
                    background[0].style.bottom = bottomString;
                    if(o.zIndexValue) {
                        background[0].style.zIndex = o.zIndexValue;
                    }
                });
            });
        }
    });
} (jQuery) );

$(document).ready(function() {
    $('.triangle').mouseParallax({ moveFactor: 5 });
    $('.triangle-line').mouseParallax({ moveFactor: 10 });
    $('.square').mouseParallax({ moveFactor: 15 });
    $('.square-line').mouseParallax({ moveFactor: 20 });

    // Smooth scrolling
    $('.scroll').click(function(){
        var target = $(this).attr('href');
        target = $(target).offset().top;
        $('html, body').animate({scrollTop: target}, 1500);
    });
});

// Animations
(function(){

    var config = {
        viewFactor : 0.15,
        duration   : 800,
        distance   : "0px",
        scale      : 0.8,
    }

    window.sr = new ScrollReveal(config)
})()

    // Section header
    var logos = {
        origin   : "top",
        distance : "80px",
        duration : 1500,
        delay    : 500,
        scale    : 1,
    };


    var triangle = {
        origin   : "left",
        distance : "300px",
        duration : 1500,
        delay    : 500,
        scale    : 1,
    };

    var square = {
        origin   : "right",
        distance : "300px",
        duration : 1500,
        delay    : 500,
        scale    : 1,
    };

    var headerTitles = {
        origin   : "right",
        distance : "100px",
        duration : 2000,
        scale    : 1,
    };

    var btnHeader = {
        origin   : "bottom",
        distance : "200px",
        duration : 2500,
        scale    : 1,
    };

    sr.reveal(".shoptet", logos);
    sr.reveal(".dropshipping", logos);
    sr.reveal(".shapes-background-1", triangle);
    sr.reveal(".shapes-background-2", square);
    sr.reveal(".header-title", headerTitles);
    sr.reveal(".btn-header", btnHeader);

    // Section way
    var tree = {
        origin   : "left",
        distance : "60px",
        duration : 1500,
        scale    : 1,
    };

    var flagRight = {
        origin   : "right",
        distance : "60px",
        duration : 2200,
        scale    : 1,
        rotate   : { x: 0, y: 180, z: 0 },
    };

    var paragraphRight = {
        origin   : "right",
        distance : "80px",
        duration : 2500,
        scale    : 1,
    };

    var flagLeft = {
        origin   : "left",
        distance : "60px",
        duration : 2200,
        scale    : 1,
        rotate   : { x: 0, y: 180, z: 0 },
    };

    var paragraphLeft = {
        origin   : "left",
        distance : "80px",
        duration : 2500,
        scale    : 1,
    };

    var bench = {
        origin   : "right",
        distance : "60px",
        duration : 1500,
        scale    : 1,
    };

    var wayButton = {
        origin   : "bottom",
        distance : "80px",
        duration : 1500,
        delay    : 500,
        scale    : 1,
    };


    sr.reveal(".tree", tree);
    sr.reveal(".flag-right", flagRight);
    sr.reveal(".paragraph-right", paragraphRight);
    sr.reveal(".flag-left", flagLeft);
    sr.reveal(".paragraph-left", paragraphLeft);
    sr.reveal(".bench", bench);
    sr.reveal(".lamp", bench);
    sr.reveal(".way-button", wayButton);

    // Section how it works

    var hiwOne = {
        origin   : "top",
        distance : "40px",
        duration : 1000,
        scale    : 1,
    };

    var connectionRoad = {
        origin   : "bottom",
        distance : "100px",
        duration : 1000,
        delay    : 100,
        scale    : 1,
    };

    var topShadows = {
        origin   : "top",
        distance : "50px",
        duration : 1000,
        delay    : 800,
        scale    : 1,
    };

    var bottomShadows = {
        origin   : "bottom",
        distance : "110px",
        duration : 1000,
        delay    : 800,
        scale    : 1,
    };

    var topPins = {
        origin   : "top",
        distance : "50px",
        duration : 1000,
        delay    : 1000,
        scale    : 1,
    };

    var bottomPins = {
        origin   : "bottom",
        distance : "110px",
        duration : 1000,
        delay    : 1000,
        scale    : 1,
    };

    var topPinTitles = {
        origin   : "top",
        distance : "70px",
        duration : 1000,
        delay    : 2000,
        scale    : 1,
    };

    var bottomPinTitles = {
        origin   : "bottom",
        distance : "150px",
        duration : 1000,
        delay    : 2000,
        scale    : 1,
    };

    var arrowOne = {
        origin   : "left",
        distance : "150px",
        duration : 1000,
        delay    : 2500,
        scale    : 1,
    };

    var arrowTwo = {
        origin   : "Bottom",
        distance : "150px",
        duration : 1000,
        delay    : 2500,
        scale    : 1,
    };

    var arrowThree = {
        origin   : "top",
        distance : "150px",
        duration : 1000,
        delay    : 2500,
        scale    : 1,
    };

    var arrowFour = {
        origin   : "right",
        distance : "150px",
        duration : 1000,
        delay    : 2500,
        scale    : 1,
    };

    var hiwBox = {
        origin   : "right",
        distance : "150px",
        duration : 1000,
        scale    : 1,
        rotate   : { x: 10, y: 10, z: 10 },
    };

    var bottomHiwBoxAnchor = {
        origin   : "bottom",
        distance : "150px",
        duration : 1000,
        delay    : 900,
        scale    : 1,
    };

    var bottomHiwBoxButton = {
        origin   : "bottom",
        distance : "200px",
        duration : 1000,
        delay    : 1000,
        scale    : 1,
    };

    var bottomCtaBoxButton = {
        origin   : "right",
        distance : "80px",
        duration : 1000,
        scale    : 1,
    };


    // Section how it works
    sr.reveal(".hiw-h1", hiwOne);
    sr.reveal(".connection-road", connectionRoad);

    sr.reveal(".pin-1-shadow", topShadows);
    sr.reveal(".pin-3-shadow", topShadows);
    sr.reveal(".pin-5-shadow", topShadows);
    sr.reveal(".pin-2-shadow", bottomShadows);
    sr.reveal(".pin-4-shadow", bottomShadows);

    sr.reveal(".pin-1", topPins);
    sr.reveal(".pin-3", topPins);
    sr.reveal(".pin-5", topPins);
    sr.reveal(".pin-2", bottomPins);
    sr.reveal(".pin-4", bottomPins);

    sr.reveal(".pin-1-title", topPinTitles);
    sr.reveal(".pin-3-title", topPinTitles);
    sr.reveal(".pin-5-title", topPinTitles);
    sr.reveal(".pin-2-title", bottomPinTitles);
    sr.reveal(".pin-4-title", bottomPinTitles);

    sr.reveal(".arrow-1", arrowOne);
    sr.reveal(".arrow-2", arrowTwo);
    sr.reveal(".arrow-3", arrowThree);
    sr.reveal(".arrow-4", arrowFour);

    sr.reveal(".hiw-box", hiwBox);
    sr.reveal(".hiw-box-anchor", bottomHiwBoxAnchor);
    sr.reveal(".hiw-box-button", bottomHiwBoxButton);

    // Section cta
    sr.reveal(".cta-title", bottomHiwBoxAnchor);
    sr.reveal(".cta", bottomCtaBoxButton);