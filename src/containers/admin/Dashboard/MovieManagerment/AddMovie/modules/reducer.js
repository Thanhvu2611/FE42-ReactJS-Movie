import {
  ADD_DETAIL_LISTMOVIE_REQUEST,
  ADD_DETAIL_LISTMOVIE_SUCCESS,
  ADD_DETAIL_LISTMOVIE_FAILED, EDIT_MOVIE
} from "./constans";

let initialState = {
  loading: false,
  movie: [],
  err: null,
  editMovie: [],
};

const addListMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DETAIL_LISTMOVIE_REQUEST:
      state.loading = true;
      state.movie = [];
      state.err = null;

      return { ...state };
    case ADD_DETAIL_LISTMOVIE_SUCCESS:
      state.loading = false;
      state.movie = action.data;
      state.err = null;

      return { ...state };
    case ADD_DETAIL_LISTMOVIE_FAILED:
      state.loading = false;
      state.movie = [];
      state.err = action.err;

      return { ...state };
    //EDIT MOVIE
    case EDIT_MOVIE:
      state.editMovie = action.movie;
      return { ...state };
    default:
      return { ...state };
  }
};
export default addListMovieReducer;
