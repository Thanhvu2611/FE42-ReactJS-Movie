import {
  ADD_DETAIL_LISTMOVIE_REQUEST,
  ADD_DETAIL_LISTMOVIE_SUCCESS,
  ADD_DETAIL_LISTMOVIE_FAILED,
} from "./constans";

let initialState = {
  loading: false,
  movie: {},
  err: null,
};

const addListMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DETAIL_LISTMOVIE_REQUEST:
      state.loading = true;
      state.movie = {};
      state.err = null;

      return { ...state };
    case ADD_DETAIL_LISTMOVIE_SUCCESS:
      state.loading = false;
      state.movie = action.data;
      state.err = null;

      return { ...state };
    case ADD_DETAIL_LISTMOVIE_FAILED:
      state.loading = false;
      state.movie = {};
      state.err = action.err;

      return { ...state };
    default:
      return { ...state };
  }
};
export default addListMovieReducer;
