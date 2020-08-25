import { MOVIE_SCHEDULE_REQUEST, MOVIE_SCHEDULE_SUCCESS, MOVIE_SCHEDULE_FAILED } from "./constans";

let initialState = {
  loading: false,
  movieShedule: {},
  err: null
}

const movieSheduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIE_SCHEDULE_REQUEST:
      state.loading = true;
      state.movieShedule = {};
      state.err = null;

      return { ...state };
    case MOVIE_SCHEDULE_SUCCESS:
      state.loading = false;
      state.movieShedule = action.data;
      state.err = null;

      return { ...state };
    case MOVIE_SCHEDULE_FAILED:
      state.loading = false;
      state.movieShedule = {};
      state.err = action.err;

      return { ...state };

    default:
      return { ...state };
  }
};
export default movieSheduleReducer;