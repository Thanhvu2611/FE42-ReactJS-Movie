import { DETAIL_USER_REQUEST, DETAIL_USER_SUCCESS, DETAIL_USER_FAILED, DELETE_USER } from "./constans";

let initialState = {
  loading: false,
  user: [],
  err: null,
  keyword: "",
  searchUser: [],
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
    case DELETE_USER:
      state.user = action.user;
      return { ...state };
    default:
      return { ...state };
  }
}

export default userReducer;