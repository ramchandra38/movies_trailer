import {
  SEARCH_MOVIE,
  FETCH_MOVIES,
  FILTER_MOVIES,
  LOADING
} from '../actions/types';

const initialState = {
  text: '',
  movies: [],
  loading: false,
  languageDropdown:[],
  movie: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_MOVIE:
      return {
        ...state,
        text: action.payload,
        loading: false
      };
    case FETCH_MOVIES:
        const movies = Object.keys(action.payload[1]).map(function(k) { return action.payload[1][k] });
        const languageDropdown =action.payload[0];
      return {
        ...state,
        movies: movies,
        languageDropdown:languageDropdown,
        loading: false
      };

      case  FILTER_MOVIES:
        const movieFilters = Object.keys(action.payload[1]).map(function(k) { return action.payload[1][k] });
       let searchMovieTrailer = movieFilters.filter(movie => movie.EventName == state.text);
      return {
        ...state,
        movies: searchMovieTrailer,
        loading: false
      };
    case LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
}
