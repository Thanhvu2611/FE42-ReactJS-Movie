import { EDIT_USER_SUCCESS } from "./constans";
let initialState = {
  editUser: [],
};

const editUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_USER_SUCCESS:
      state.editUser = action.data
      return { ...state };

    default:
      return { ...state };
  }
}

export default editUserReducer;