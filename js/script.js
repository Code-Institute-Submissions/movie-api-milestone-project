/*-------------------this searches by film title and puts all elements into the html but only retrives 1 film----------------------

var xhr = new XMLHttpRequest();

 
  function movie_search() {
        var movie = $( "input" ).val();
          
            
  xhr.open("GET", "https://www.omdbapi.com/?t=" + movie +"&plot=full?&apikey=858bd7c5");
  xhr.send();
  
 xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        movie_data = (JSON.parse(this.responseText));
         console.log(movie_data);
   
        movie = (JSON.parse(this.responseText));
        document.getElementById("title").textContent = movie_data.Title;
        document.getElementById("release").textContent = "Release: " + movie_data.Released;
        document.getElementById("director").textContent = "Director: " + movie_data.Director;
        document.getElementById("plot").textContent =  movie_data.Plot;
        document.getElementById("poster").src =  movie_data.Poster;
    }
    };
    if (!movie) {
            document.getElementById("body-header").textContent = "Please Enter A Movie Name";
            return;
        }
        else {
            document.getElementById("body-header").textContent = "Use The Search Bar Above To Look Up A Movie";
            return;
        }
  }
  
  
*/
  

/*------------------this retrives the imdbID for each film and consol.logs it----------------
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
                		console.log(id.imdbID);
                   
    }
 }
  };
  }
  -*/
  
  
  
 var xhr = new XMLHttpRequest();

 
  function movie_search() {
        var movie = $( "input" ).val();
          
            
  xhr.open("GET", "https://www.omdbapi.com/?s=" + movie +"&plot=full?&apikey=858bd7c5");
  xhr.send();
 /*--------get imdbID for each film-------*/
 xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        movie_data = (JSON.parse(this.responseText));
         console.log(movie_data)
                for ( i=0; i < movie_data.Search.length; i++) {
                    var id = movie_data.Search[i];
                		var imdbID = id.imdbID;
                		
/*------------------use imdbID to do a serch for each film by id to get more information----------*/
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
  