import { DETAIL_LISTMOVIE_REQUEST, DETAIL_LISTMOVIE_SUCCESS, DETAIL_LISTMOVIE_FAILED, GET_KEYWORD_LISTMOVIE } from "./constans";
import { EDIT_MOVIE } from "./constans";


let initialState = {
  loading: false,
  listMovie: [],
  // detailMovie: {},
  err: null,
  keyword: "",
  editMovie: "",
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case DETAIL_LISTMOVIE_REQUEST:
      state.loading = true;
      state.listMovie = [];
      // state.detailMovie = {};
      state.err = null;

      return { ...state };
    case DETAIL_LISTMOVIE_SUCCESS:
      state.loading = false;
      state.listMovie = action.data;
      // state.detailMovie = action.data;
      state.err = null;

      return { ...state };
    case DETAIL_LISTMOVIE_FAILED:
      state.loading = false;
      state.listMovie = [];
      // state.detailMovie = {};
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