import { DETAIL_LISTMOVIE_REQUEST, DETAIL_LISTMOVIE_SUCCESS, DETAIL_LISTMOVIE_FAILED, GET_KEYWORD_LISTMOVIE, DELETE_MOVIE, } from "./constans";



let initialState = {
  loading: false,
  listMovie: [],
  err: null,
  keyword: "",
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
      state.listMovie = action.listMovie;
      state.err = null;

      return { ...state };
    case DETAIL_LISTMOVIE_FAILED:
      state.loading = false;
      state.listMovie = [];
      state.err = action.err;

      return { ...state };

    case DELETE_MOVIE:
      let index = state.listMovie.findIndex((item) => {
        return item.id === action.id;
      })
      if (index !== -1) {
        let listMovie = [...state.listMovie];
        listMovie.splice(index, 1);
        state.listMovie = [...listMovie];
      }
      console.log(state, "store");
      return { ...state };

    case GET_KEYWORD_LISTMOVIE:
      state.keyword = action.keyword;
      return { ...state };
    default:
      return { ...state };
  }
}
export default movieReducer;