   function movie_search() {
        var movie = $( "input" ).val();
          
      $.ajax({
            url: "https://movie-database-imdb-alternative.p.rapidapi.com/?r=json&type=movie&plot=full&=" + movie,
            type: "GET",
            dataType: "json",
            headers: {"X-RapidAPI-Key": "b073a0eb4bmsh4dae4c8f1976d43p164f83jsnaf292aa5778b"},
            success: function(movie_data){
                movie_data = (JSON.parse(this.responseText));
                for ( i=0; i < movie_data.length; i++) {
                   console.log(movie_data[i]['imdbID']);
    
  }
}
});


function movie_search() {
        var movie = $( "input" ).val();
         
      $.ajax({
            url: "https://www.omdbapi.com/?t=" + movie +"&plot=full?i=tt3896198&apikey=858bd7c5",
            type: "GET",
            dataType: "json",
            success: function(){
            for ( i=0; i < arr.length; i++) {
                   console.log(arr[i]['imdbID'])
                }
    }
  });
}
}
 
 
 
 /*

///------------------this retrives the imdbID for each film and consol.logs it----------------
var xhr = new XMLHttpRequest();

 
  function movie_search() {
        var movie = $( "input" ).val();
          
            
  xhr.open("GET", "https://www.omdbapi.com/?s=" + movie +"&plot=full?&apikey=858bd7c5");
  xhr.send();
  
 xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        movie_data = (JSON.parse(this.responseText));
         console.log(movie_data)
                for ( i=0; i < movie_data.Search.length; i++) {
                    var id = movie_data.Search[i];
                		console.log (id.imdbID);
    }
 }
  };
  }
  
  */
  
 /* 
 
 var xhr = new XMLHttpRequest();

 
  function movie_search() {
        var movie = $( "input" ).val();
          
            
  xhr.open("GET", "https://www.omdbapi.com/?s=" + movie +"&plot=full?&apikey=858bd7c5");
  xhr.send();
 ///--------get imdbID for each film-------
 xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        movie_data = (JSON.parse(this.responseText));
         console.log(movie_data)
                for ( i=0; i < movie_data.Search.length; i++) {
                    var id = movie_data.Search[i];
                		var imdbID = id.imdbID;
                		
///------------------use imdbID to do a serch for each film by id to get more information----------
                		 xhr.open("GET", "https://www.omdbapi.com/?i=" + imdbID +"&plot=full?&apikey=858bd7c5");
                          xhr.send();
                          
                         xhr.onreadystatechange = function() {
                            if (this.readyState == 4 && this.status == 200) {
                                movie = (JSON.parse(this.responseText));
                                 console.log(movie);
                                           
    }
 };
                }
 }
  };
  } 
  
  */