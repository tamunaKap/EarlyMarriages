$(function () { 
    $(".centerBlock").hide();
    $(".girls figure").click(function () {
        var youtubeUrl = $(this).data("youtube");
        $(".centerBlock iframe").attr("src", youtubeUrl);
        $(".centerBlock").fadeIn();
    });

    $(".centerBlock .glyphicon-remove").click(function () {
        $(".centerBlock").fadeOut();
        $(".centerBlock iframe").attr("src", "");
    });
    $('[data-toggle="tooltip"]').tooltip();

    $('.feast img:last-child').mouseenter(function () {
        var src = this.src;
        if (src.indexOf("supra") == -1) {
            $(this).siblings("img").show();
        }
    }).mouseleave(function () {
        var src = this.src;
        if (src.indexOf("supra") == -1) {
            $(this).siblings("img").hide();
        }
    }).click(function () {

    });

    $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors: ['home', 'feast'],
        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: ['home', 'feast'],
        showActiveTooltip: false,
        slidesNavigation: true, //false
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: false,
        verticalCentered: true,
        resize: false,
        sectionsColor: ['#ccc', '#fff'],
        paddingTop: '3em',
        paddingBottom: '10px',
        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        onLeave: function (index, nextIndex, direction) { },
        afterLoad: function (anchorLink, index) { },
        afterRender: function () { },
        afterResize: function () { },
        afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) { },
        onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) { }
    });
    //var controller = new ScrollMagic.Controller();
    //var tween = TweenMax.from("#article", 1, { css: { scaleX: 0.5, scaleY: 0.5 }, ease: Linear.easeNone });

    //var scene = new ScrollMagic.Scene({ triggerElement: "#article", duration: 300 })
    //				.setTween(tween)
    //				.addIndicators() // add indicators (requires plugin)
    //				.addTo(controller);
    //scene.removeIndicators();

    //var flightpath = {
    //    entry: {
    //        curviness: 1.25,
    //        autoRotate: true,
    //        values: [
    //                { x: 10, y: 10 }
    //        ]
    //    },
    //    looping: {
    //        curviness: 1.25,
    //        autoRotate: true,
    //        values: [
    //                { x: 10, y: 60 },
    //                { x: 20, y: -60 },
    //                { x: 30, y: -100 },
    //                { x: 80, y: 20 },
    //                { x: 100, y: 160 },
    //                { x: 200, y: 120 },
    //                { x: 620, y: 550 }
    //        ]
    //    },
    //    leave: {
    //        curviness: 1.25,
    //        autoRotate: true,
    //        values: [
    //                { x: 660, y: 20 },
    //                { x: 800, y: 130 },
    //                { x: $(window).width() + 300, y: -100 },
    //        ]
    //    }
    //};
    //// init controller
    //var controller = new ScrollMagic.Controller();

    //// create tween
    //var tween = new TimelineMax()
    //    .add(TweenMax.to($("#plane"), 1.2, { css: { bezier: flightpath.entry }, ease: Power1.easeInOut }))
    //    .add(TweenMax.to($("#plane"), 2, { css: { bezier: flightpath.looping }, ease: Power1.easeInOut }))
    //    .add(TweenMax.to($("#plane"), 1, { css: { bezier: flightpath.leave }, ease: Power1.easeInOut }));

    //// build scene
    //var scene = new ScrollMagic.Scene({ triggerElement: "#target", duration: 500, offset: 0 })
    //                .setTween(tween)
    //                .addIndicators() // add indicators (requires plugin)
    //                .addTo(controller);
    //scene.removeIndicators();
})