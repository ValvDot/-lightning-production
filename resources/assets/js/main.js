$(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 100) {
            $(".mean").removeClass("head-fixed");
        } else {
            $(".mean").addClass('head-fixed');
        }
    });
});