import { EDIT_USER_SUCCESS, UPDATE_USER_SUCCESS } from "./constans";
let initialState = {
  editUser: null,

};

const editUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_USER_SUCCESS:
      state.editUser = action.editUser
      return { ...state };
    case UPDATE_USER_SUCCESS:
      state.user = action.editUser
      return { ...state };
    default:
      return { ...state };
  }
}

export default editUserReducer;