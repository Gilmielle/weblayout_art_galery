window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger').addEventListener('click', function() {
    document.querySelector('#menu').classList.add('is-active');
    document.querySelector("body").disableScroll.off();
  });
  document.querySelector('#exit').addEventListener('click', function() {
    document.querySelector('#menu').classList.remove('is-active');
    document.querySelector("body").disableScroll.on();
  });
})
