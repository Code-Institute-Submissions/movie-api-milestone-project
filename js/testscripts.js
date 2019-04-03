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
 