window.addEventListener('DOMContentLoaded', function() {
  ymaps.ready(init);
  function init(){
    var myMap = new ymaps.Map("contacts__map", {
      center: [55.75846806898367,37.60108849999989],
      zoom: 14,
    });

    var myPlacemark = new ymaps.Placemark([55.75846806898367,37.60108849999989], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/svg/placemark.svg',
      iconImageSize: [20, 20],
    });

    myMap.geoObjects.add(myPlacemark); 
    myMap.behaviors.disable('scrollZoom');
  }
});