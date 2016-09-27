var Marker = function( map, coords ){
  this.label = this.getLabel();
  this.marker = new google.maps.Marker({
    map: map,
    position: coords,
    label: Marker.label.toString()
  })
}

Marker.prototype.getLabel = function() {
  Marker.label = (Marker.label || 0) + 1;
  Marker.label = Marker.label % 10;
  return Marker.label;
}

Marker.prototype.addListener = function(){
  var infowindow = new InfoWindow( "InfoWindow Test" )
}