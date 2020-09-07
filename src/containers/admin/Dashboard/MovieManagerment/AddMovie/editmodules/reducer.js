import { EDIT_MOVIE_SUCCESS, UPDATE_MOVIE_SUCCESS } from "./constans";

let initialState = {
  movie: [],
  editMovie: {}
};

const EditMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_MOVIE_SUCCESS:
      state.editMovie = action.movie
      return { ...state };
    case UPDATE_MOVIE_SUCCESS:

      state.movie = action.data.id
      return { ...state };
    default:
      return { ...state };
  }
}

export default EditMovieReducer;