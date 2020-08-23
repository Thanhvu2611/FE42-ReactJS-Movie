import { FETCH_LIST_MOVIE } from "./constans";

let initialState = {
  listMovie: [],
  detailMovie: {},
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LIST_MOVIE:
      state.listMovie = action.data;

      return { ...state };

    default:
      return { ...state };
  }
}
export default movieReducer;