import {
  FETCH_CINEMA,
  FETCH_CINEMA_GROUP,
  FETCH_MOVIE,
  FETCH_MOVIE_DETAIL,
} from "../constans/index";

let initialState = {
  movies: [],
  movieDetail: null,
  cinema: [],
  cinemaGroup: [],
  maHeThongRap: "BHDStar",
  lstMovie: [],
};

const MovieHookReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIE: {
      state.movies = action.payload;
      return { ...state };
    }
    case FETCH_MOVIE_DETAIL: {
      state.movieDetail = action.payload;
      return { ...state };
    }
    case FETCH_CINEMA: {
      state.cinema = action.payload;

      return { ...state };
    }
    case FETCH_CINEMA_GROUP: {
      state.cinemaGroup = action.payload;

      return { ...state };
    }
    case "CHANGE_ID": {
      state.maHeThongRap = action.payload;
      return { ...state };
    }
    case "LST_MOVIE": {
      state.lstMovie = action.payload;
      return { ...state };
    }
    default:
      return state;
  }
};

export default MovieHookReducer;
