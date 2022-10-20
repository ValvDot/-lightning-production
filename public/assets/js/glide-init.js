/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!*******************************************!*\
  !*** ./resources/assets/js/glide-init.js ***!
  \*******************************************/
/**
 * *****
 * Главный слайдер
 * *****
 */
var carouselGeneral = document.querySelectorAll('.glide');

if (carouselGeneral) {
  for (var i = 0; i < carouselGeneral.length; i++) {
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
          perView: 1
        },
        1170: {
          perView: 1
        },
        992: {
          perView: 1
        },
        768: {
          perView: 1
        },
        580: {
          perView: 1
        }
      }
    });
    carouselGeneral.i.mount();
  }
}
/******/ })()
;