import { combineReducers } from "redux";
import nowMovieReducer from "../reducers/reducerNowMovie";
import soonMovieReducer from "../reducers/reducerSoonMovie";

//admin
import movieReducer from "./../../containers/admin/Dashboard/MovieManagerment/DetailListMovie/modules/reducer";
import movieSheduleReducer from "../../containers/admin/Dashboard/DetailMovieItem/module/reducer";
import addListMovieReducer from "../../containers/admin/Dashboard/MovieManagerment/AddMovie/modules/reducer";
import authReducer from "../../containers/admin/auth/modules/reducer";
import EditMovieReducer from "../../containers/admin/Dashboard/MovieManagerment/AddMovie/editmodules/reducer";
//admin/user
import userReducer from "../../containers/admin/Dashboard/UserManagerment/listUser/module/reducer";
import addUserReducer from "../../containers/admin/Dashboard/UserManagerment/AddUser/module/reducer";
import editUserReducer from "../../containers/admin/Dashboard/UserManagerment/AddUser/editmodule/reducer";
import MovieHookReducer from "./MovieHookReducer";
const rootReducers = combineReducers({
  //key: value
  nowMovieReducer,
  soonMovieReducer,
  movieReducer,
  movieSheduleReducer,
  addListMovieReducer,
  authReducer,
  EditMovieReducer,
  userReducer,
  addUserReducer,
  editUserReducer,
  MovieHookReducer,
});

export default rootReducers;
