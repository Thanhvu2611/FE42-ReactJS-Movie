import Axios from "axios";
import { DETAIL_LISTMOVIE_REQUEST, DETAIL_LISTMOVIE_SUCCESS, DETAIL_LISTMOVIE_FAILED, GET_KEYWORD_LISTMOVIE, EDIT_MOVIE, DELETE_MOVIE } from "./constans";

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
    Axios({
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((result) => {
        console.log(result.data)
        dispatch(actEditMovie(result.data));
      })
      .catch(err => {
        console.log(err);
      })
  }
};
const actEditMovie = (id) => {
  return {
    type: EDIT_MOVIE,
    data: id
  }
}


//DELETE

const actFetchDeleteMovie = (id) => {
  return dispatch => {
    Axios({
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${id}`,
      method: "DELETE"
    })
      .then((result) => {
        console.log(result.data)
        dispatch(actDeleteMovie(result.data));
      })
      .catch(err => {
        console.log(err);
      })
  }
};
const actDeleteMovie = (data) => {
  return {
    type: DELETE_MOVIE,
    data
  }
}


export { actFetchDetailListMovie, actGetKeyWordListMovie, actFetchEditMovie, actFetchDeleteMovie };