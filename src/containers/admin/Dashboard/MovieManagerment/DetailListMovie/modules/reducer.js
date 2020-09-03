import { DETAIL_LISTMOVIE_REQUEST, DETAIL_LISTMOVIE_SUCCESS, DETAIL_LISTMOVIE_FAILED, GET_KEYWORD_LISTMOVIE, EDIT_MOVIE } from "./constans";



let initialState = {
  loading: false,
  listMovie: [],
  err: null,
  keyword: "",
  editMovie: null,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case DETAIL_LISTMOVIE_REQUEST:
      state.loading = true;
      state.listMovie = [];
      state.err = null;

      return { ...state };
    case DETAIL_LISTMOVIE_SUCCESS:
      state.loading = false;
      state.listMovie = action.data;
      state.err = null;

      return { ...state };
    case DETAIL_LISTMOVIE_FAILED:
      state.loading = false;
      state.listMovie = [];
      state.err = action.err;

      return { ...state };
    case GET_KEYWORD_LISTMOVIE:
      state.keyword = action.keyword;
      return { ...state };
    case EDIT_MOVIE:
      state.editMovie = action.movie;
      return { ...state };
    default:
      return { ...state };
  }
}
export default movieReducer;