import Axios from "axios";
import { DETAIL_LISTMOVIE_REQUEST, DETAIL_LISTMOVIE_SUCCESS, DETAIL_LISTMOVIE_FAILED, DELETE_MOVIE } from "./constans";

const actFetchDetailListMovie = () => {
  return dispatch => {
    dispatch(actDetailListMovieRequest());
    Axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP05",
      method: "GET"
    })
      .then((result => {
        // console.log(result.data);
        dispatch(actDetailListMovieSuccess(result.data));
      }))
      .catch(err => {
        dispatch(actDetailListMovieFailed(err));
      });
  };
};

const actDetailListMovieRequest = () => {
  return {
    type: DETAIL_LISTMOVIE_REQUEST,
  }
};

const actDetailListMovieSuccess = (listMovie) => {
  return {
    type: DETAIL_LISTMOVIE_SUCCESS,
    listMovie
  }
};

const actDetailListMovieFailed = (err) => {
  return {
    type: DETAIL_LISTMOVIE_FAILED,
    err
  }
};
//DELETE
const actFetchDeleteMovie = (id) => {
  let token = "";
  if (localStorage.getItem("userAdmin")) {
    token = JSON.parse(localStorage.getItem("userAdmin")).accessToken;
  }
  return dispatch => {
    Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${id}`,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
      .then((result) => {
        dispatch(actFetchDetailListMovie(result.data));
      })
      .catch(err => {
        console.log(err);
      })
  }
}


export { actFetchDetailListMovie, actFetchDeleteMovie };