window.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.artist__btn').forEach(function(artistsBtn) {
    artistsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path;
      const target = document.querySelector(`[data-target="${path}"]`);

      document.querySelectorAll('.personality').forEach(function(personality) {
        personality.classList.remove('personality_active');
      });

      document.querySelectorAll('.artist__btn').forEach(function(personalityBtn) {
        personalityBtn.classList.remove('artist__btn_active');
      });

      target.classList.add('personality_active');
      event.currentTarget.classList.add('artist__btn_active');

      if (screen.width <= 768) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    })
  })
})