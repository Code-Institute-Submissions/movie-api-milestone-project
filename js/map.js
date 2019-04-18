/*-------------------code that get the latlng from a query request to use in the text search request--------------------------------------------------*/

var map;
var service;
var infowindow;


function initMap() {
 
  var stevenage = new google.maps.LatLng(51.90224,-0.20256);
  
      
        map = new google.maps.Map(document.getElementById('map'), {
          center: stevenage,
          zoom: 13
        });

       
 
$('.map-search-btn').click(function() {
  
  service = new google.maps.places.PlacesService(map);
  
   var location = document.getElementById("map-search-bar").value;
   var placeSearch = location.toString();
    var request = {
    query: placeSearch,
    fields: ['name', 'geometry'],
  };
  
  
  
  service.findPlaceFromQuery(request, function(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      var place = results;
      for (var i = 0; i < place.length; i++) {
        var lat = location.lat;
        var lng = location.lng;
        var locationSearch = new google.maps.LatLng(lat,lng);
      }
      map.setCenter(place[0].geometry.location);
    }
    findCinema(locationSearch);
  });
  
}); 
    
    /*----code that uses the latlng to search for nearby cinemas and marks them on the map--------*/
    function findCinema(locationSearch){
    var newRequest = {
          location:  locationSearch,
          radius: '20000',
          query: "Cinema",
          type: ["movie_theater"]
   };
   
   
   service = new google.maps.places.PlacesService(map);
  service.nearbySearch(newRequest, callback);

  function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      createMarker(results[i]);
    }
  }
}
    }
    /*--------code to creATE THE MARKERS---------*/
   function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    title: place.name,
    position: place.geometry.location
  });
   }


}


