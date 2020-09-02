import {
  ADD_DETAIL_LISTMOVIE_REQUEST,
  ADD_DETAIL_LISTMOVIE_SUCCESS,
  ADD_DETAIL_LISTMOVIE_FAILED,
  USER_EDIT,
} from "./constans";
import Axios from "axios";

export const actAddMovie = (movie) => {
  // let accesstoken = "";
  // if (localStorage.getItem("userAdmin")) {
  //   accesstoken = JSON.parse(localStorage.getItem("userAdmin")).accessToken;
  //   console.log(accesstoken);
  // }
  return (dispatch) => {
    dispatch(actAddListMovieRequest());
    Axios({
      url: "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhim",
      method: "POST",
      data: movie,
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiZHBuZ3V5ZW4iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJRdWFuVHJpIiwibmJmIjoxNTk5MDI0OTM1LCJleHAiOjE1OTkwMjg1MzV9.oo48XdXxmDGLy5OT3pnSCHGF1L9H-eWWk50r_umRxuQ`,
      },
    })
      .then((result) => {
        dispatch(actAddListMovieSuccess(result.data));
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

const actAddListMovieSuccess = (data) => {
  return {
    type: ADD_DETAIL_LISTMOVIE_SUCCESS,
    data,
  };
};

const actAddListMovieFailed = (err) => {
  return {
    type: ADD_DETAIL_LISTMOVIE_FAILED,
    err,
  };
};

export const actEditListMovie = (movie) => {
  return (dispatch) => {
    // Axios({
    //   url: "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhim",
    //   method: "POST",
    //   data: listMovie,
    // })
    //   .then((result) => {
    //     dispatch(actEditListMovie(result.data));
    //   })
    //   .catch((err) => {
    //     dispatch(actEditListMovie(err.data));
    //   });
  };
};
