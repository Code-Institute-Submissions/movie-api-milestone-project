/*

///-------------------this searches by film title and puts all elements into the html but only retrives 1 film----------------------
var xhr = new XMLHttpRequest();
 

  function movie_search() {
        var movie = $( "input" ).val();
         $(".result-container").show();
            
  xhr.open("GET", "https://www.omdbapi.com/?t=" + movie +"?&apikey=858bd7c5");
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
  */
  
function movie_search2() {
  var movie = $("input").val();

  $.ajax({
    url: "https://www.omdbapi.com/?s=" + movie + "&type=movie&?&apikey=858bd7c5",
    type: "GET",
    success: function(response) {
      console.log(response);
      var result = response["Search"]; ///puts response into a variable
      var htmlString = '';
      
      for (var i = 0; i < result.length; i++) { ///iterate over each result to pick out each piece of data from it
        movieData = result[i]; /// declaires each seperate result <-- fine
        imdbId = movieData.imdbID; ///gets the id of each film in the result and stores it as a variable for later use <-- fine
        htmlString += `
          <div class="row result-container">
            <div class="col-xs-12">
              <p class="title">Title: ${movieData.Title}</p>
              <p class="release"> Release: ${movieData.Year}</p>
              <img class="poster" src="${movieData.Poster}" alt="poster">
              <div>
                <button class="more-info-btn" onclick="getMoreInfo('${movieData.imdbID}')">More Info</button>
              </div>
            </div>
          </div>`;
      }
      $('#movie-container').html(htmlString);
    }
  });
  if (!movie) {
    document.getElementById("body-header").textContent = "Please Enter A Movie Name";
    return;
  }
  else {
    document.getElementById("body-header").textContent = "Use The Search Bar Above To Look Up A Movie";
    return;
  }
}







  





  
  var xhr = new XMLHttpRequest();



  function movie_search() {
    var movie = $("input").val();

    $.ajax({
      url: "https://www.omdbapi.com/?s=" + movie + "&type=movie&?&apikey=858bd7c5",
      type: "GET",
      success: function(response) {
        var result = response["Search"]; ///puts response into a variable
        var resultContainer = $("<div class='row'><div class='col-sm-12'></div></div>"); ///specifies where results should go

        for (var i = 0; i < result.length; i++) { ///iterate over each result to pick out each piece of data from it
          movieData = result[i]; /// declaires each seperate result 
          imdbId = movieData.imdbID; ///gets the id of each film in the result and stores it as a variable for later use
          movieSection = createMovieSection(movieData); ///assigns the createMovieSection function to this variable
          resultContainer.append(movieSection); ///get the result of the movieSection variable and then place it into the correct place on the html page
          console.log(movieData);
        }
        clearPageAndAddNewResults(resultContainer); ///calls the function to erase the page and add in the results for the new search
      }
    });
    if (!movie) {
      document.getElementById("body-header").textContent = "Please Enter A Movie Name";
      return;
    }
    else {
      document.getElementById("body-header").textContent = "Use The Search Bar Above To Look Up A Movie";
      return;
    }
  }

  function createMovieSection(movieData) { ///function to create the section for each movie
    var movieDiv = $(`<div class='result-container'></div>`); /// a variable that creates the section where the different bits of movie data will sit
    movieDiv.append($(`<p class="title">Title: ${movieData.Title}</p>`)); ///appends the movie title to the section
    movieDiv.append($(`<p class="release"> Release: ${movieData.Year}</p>`))
    movieDiv.append($(`<img class="poster" src="${movieData.Poster}" alt="poster">`)); ///appends the movie poster
    movieDiv.append($(`<div><button class="more-info-btn" onclick ="getMoreInfo('${movieData.imdbID}')">More Info</button></div>`));
    return movieDiv;
  }

  function clearPageAndAddNewResults(resultContainer) {
    $('#movie-container').html("");
    $('#movie-container').append(resultContainer);
  }


  xhr.addEventListener("readystatechange", function() {
    if (this.readyState === this.DONE) {
      console.log(this.responseText);
    }
  });

  var xhs = new XMLHttpRequest();
function getMoreInfo(imdbid) {
  
    $.ajax({
      url: "https://www.omdbapi.com/?i=" + imdbid + "&plot=full&?&apikey=858bd7c5",
      type: "GET",
      success: function(response) {
        var moreInfo = response;
        var newResultContainer = $("<div class='row'><div class='col-sm-12'></div></div>");
        clearPageAndAddNewResults(newResultContainer);
        moreInfoSection = createMoreInfoSection(moreInfo);
        newResultContainer.append(moreInfoSection);
      }
    });
  }


  function createMoreInfoSection(moreInfo) {
    var movieDiv = $(`<div class='result-container'></div>`);
    movieDiv.append($(`<p class="title">Title: ${moreInfo.Title}</p>`));
    movieDiv.append($(`<p class="release"> Release: ${moreInfo.Year}</p>`))
    movieDiv.append($(`<p class="director">Director: ${moreInfo.Director}</p>`));
    movieDiv.append($(`<img class="poster" src="${moreInfo.Poster}" alt="poster">`));
    movieDiv.append($(`<p class="plot">${moreInfo.Plot}</p>`));
    movieDiv.append($(`<p class="director">Cast: ${moreInfo.Actors}</p>`));
    movieDiv.append($(`<p class="meta">Metascore: ${moreInfo.Metascore}</p>`));


    return movieDiv;
  }