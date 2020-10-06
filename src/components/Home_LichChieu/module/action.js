import {
  LAYTHONGTINLICH_REQUEST,
  LAYTHONGTINLICH_SUCCESS,
  LAYTHONGTINLICH_FAILED,
} from "./constans";
import Axios from "axios";

const actFetchCinema = () => {
  return (dispatch) => {
    dispatch(actCinemaRequest());
    Axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap",
      method: "GET",
    })
      .then((result) => {
        //console.log(result.data);
        dispatch(actCinemaSuccess(result.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(actCinemaFail(err));
      });
  };
};
const actCinemaRequest = () => {
  return {
    type: LAYTHONGTINLICH_REQUEST,
  };
};
const actCinemaSuccess = (data) => {
  return {
    type: LAYTHONGTINLICH_SUCCESS,
    data,
  };
};
const actCinemaFail = (err) => {
  return {
    type: LAYTHONGTINLICH_FAILED,
    err,
  };
};

export { actFetchCinema };
