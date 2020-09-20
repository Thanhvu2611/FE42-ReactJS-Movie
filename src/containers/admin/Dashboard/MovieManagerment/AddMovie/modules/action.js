import {
  ADD_DETAIL_LISTMOVIE_REQUEST,
  ADD_DETAIL_LISTMOVIE_SUCCESS,
  ADD_DETAIL_LISTMOVIE_FAILED
} from "./constans";
import Axios from "axios";

const actAddMovie = (form_data) => {
  console.log(form_data);

  let token = "";
  if (localStorage.getItem("userAdmin")) {
    token = JSON.parse(localStorage.getItem("userAdmin")).accessToken;
    //console.log(accesstoken);
  }
  return (dispatch) => {
    dispatch(actAddListMovieRequest());
    Axios({
      url: "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhimUploadHinh",
      method: "POST",
      data: form_data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((result) => {
        dispatch(actAddListMovieSuccess(result.data));
        //history.push("/admin/movie");
      })
      .catch((err) => {
        dispatch(actAddListMovieFailed(err));
      });
  };
};

const actAddListMovieRequest = () => {
  return {
    type: ADD_DETAIL_LISTMOVIE_REQUEST,
  };
};

const actAddListMovieSuccess = (form_data) => {
  return {
    type: ADD_DETAIL_LISTMOVIE_SUCCESS,
    form_data
  };
};

const actAddListMovieFailed = (err) => {
  return {
    type: ADD_DETAIL_LISTMOVIE_FAILED,
    err,
  };
};

export { actAddMovie };
