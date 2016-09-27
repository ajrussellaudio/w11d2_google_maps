var initialize = function() {
  var container = document.querySelector("#map");
  var center = { lat: 55.947289, lng: -3.202109};
  var map = new Map( container, center, 15 );
  map.addMarker( center );
  map.addClickEvent();
}

window.onload = initialize;