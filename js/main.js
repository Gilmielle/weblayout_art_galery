window.addEventListener('DOMContentLoaded', function() {
  // раскрытие поиска в адаптиве
  var searchBtn = document.querySelector('#search-btn');
  var searchForm = document.querySelector('#search-form');
  var exitBtn = document.querySelector('#search-exit-btn');
  var burger = document.querySelector('#burger');

  searchBtn.addEventListener('click', function () {
    searchForm.classList.add('search-form_is-active');
    searchBtn.setAttribute("tabindex", "-1");
    if (screen.width <= 768) {
      burger.setAttribute("tabindex", "-1");
    }
  });
  
  exitBtn.addEventListener('click', function () {
    searchForm.classList.remove('search-form_is-active');
    searchBtn.setAttribute("tabindex", "0");
    burger.setAttribute("tabindex", "0");
  });

  // Изменение текста в зависимости от ширины экрана

  var link = document.querySelector('.projects__link');
  var button = document.querySelector('.contacts-form__btn');
  window.onload = function() {
    if (screen.width <= 768 && screen.width >= 577) {
      button.textContent = "Заказать обратный звонок";
      link.textContent = "blanchard-art.ru";
    } else if (screen.width <= 576) {
      button.textContent = "Заказать";
      link.textContent = "blanchard-art.ru/projects/about";
    } else {
      button.textContent = "Заказать обратный звонок";
      link.textContent = "blanchard-art.ru/projects";
    }
  };
});

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

  window.disableScroll = disableScroll;
  window.enableScroll = enableScroll;