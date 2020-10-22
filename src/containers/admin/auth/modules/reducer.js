import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILED, FECTH_SIGN_OUT } from "./constants";

let initialState = {
  loading: false,
  user: {},
  err: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_REQUEST:
      state.loading = true;
      state.user = {};
      state.err = null;
      return { ...state };
    case AUTH_SUCCESS:
      state.loading = false;
      state.user = action.data;
      state.err = null;
      return { ...state };
    case AUTH_FAILED:
      state.loading = false;
      state.user = {};
      state.err = action.err;
      return { ...state };
    case FECTH_SIGN_OUT: {
      localStorage.removeItem("userLogin");
      state.user = "";
      window.location.reload();
      return { ...state };
    }

    default:
      return { ...state };
  }

}

export default authReducer;