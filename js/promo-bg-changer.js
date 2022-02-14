window.addEventListener('DOMContentLoaded', function() {
  var path = "url(img/promo/";
  var ext = ".jpg)";
  var backs = [];

  function collectBgArray(postfix) {
    for(var i = 1; i <= 3; i++) {
      var fileName = ('swiper-' + i + postfix);
      var fullPath = path + fileName + ext;
      backs.push(fullPath);
    }
    return backs;
  }

  if (screen.width >= 1025) {
    collectBgArray('-desktop');
  } else if (screen.width >= 769 && screen.width <= 1024) {
    collectBgArray('-tablet');
  } else if (screen.width >= 320 && screen.width <= 768) {
    collectBgArray('-mobile');
  }

  var i = 0;
  function changebg(){
    document.getElementById('promo__background').style.backgroundImage = (backs[i]);
    i++;
    if (i === backs.length) {
      i = 0;
    }
  };

  window.onload = setInterval(changebg, 5000);
});