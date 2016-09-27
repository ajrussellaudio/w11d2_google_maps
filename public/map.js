var Map = function( container, coords, zoom ) {
  this.googleMap = new google.maps.Map( container, {
    center: coords,
    zoom: zoom
  });
}

Map.prototype.addClickEvent = function() {
    google.maps.event.addListener( this.googleMap, 'click', function( event ) {
      console.log( event );

      var position = { 
        lat: event.latLng.lat(), 
        lng: event.latLng.lng()
      }

      var marker = new Marker( this.googleMap, position );
      marker.addListener();
    }.bind(this))
  }