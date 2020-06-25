import { SEARCH_MOVIE, FETCH_MOVIES, FILTER_MOVIES, LOADING } from './types';
import axios from 'axios';

/* All Actions*/

export const searchMovie = text => dispatch => {
  dispatch({
    type: SEARCH_MOVIE,
    payload: text
  });
};

export const fetchMovies = () => {
 return (dispatch) => {
  axios
    .get('response.json')
    .then(response =>
      dispatch({
        type: FETCH_MOVIES,
        payload: response.data
      }
      )
    )
    .catch(err => console.log(err));
 }
};

export const filterMovies = text => dispatch => {
  axios
   .get('response.json', text)
    .then(response =>
      dispatch({
        type: FILTER_MOVIES,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};

export const setLoading = () => {
  return {
    type: LOADING
  };
};
