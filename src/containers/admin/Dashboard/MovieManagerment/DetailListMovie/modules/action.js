import Axios from "axios";
import { DETAIL_LISTMOVIE_REQUEST, DETAIL_LISTMOVIE_SUCCESS, DETAIL_LISTMOVIE_FAILED, GET_KEYWORD_LISTMOVIE, DELETE_MOVIE } from "./constans";

const actFetchDetailListMovie = () => {
  return dispatch => {
    dispatch(actDetailListMovieRequest());
    Axios({
      url: "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
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

//Key Word

const actGetKeyWordListMovie = (keyword) => {
  return {
    type: GET_KEYWORD_LISTMOVIE,
    keyword
  }
}




//DELETE

const actFetchDeleteMovie = (id) => {
  let token = "";
  if (localStorage.getItem("userAdmin")) {
    token = JSON.parse(localStorage.getItem("userAdmin")).accessToken;
  }
  // console.log(token);
  // console.log(id);
  return dispatch => {
    Axios({
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${id}`,
      method: "DELETE",
      data: null,
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
      .then((result) => {
        dispatch(actDeleteMovie(result.id));
      })
      .catch(err => {
        console.log(err);
      })
  }
};
const actDeleteMovie = (id) => {
  return {
    type: DELETE_MOVIE,
    id
  }
}


export { actFetchDetailListMovie, actGetKeyWordListMovie, actFetchDeleteMovie };