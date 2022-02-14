window.addEventListener('DOMContentLoaded', function() {
  function disableScroll() {
    // To get the scroll position of current webpage
    TopScroll = window.pageYOffset || document.documentElement.scrollTop;
    LeftScroll = window.pageXOffset || document.documentElement.scrollLeft,
    
    // if scroll happens, set it to the previous value
    window.onscroll = function() {
      window.scrollTo(LeftScroll, TopScroll);
    };
  };
    
  function enableScroll() {
    window.onscroll = function() {};
  };

  // Плавный переход по якорям

  const smoothLinks = document.querySelectorAll('a[href^="#"]');
  for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
      e.preventDefault();
      const id = smoothLink.getAttribute('href');

      document.querySelector('#menu').classList.remove('is-active');
      enableScroll();

      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  };

  document.querySelector('#burger').addEventListener('click', function() {
    document.querySelector('#menu').classList.add('is-active');
    disableScroll();
  });
  document.querySelector('#exit').addEventListener('click', function() {
    document.querySelector('#menu').classList.remove('is-active');
    enableScroll();
  });
})
