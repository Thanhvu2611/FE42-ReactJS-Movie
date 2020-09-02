import Axios from "axios";
import { DETAIL_LISTMOVIE_REQUEST, DETAIL_LISTMOVIE_SUCCESS, DETAIL_LISTMOVIE_FAILED, GET_KEYWORD_LISTMOVIE, EDIT_MOVIE } from "./constans";

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

const actGetKeyWordListMovie = (keyword) => {
  return {
    type: GET_KEYWORD_LISTMOVIE,
    keyword
  }
}




export { actFetchDetailListMovie, actGetKeyWordListMovie };