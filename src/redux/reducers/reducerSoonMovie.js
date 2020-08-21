import {
  MOVIE_SOON_REQUEST,
  MOVIE_SOON_SUCCESS,
  MOVIE_SOON_FAILED,
} from "../constans";

let initialState = {
  loading: false,
  soonMovie: {},
  err: null,
};
const soonMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIE_SOON_REQUEST:
      state.loading = true;
      state.soonMovie = {};
      state.err = null;
      return { ...state };
    case MOVIE_SOON_SUCCESS:
      state.loading = false;
      state.soonMovie = action.data.items;
      state.err = null;
      return { ...state };
    case MOVIE_SOON_FAILED:
      state.loading = false;
      state.soonMovie = {};
      state.err = action.err;
      return { ...state };
    default:
      return { ...state };
  }
};
export default soonMovieReducer;
