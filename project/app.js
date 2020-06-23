const addMovieBtn = document.getElementById("add-movie-btn");

const moviesList = [];
let addMovieHandler = () => {
  const movieName = document.getElementById("movie-name").value;
  const movieGenre = document.getElementById("genre").value;
  const movieReleaseYear = document.getElementById("release-year").value;
  const movieRating = document.getElementById("rating").value;
  moviesList.push({ Name: movieName, info: { genre: movieGenre, release: movieReleaseYear, rating: movieRating } });

  console.log(movieName, movieGenre, movieReleaseYear,movieRating, moviesList);
};

addMovieBtn.addEventListener("click", addMovieHandler);
