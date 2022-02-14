window.addEventListener('DOMContentLoaded', function() {
  const swiper2 = new Swiper('#events-swiper', {
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

      577: {
        slidesPerView: 2,
        spaceBetween: 34,
        slidesPerGroup: 2,
      },

      801: {
        slidesPerView: 3,
        spaceBetween: 27,
        slidesPerGroup: 3,
      },

      1025: {
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