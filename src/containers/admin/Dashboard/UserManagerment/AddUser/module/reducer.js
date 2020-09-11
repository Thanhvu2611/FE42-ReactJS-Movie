import { ADD_USER } from "./constans";
import { UPDATE_USER_SUCCESS } from "./../editmodule/constans";
let initialState = {
  user: {}
}


const addUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      state.user = action.user;
      return { ...state };
    case UPDATE_USER_SUCCESS:
      state.user = action.user.id
      return { ...state };
    default:
      return { ...state };
  }
}
export default addUserReducer;