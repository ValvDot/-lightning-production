/**
 * *****
 * Главный слайдер
 * *****
 */

let carouselGeneral = document.querySelectorAll('.glide');

if (carouselGeneral) {
    for (let i = 0; i < carouselGeneral.length; i++) {
        carouselGeneral.i = new Glide(carouselGeneral[i], {
            type: 'slider',
            hoverpause: false,
            perView: 1,
            animationTimingFunc: 'cubic-bezier(0.165, 0.840, 0.440, 1.000)',
            animationDuration: 400,
            gap: 0,
            arrows: 'glide__bullet--active',
            breakpoints: {
                1366: {
                    perView: 1,
                },
                1170: {
                    perView: 1,
                },
                992: {
                    perView: 1,
                },
                768: {
                    perView: 1,
                },
                580: {
                    perView: 1,
                },
            }
        });


        //carouselGeneral.i.on("swipe.start", function (event) {

        carouselGeneral.i.on("run.after", function (event) {

            console.log('111111');

            carouselGeneral.i.selector.querySelector('.air-shadow').remove();
            carouselGeneral.i.selector.querySelector('.glide__slide--active').querySelector('.air-bg').insertAdjacentHTML('afterend', '<div class="air-shadow"></div>');

            const airShadow = document.querySelector('.air-shadow');

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

        carouselGeneral.i.mount();
    }
}