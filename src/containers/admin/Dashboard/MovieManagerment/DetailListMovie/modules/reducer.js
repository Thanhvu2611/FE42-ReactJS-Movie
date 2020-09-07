import { DETAIL_LISTMOVIE_REQUEST, DETAIL_LISTMOVIE_SUCCESS, DETAIL_LISTMOVIE_FAILED, GET_KEYWORD_LISTMOVIE, DELETE_MOVIE } from "./constans";
import { EDIT_MOVIE_REQUEST, EDIT_MOVIE_SUCCESS, EDIT_MOVIE_FAILED } from "./constans";



let initialState = {
  loading: false,
  listMovie: [],
  err: null,
  keyword: "",
  editMovie: {},
};

// let findIndex = (movieReducer, id) => {
//   let result = -1;
//   movieReducer.forEach((listMovie, index) => {
//     if (listMovie.id === id) {
//       result = index;
//     }
//   });
//   return result;
// }


const movieReducer = (state = initialState, action) => {
  // var index = -1;
  // var { id } = action;
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

    case DELETE_MOVIE:
      let index = state.listMovie.findIndex((item) => {
        return item.id === action.id;
      })
      if (index !== -1) {
        let listMovie = [...state.listMovie];
        listMovie.splice(index, 1);
        state.listMovie = listMovie;
      }
      // index = findIndex(state, id);
      // state.splice(index, 1);
      // state.listMovie = listMovie;
      return { ...state };

    case GET_KEYWORD_LISTMOVIE:
      state.keyword = action.keyword;
      return { ...state };

    case EDIT_MOVIE_REQUEST:
      state.loading = true;
      state.editMovie = {};
      state.err = null;

      return { ...state };
    case EDIT_MOVIE_SUCCESS:
      state.loading = false;
      state.editMovie = action.movie;
      state.err = null;

      return { ...state };
    case EDIT_MOVIE_FAILED:
      state.loading = false;
      state.editMovie = {};
      state.err = action.err;
      return { ...state };

    default:
      return { ...state };
  }
}
export default movieReducer;