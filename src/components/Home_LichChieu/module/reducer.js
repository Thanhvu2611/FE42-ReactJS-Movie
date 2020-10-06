import {
  LAYTHONGTINLICH_REQUEST,
  LAYTHONGTINLICH_SUCCESS,
  LAYTHONGTINLICH_FAILED,
} from "./constans";

let initialState = {
  loading: false,
  Cinema: [],
  err: null,
};
const CinemaReducer = (state = initialState, action) => {
  switch (action.type) {
    case LAYTHONGTINLICH_REQUEST:
      state.loading = true;
      state.nowMovie = [];
      state.err = null;
      return { ...state };
    case LAYTHONGTINLICH_SUCCESS:
      state.loading = false;
      state.nowMovie = action.data;
      state.err = null;
      return { ...state };
    case LAYTHONGTINLICH_FAILED:
      state.loading = false;
      state.nowMovie = [];
      state.err = action.err;
      return { ...state };
    default:
      return { ...state };
  }
};
export default CinemaReducer;
