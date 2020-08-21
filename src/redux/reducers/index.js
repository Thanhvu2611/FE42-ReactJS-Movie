import { combineReducers } from "redux";
import nowMovieReducer from "../reducers/reducerNowMovie";
import soonMovieReducer from "../reducers/reducerSoonMovie";

const rootReducer = combineReducers({
  //key: value
  nowMovieReducer,
  soonMovieReducer,
});

export { rootReducer };
