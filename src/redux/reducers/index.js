import { combineReducers } from "redux";
import nowMovieReducer from "../reducers/reducerNowMovie";
import soonMovieReducer from "../reducers/reducerSoonMovie";

//admin
import movieReducer from "./../../containers/admin/Dashboard/MovieManagerment/DetailListMovie/modules/reducer";
import movieSheduleReducer from "../../containers/admin/Dashboard/DetailMovieItem/module/reducer";
import addListMovieReducer from "../../containers/admin/Dashboard/MovieManagerment/AddMovie/modules/reducer";
import authReducer from "../../containers/admin/auth/modules/reducer";

const rootReducers = combineReducers({
  //key: value
  nowMovieReducer,
  soonMovieReducer,
  movieReducer,
  movieSheduleReducer,
  addListMovieReducer,
  authReducer

});

export default rootReducers;
