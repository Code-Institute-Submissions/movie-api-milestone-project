var xhr = new XMLHttpRequest();

function movie_search() {
  var movie = $("input").val();

  $.ajax({
    url: "https://www.omdbapi.com/?s=" + movie + "&type=movie&?&apikey=858bd7c5",
    type: "GET",
    success: function(response) {
      if (response.Response == "False") {
        $('#body-header').innerHtml = "Film Not Found, Please Try Again";
      }

      else {
        var result = response["Search"];
        var htmlString = '';

        for (var i = 0; i < result.length; i++) {
          movieData = result[i];
          imdbId = movieData.imdbID;
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

/*--------------------------function for doing the second api call to get more information-----*/

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

function clearPageAndAddNewResults(resultContainer) {
  $('#movie-container').html("");
}

var xhr = new XMLHttpRequest();

function movie_search2() {
  var movie = $("input").val();

  $.ajax({
    url: "https://www.omdbapi.com/?s=" + movie + "&type=movie&?&apikey=858bd7c5",
    type: "GET",
    success: function(response) {
      var result = response["Search"];
      var resultContainer = $("<div class='row'><div class='col-sm-12'></div></div>");

      for (var i = 0; i < result.length; i++) {
        movieData = result[i];
        imdbId = movieData.imdbID;
        movieSection = createMovieSection(movieData);
        resultContainer.append(movieSection);
      }
      clearPageAndAddNewResults(resultContainer);
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

function createMovieSection(movieData) {
  var movieDiv = $(`<div class='result-container'></div>`);
  movieDiv.append($(`<p class="title">Title: ${movieData.Title}</p>`));
  movieDiv.append($(`<p class="release"> Release: ${movieData.Year}</p>`))
  movieDiv.append($(`<img class="poster" src="${movieData.Poster}" alt="poster">`));
  movieDiv.append($(`<div><button class="more-info-btn" onclick ="getMoreInfo('${movieData.imdbID}')">More Info</button></div>`));
  return movieDiv;
}

function clearPageAndAddNewResults(resultContainer) {
  $('#movie-container').html("");
  $('#movie-container').append(resultContainer);
}


xhr.addEventListener("readystatechange", function() {
  if (this.readyState === this.DONE) {
  }
});
