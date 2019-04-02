var xhr = new XMLHttpRequest();
/*-------code for the new api--------*/
function movie_search() {
        var movie = $( "input" ).val();
          
      $.ajax({
            url: "https://www.omdbapi.com/?t=" + movie +"&plot=full?i=tt3896198&apikey=858bd7c5",
            type: "GET",
            dataType: "json",
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
  /* -------code for the old api--------------
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
  success: function printResults(Search){
                for (var i=0; i < Search.length; i++) {
                    console.log(Search[i]['imdbID']);
*/