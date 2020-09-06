import Axios from "axios";
import { DETAIL_LISTMOVIE_REQUEST, DETAIL_LISTMOVIE_SUCCESS, DETAIL_LISTMOVIE_FAILED, GET_KEYWORD_LISTMOVIE, DELETE_MOVIE } from "./constans";
import { EDIT_MOVIE_REQUEST, EDIT_MOVIE_SUCCESS, EDIT_MOVIE_FAILED } from "./constans";

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
    data: listMovie
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


//Edit

const actFetchEditMovie = (id) => {
  let token = "";
  if (localStorage.getItem("userAdmin")) {
    token = JSON.parse(localStorage.getItem("userAdmin")).accessToken;
    //console.log(accesstoken);
  }
  return dispatch => {
    dispatch(actEditMovieRequest());
    Axios({
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((result) => {
        //console.log(result.data)
        dispatch(actEditMovieSuccess(result.data));
      })
      .catch(err => {
        dispatch(actEditMovieFailed(err));
      })
  }
};
const actEditMovieRequest = () => {
  return {
    type: EDIT_MOVIE_REQUEST,
  }
};

const actEditMovieSuccess = (id) => {
  return {
    type: EDIT_MOVIE_SUCCESS,
    data: id
  }
};

const actEditMovieFailed = (err) => {
  return {
    type: EDIT_MOVIE_FAILED,
    err
  }
};


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


export { actFetchDetailListMovie, actGetKeyWordListMovie, actFetchEditMovie, actFetchDeleteMovie };