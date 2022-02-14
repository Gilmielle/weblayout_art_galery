window.addEventListener('DOMContentLoaded', function() {
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