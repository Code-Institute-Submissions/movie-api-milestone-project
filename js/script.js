var xhr = new XMLHttpRequest();

function movie_search() {
        var movie = $( "input" ).val();
          
      $.ajax({
            url: "https://movie-database-imdb-alternative.p.rapidapi.com/?page=1&r=json&type=movie&s=" + movie,
            type: "GET",
            dataType: "json",
            headers: {"X-RapidAPI-Key": "b073a0eb4bmsh4dae4c8f1976d43p164f83jsnaf292aa5778b"},
            success (response, status, xhr) {
                console.log(response);
    }
    
  });
  
  }
  
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
    }
  };
/*
function movie_search() {
        var movie = $( "input" ).val();
          
      $.ajax({
            url: "https://movie-database-imdb-alternative.p.rapidapi.com/?page=1&r=json&type=movie&s=" + movie,
            type: "GET",
            dataType: "json",
            headers: {"X-RapidAPI-Key": "b073a0eb4bmsh4dae4c8f1976d43p164f83jsnaf292aa5778b"},
            success (Search) {
            console.log(Search);
    }
    
  });
  
  }
$(document).ready(function() {
    
});
*/