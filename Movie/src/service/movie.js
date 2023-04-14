import axios from 'axios';
const base_url = 'https://api.themoviedb.org/3';

export const fetchMovies = searchTerm => {
  const api_key = '0c52aac3608afd762839672bb53edaf2';
  if (!searchTerm) {
    const url = `${base_url}/movie/popular?api_key=${api_key}&language=en-US&page=1`;
    return axios.get(url);
  } else {
    const url = `${base_url}/search/movie?api_key=${api_key}&language=en-US&query=${searchTerm}`;
    return axios.get(url);
  }
};
