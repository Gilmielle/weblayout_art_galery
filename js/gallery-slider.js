window.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper('#gallery-swiper', {
    direction: 'horizontal',
    loop: false,

    slidesPerView: 3,
    spaceBetween: 44,
    slidesPerGroup: 3,

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 38,
        slidesPerGroup: 1,
      },

      577: {
        slidesPerView: 2,
        spaceBetween: 38,
        slidesPerGroup: 2,
      },

      800: {
        slidesPerView: 2,
        spaceBetween: 20,
        slidesPerGroup: 2,
      },

      1300: {
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 3,
      },

      1500: {
        slidesPerView: 3,
        spaceBetween: 44,
        slidesPerGroup: 3,
      },
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});
