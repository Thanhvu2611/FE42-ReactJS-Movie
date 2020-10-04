import {
  MOVIE_NOW_REQUEST,
  MOVIE_NOW_SUCCESS,
  MOVIE_NOW_FAILED,
} from "../constans";

let initialState = {
  loading: false,
  nowMovie: [],
  err: null,
};
const nowMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIE_NOW_REQUEST:
      state.loading = true;
      state.nowMovie = [];
      state.err = null;
      return { ...state };
    case MOVIE_NOW_SUCCESS:
      state.loading = false;
      state.nowMovie = action.data;
      state.err = null;
      return { ...state };
    case MOVIE_NOW_FAILED:
      state.loading = false;
      state.nowMovie = [];
      state.err = action.err;
      return { ...state };
    default:
      return { ...state };
  }
};
export default nowMovieReducer;
