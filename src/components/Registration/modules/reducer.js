import { SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from "./constant";

const initialState = {
  infoSignUp: null,
  signUpLoading: false,
  infoSignUpError: null,
};

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_REQUEST:
      state.infoSignUp = null;
      state.signUpLoading = true;
      state.infoSignUpError = null;
      return { ...state };

    case SIGN_UP_SUCCESS:
      // state.infoSignUp = action.data;
      state.signUpLoading = false;
      state.infoSignUpError = null;
      return { ...state };

    case SIGN_UP_FAILURE:
      state.infoSignUp = null;
      state.signUpLoading = false;
      state.infoSignUpError = action.err;
      return { ...state };

    default:
      return { ...state };
  }
};

export default signUpReducer;
