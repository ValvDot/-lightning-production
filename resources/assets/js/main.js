//DOM load event
window.addEventListener("DOMContentLoaded", () => {

    const airShadow = document.querySelector('.airShadow');

    let spotlightSize = 'transparent 160px, rgba(0, 0, 0, 0.85) 600px)';

    window.addEventListener('mousemove', e => updateSpotlight(e));

    window.addEventListener('mousedown', e => {

        spotlightSize = 'transparent 130px, rgba(0, 0, 0, 0.95) 450px)';

        updateSpotlight(e);

    });

    window.addEventListener('mouseup', e => {

        spotlightSize = 'transparent 160px, rgba(0, 0, 0, 0.85) 600px)';

        updateSpotlight(e);

    });

    function updateSpotlight(e) {

        airShadow.style.backgroundImage = `radial-gradient(circle at ${e.pageX / window.innerWidth * 100}% ${e.pageY / window.innerHeight * 100}%, ${spotlightSize}`;

    }

});

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