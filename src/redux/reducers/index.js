import { combineReducers } from "redux";
import nowMovieReducer from "../reducers/reducerNowMovie";
import soonMovieReducer from "../reducers/reducerSoonMovie";

//admin
import movieReducer from "./../../containers/admin/Dashboard/MovieManagerment/DetailListMovie/modules/reducer";
import movieSheduleReducer from "../../containers/admin/components/Modal/DetailMovieItem/module/reducer";



const rootReducer = combineReducers({
  //key: value
  nowMovieReducer,
  soonMovieReducer,
  movieReducer,
  movieSheduleReducer,

});

export { rootReducer };
