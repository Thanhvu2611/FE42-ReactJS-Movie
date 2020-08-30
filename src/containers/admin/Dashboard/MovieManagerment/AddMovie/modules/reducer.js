import { ADD_DETAIL_LISTMOVIE_REQUEST, ADD_DETAIL_LISTMOVIE_SUCCESSADD_DETAIL_LISTMOVIE_FAILED, ADD_DETAIL_LISTMOVIE_SUCCESS, ADD_DETAIL_LISTMOVIE_FAILED } from "./constans";
let initialState = {
  loading: false,
  listMovie: [],
  err: null
}

const addListMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DETAIL_LISTMOVIE_REQUEST:
      state.loading = true;
      state.listMovie = [];
      state.err = null;

      return { ...state };
    case ADD_DETAIL_LISTMOVIE_SUCCESS:
      state.loading = false;
      state.listMovie = action.data;
      state.err = null;

      return { ...state };
    case ADD_DETAIL_LISTMOVIE_FAILED:
      state.loading = false;
      state.listMovie = [];
      state.err = action.err;

      return { ...state };

    default:
      return { ...state };
  }
}
export default addListMovieReducer;