import {
  ADD_DETAIL_LISTMOVIE_REQUEST,
  ADD_DETAIL_LISTMOVIE_SUCCESS,
  ADD_DETAIL_LISTMOVIE_FAILED, UPDATE_MOVIE
} from "./constans";

let initialState = {
  loading: false,
  movie: {},
  err: null,
};

let findIndex = (addListMovieReducer, id) => {
  let result = -1;
  addListMovieReducer.forEach((movie, index) => {
    if (movie.id === id) {
      result = index;
    }
  });
  return result;
}

const addListMovieReducer = (state = initialState, action) => {
  var index = -1;
  var { movie } = action;

  switch (action.type) {
    case ADD_DETAIL_LISTMOVIE_REQUEST:
      state.loading = true;
      state.movie = {};
      state.err = null;

      return { ...state };
    case ADD_DETAIL_LISTMOVIE_SUCCESS:

      state.loading = false;
      state.movie = action.movie;
      state.err = null;

      return { ...state };
    case ADD_DETAIL_LISTMOVIE_FAILED:
      state.loading = false;
      state.movie = {};
      state.err = action.err;

      return { ...state };
    case UPDATE_MOVIE:
      index = findIndex(state, movie.id);
      state[index] = movie;
      return { ...state };
    // case UPLOAD_IMG:
    //   state.movie = action.formData
    //   return { ...state };
    default:
      return { ...state };
  }
};
export default addListMovieReducer;
