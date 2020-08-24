import { combineReducers } from "redux";
import nowMovieReducer from "../reducers/reducerNowMovie";
import soonMovieReducer from "../reducers/reducerSoonMovie";
import movieReducer from "./../../containers/admin/Dashboard/MovieManagerment/DetailListMovie/modules/reducer";


const rootReducer = combineReducers({
  //key: value
  nowMovieReducer,
  soonMovieReducer,
  movieReducer,

});

export { rootReducer };
