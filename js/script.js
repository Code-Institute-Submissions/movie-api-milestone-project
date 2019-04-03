var xhr = new XMLHttpRequest();
/*-------code for the omdb api--------
function movie_search() {
        var movie = $( "input" ).val();*/
 /*         
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
  */
  /* -------code for the imdb api--------------
function movie_search() {
        var movie = $( "input" ).val();
          
      $.ajax({
            url: "https://movie-database-imdb-alternative.p.rapidapi.com/?r=json&type=movie&s=" + movie + "&plot=full",
            type: "GET",
            dataType: "json",
            headers: {"X-RapidAPI-Key": "b073a0eb4bmsh4dae4c8f1976d43p164f83jsnaf292aa5778b"},
            success (response, status, xhr) {
                console.log(response);
            }
    });
  }*/
  
  function movie_search() {
        var movie = $( "input" ).val();
          
            
  xhr.open("GET", "https://www.omdbapi.com/?t=" + movie +"&plot=full?i=tt3896198&apikey=858bd7c5");
  xhr.send();
 
 xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
         
    
        movie = (JSON.parse(this.responseText));
        document.getElementById("title").textContent = movie.Title;
        document.getElementById("release").textContent = "Release: " + movie.Released;
        document.getElementById("director").textContent = "Director: " + movie.Director;
        document.getElementById("plot").textContent =  movie.Plot;
        $('#poster').attr('src', 'movie.Poster');
        
        
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
  function movie_search() {
        var movie = $( "input" ).val();
          
      $.ajax({
            url: "https://movie-database-imdb-alternative.p.rapidapi.com/?r=json&type=movie&plot=full&=" + movie,
            type: "GET",
            dataType: "json",
            headers: {"X-RapidAPI-Key": "b073a0eb4bmsh4dae4c8f1976d43p164f83jsnaf292aa5778b"},
            success: function(){
                for ( i=0; i < Search.length; i++) {
                   console.log(Search[i]['imdbID'])
    
  }
}
});
}
 function movie_search() {
        var movie = $( "input" ).val();
        
  xhr.open("GET", "https://www.omdbapi.com/?t=" + movie +"&plot=full?i=tt3896198&apikey=858bd7c5");
  xhr.send();
 
 xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        if (this.responseText == 'Error.Movie Not Found') {
            document.getElementById("title").textContent = "Please Try Another Movie Or More Exact Search Terms";
        }
    else {
        movie = (JSON.parse(this.responseText));
        document.getElementById("title").textContent = movie.Title;
        document.getElementById("release").textContent = "Release: " + movie.Released;
        document.getElementById("director").textContent = "Director: " + movie.Director;
        document.getElementById("plot").textContent =  movie.Plot;
        $('#poster').attr('src', 'movie.Poster');
    }
    }
  };
  }
*/