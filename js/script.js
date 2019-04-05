

///-------------------this searches by film title and puts all elements into the html but only retrives 1 film----------------------
var xhr = new XMLHttpRequest();
 

  function movie_search() {
        var movie = $( "input" ).val();
         $(".result-container").show();
            
  xhr.open("GET", "https://www.omdbapi.com/?t=" + movie +"&plot=full?&apikey=858bd7c5");
  xhr.send();
  
 xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        movie_data = (JSON.parse(this.responseText));
         console.log(movie_data);
   
        document.getElementById("title").textContent = movie_data.Title;
        document.getElementById("release").textContent = "Release: " + movie_data.Released;
        document.getElementById("director").textContent = "Director: " + movie_data.Director;
        document.getElementById("plot").textContent =  movie_data.Plot;
        document.getElementById("poster").src =  movie_data.Poster;
        document.getElementById("cast").textContent = "Cast: " + movie_data.Actors;
        document.getElementById("metascore").textContent = "Metascore: " + movie_data.Metascore;
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
xhr.withCredentials = true;
  

  function movie_search () {
        var movie = $( "input" ).val();
          
      $.ajax({
            url: "https://www.omdbapi.com/?s=" + movie +"&callback=getMoreData?&apikey=858bd7c5",
            type: "GET",
            success (response, status, xhr) {
            console.log(response);
    }
      });
      function getMoreData(){
    $.ajax({
            url: "https://www.omdbapi.com/?s=" + movie +"&type=movie&plot=full?&apikey=858bd7c5",
            type: "GET",
            success (response, status, xhr) {
            console.log(response);
    }
      });
  }
  }
    
    
  
  
  
xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});
  
  */

  
