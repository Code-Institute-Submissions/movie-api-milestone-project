/*-------------------code that works without searchbar--------------

var map;
var service;
var infowindow;


function initMap() {
  var location = $('#map-search-bar').val();
  var stevenage = new google.maps.LatLng(51.90224,-0.20256);
  
      
        map = new google.maps.Map(document.getElementById('map'), {
          center: stevenage,
          zoom: 13
        });

       
 
$('.map-search-btn').click(function() {
  

   var request = {
          location: stevenage,
          radius: '5000',
          query: "Cinema",
          type: ["movie_theater"]
   };
   
  service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);
  
  
      
      
 
  
  function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      createMarker(results[i]);
    }
  }
}
  
   function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });
   }
});
}
------------------------------------*/

/*------------------script to get results with the search bar working-----------*/

var map;
var service;
var infowindow;


function initMap() {
  
  var stevenage = new google.maps.LatLng(51.90224,-0.20256);
  var uluru = {lat: -25.344, lng: 131.036};
      
        map = new google.maps.Map(document.getElementById('map'), {
          center: stevenage,
          zoom: 13
        });
 
$('.map-search-btn').click(function() {
  var location = $('#map-search-bar').val();
  
  var request = {
          location: location,
          fields: "Basic",
   };
   console.log(request);
  service.findPlaceFromQuery(request, function(results, status) {
    var placeLat = geometry.location.lat();
    var placeLng = geometry.location.lng();
  
  
  var lat = placeLat;
  var lng = placeLng;
   
   
  service = new google.maps.places.PlacesService(map);
  
  
      
   var request2 = {
          location: {lat: lat, lng: lng} ,
          radius: '5000',
          query: "Cinema",
          type: ["movie_theater"]
   };
   
  service.textSearch(request2, callback);
  
  });
  function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      createMarker(results[i]);
    }
  }
}
  
   function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });
   }
});
}

