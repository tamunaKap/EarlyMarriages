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
    //var controller = new ScrollMagic.Controller();
    //var tween = TweenMax.from("#article", 1, { css: { scaleX: 0.5, scaleY: 0.5 }, ease: Linear.easeNone });

    //var scene = new ScrollMagic.Scene({ triggerElement: "#article", duration: 300 })
    //				.setTween(tween)
    //				.addIndicators() // add indicators (requires plugin)
    //				.addTo(controller);
    //scene.removeIndicators();

    var flightpath = {
        entry: {
            curviness: 1.25,
            autoRotate: true,
            values: [
                    { x: 10, y: 10 } 
            ]
        },
        looping: {
            curviness: 1.25,
            autoRotate: true,
            values: [
                    { x: 10, y: 60 },
                    { x: 20, y: -60 },
                    { x: 30, y: -100 },
                    { x: 80, y: 20 },
                    { x: 100, y: 160 },
                    { x: 200, y: 120 },
                    { x: 620, y: 550 }
            ]
        },
        leave: {
            curviness: 1.25,
            autoRotate: true,
            values: [
                    { x: 660, y: 20 },
                    { x: 800, y: 130 },
                    { x: $(window).width() + 300, y: -100 },
            ]
        }
    };
    // init controller
    var controller = new ScrollMagic.Controller();

    // create tween
    var tween = new TimelineMax()
        .add(TweenMax.to($("#plane"), 1.2, { css: { bezier: flightpath.entry }, ease: Power1.easeInOut }))
        .add(TweenMax.to($("#plane"), 2, { css: { bezier: flightpath.looping }, ease: Power1.easeInOut }))
        .add(TweenMax.to($("#plane"), 1, { css: { bezier: flightpath.leave }, ease: Power1.easeInOut }));

    // build scene
    var scene = new ScrollMagic.Scene({ triggerElement: "#target", duration: 500, offset: 0 }) 
                    .setTween(tween)
                    .addIndicators() // add indicators (requires plugin)
                    .addTo(controller);
    scene.removeIndicators();
})