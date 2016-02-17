$(function () {
    $(".featsContent section>div").hide();
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
        if (src.indexOf("Supra") == -1) {
            $(this).siblings("img").show();
        }
    }).mouseleave(function () {
        var src = this.src;
        if (src.indexOf("Supra") == -1) {
            $(this).siblings("img").hide();
        }
    }).click(function () {
        var src = this.src;
        if (src.indexOf("Supra") == -1) {
            var targetId = $(this).data("target");
            $(".featsContent section>div").fadeOut();
            $("#" + targetId).fadeIn();
            $(".feast").animate({
                "left": "350px"
            }, 1000);
            $(".featsContent").animate({
                "right": "0"
            }, 1000);
        }
    });
    $(".featsContent .glyphicon-remove").click(function () {
        $(".feast").animate({
            "left": "50%",
            "margin-left": "-350px"
        }, 1000);
        $(".featsContent").animate({
            "right": "-100%"
        }, 1000, function () {
            $(".featsContent section>div").hide();
        });
    });

    $('#fullpage').fullpage({
        menu: '#menu',
        lockAnchors: false,
        anchors: ['home', 'feast'],
        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: ['home', 'feast'],
        showActiveTooltip: false,
        slidesNavigation: true, //false
        slidesNavPosition: 'bottom',
    });
})