import {
  MOVIE_NOW_REQUEST,
  MOVIE_NOW_SUCCESS,
  MOVIE_NOW_FAILED,
  MOVIE_SOON_REQUEST,
  MOVIE_SOON_SUCCESS,
  MOVIE_SOON_FAILED,
} from "./constans";
import Axios from "axios";

const actFetchMovieNow = () => {
  return (dispatch) => {
    dispatch(actMovieNowRequest());
    Axios({
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP05&soTrang=1&soPhanTuTrenTrang=6`,
      method: "GET",
    })
      .then((result) => {
        //console.log(result.data);
        dispatch(actMovieNowSuccess(result.data.items));
      })
      .catch((err) => {
        console.log(err);
        dispatch(actMovieNowFail(err));
      });
  };
};

const actMovieNowRequest = () => {
  return {
    type: MOVIE_NOW_REQUEST,
  };
};
const actMovieNowSuccess = (data) => {
  return {
    type: MOVIE_NOW_SUCCESS,
    data,
  };
};
const actMovieNowFail = (err) => {
  return {
    type: MOVIE_NOW_FAILED,
    err,
  };
};

const actFetchMovieSoon = () => {
  return (dispatch) => {
    dispatch(actMovieSoonRequest());
    Axios({
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP05&soTrang=2&soPhanTuTrenTrang=6`,
      method: "GET",
    })
      .then((result) => {
        //console.log(result.data);
        dispatch(actMovieSoonSuccess(result.data.items));
      })
      .catch((err) => {
        console.log(err);
        dispatch(actMovieSoonFail(err));
      });
  };
};

const actMovieSoonRequest = () => {
  return {
    type: MOVIE_SOON_REQUEST,
  };
};
const actMovieSoonSuccess = (data) => {
  return {
    type: MOVIE_SOON_SUCCESS,
    data,
  };
};
const actMovieSoonFail = (err) => {
  return {
    type: MOVIE_SOON_FAILED,
    err,
  };
};

export { actFetchMovieNow, actFetchMovieSoon };
