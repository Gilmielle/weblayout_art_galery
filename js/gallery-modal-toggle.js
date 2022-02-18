window.addEventListener('DOMContentLoaded', function() {
  var gallerySlides = document.querySelector('#gallery-swiper').querySelectorAll('.gallery__item');
  var modal = document.querySelector('.modal');
  var modalExitBtn = document.querySelector('#modal-close-btn');
  gallerySlides.forEach(function(gallerySlide) {
    gallerySlide.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path;
      const target = modal.querySelector(`[data-target="${path}"]`);
      modal.classList.add('modal_active');
      target.classList.add('modal__content_active');
      disableScroll();
    })
  })

  modalExitBtn.addEventListener('click', function() {
    modal.classList.remove('modal_active');
    modal.querySelectorAll('.modal__content').forEach(function(contentInactive) {
      contentInactive.classList.remove('modal__content_active');
      enableScroll();
    });
  });
});