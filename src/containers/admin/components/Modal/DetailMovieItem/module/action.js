import { MOVIE_SCHEDULE_REQUEST, MOVIE_SCHEDULE_SUCCESS, MOVIE_SCHEDULE_FAILED } from "./constans";
import Axios from "axios";
import { DETAIL_LISTMOVIE_FAILED } from "../../../../Dashboard/MovieManagerment/DetailListMovie/modules/constans";

const actFetchMovieSchedule = (id) => {
  return dispatch => {
    dispatch(actMovieScheduleRequest());
    Axios({
      url: "http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=1329",
      method: 'GET'
    })
      .then((result => {
        // console.log(result.data);
        dispatch(actMovieScheduleSuccess(result.data))
      }))
      .catch(err => {
        // console.log(err);
        dispatch(actMovieScheduleFailed(err));
      })

  }
}
const actMovieScheduleRequest = () => {
  return {
    type: MOVIE_SCHEDULE_REQUEST
  };
};
const actMovieScheduleSuccess = (data) => {
  return {
    type: MOVIE_SCHEDULE_SUCCESS,
    data
  };
};

const actMovieScheduleFailed = (err) => {
  return {
    type: DETAIL_LISTMOVIE_FAILED,
    err
  };
};

export { actFetchMovieSchedule };