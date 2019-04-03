var xhr = new XMLHttpRequest();

 
  function movie_search() {
        var movie = $( "input" ).val();
          
            
  xhr.open("GET", "https://www.omdbapi.com/?t=" + movie +"&plot=full?&apikey=858bd7c5");
  xhr.send();
  
 xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        movie = (JSON.parse(this.responseText));
         console.log(movie);
   
        movie = (JSON.parse(this.responseText));
        document.getElementById("title").textContent = movie.Title;
        document.getElementById("release").textContent = "Release: " + movie.Released;
        document.getElementById("director").textContent = "Director: " + movie.Director;
        document.getElementById("plot").textContent =  movie.Plot;
        document.getElementById("poster").src =  movie.Poster;
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
  
  

  
 /*
var xhr = new XMLHttpRequest();

 
  function movie_search() {
        var movie = $( "input" ).val();
          
            
  xhr.open("GET", "https://www.omdbapi.com/?s=" + movie +"&plot=full?&apikey=858bd7c5");
  xhr.send();
  
 xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        movie_data = (JSON.parse(this.responseText));
                for ( i=0; i < movie_data.Search.length; i++) {
                    var id = movie_data.Search[i];
                		console.log(id.imdbID);
                   
    }
 }
  };
  }*/