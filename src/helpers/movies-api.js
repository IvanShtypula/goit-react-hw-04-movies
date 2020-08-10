const baseURL = `https://api.themoviedb.org/3`;
const fetchTrending = (timeWindow) => {
  return fetch(
    `${baseURL}/trending/movie/${timeWindow}?api_key=${process.env.REACT_APP_KEY}`
  ).then((res) => res.json());
};

const fetchSingleMovie = (movieId) => {
  return fetch(
    `${baseURL}/movie/${movieId}?api_key=${process.env.REACT_APP_KEY}`
  ).then((res) => res.json());
};

const fetchMovies = (searchQuery) => {
  return fetch(
    `${baseURL}/search/movie?api_key=${process.env.REACT_APP_KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`
  ).then((res) => res.json());
};

const fetchCast = (movieId) => {
  return fetch(
    `${baseURL}/movie/${movieId}/credits?api_key=${process.env.REACT_APP_KEY}`
  ).then((res) => res.json());
};

const fetchReviews = (movieId) => {
  return fetch(
    `${baseURL}/movie/${movieId}/reviews?api_key=${process.env.REACT_APP_KEY}`
  ).then((res) => res.json());
};

export default { fetchTrending, fetchSingleMovie, fetchMovies, fetchCast, fetchReviews };
