window.addEventListener('DOMContentLoaded', function() {
  const swiper3 = new Swiper('#projects-swiper', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 3,
    spaceBetween: 50,
    slidesPerGroup: 1,

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 38,
        slidesPerGroup: 1,
      },

      701: {
        slidesPerView: 2,
        spaceBetween: 34,
        slidesPerGroup: 1,
      },

      769: {
        slidesPerView: 2,
        spaceBetween: 50,
        slidesPerGroup: 1,
      },

      1025: {
        slidesPerView: 3,
        spaceBetween: 25,
        slidesPerGroup: 1,
      },

      1250: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 1,
      }
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

    pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
})