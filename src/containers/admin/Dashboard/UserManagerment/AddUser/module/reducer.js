import { ADD_USER } from "./constans";
let initialState = {
  user: {},
}


const addUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      state.user = action.user;
      return { ...state };
    default:
      return { ...state };
  }
}
export default addUserReducer;