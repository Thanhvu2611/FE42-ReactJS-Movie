import { DETAIL_USER_REQUEST, DETAIL_USER_SUCCESS, DETAIL_USER_FAILED, GET_KEYWORD_USER } from "./constans";

let initialState = {
  loading: false,
  user: [],
  err: null,
  keyword: "",
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case DETAIL_USER_REQUEST:
      state.loading = true;
      state.user = [];
      state.err = null;

      return { ...state };
    case DETAIL_USER_SUCCESS:
      state.loading = false;
      state.user = action.user;
      state.err = null;

      return { ...state };
    case DETAIL_USER_FAILED:
      state.loading = false;
      state.user = [];
      state.err = action.err;

      return { ...state };
    case GET_KEYWORD_USER:
      state.keyword = action.user;
      return { ...state };
    default:
      return { ...state };
  }
}

export default userReducer;