import { EDIT_MOVIE_SUCCESS, UPDATE_MOVIE_SUCCESS } from "./constans";
import Axios from 'axios';

//GET MOVIE

export const actFetchEditMovie = (id) => {
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
        //console.log(result.data)
        dispatch(actEditMovieSuccess(result.data));
      })
      .catch(err => {
        console.log((err));
      })
  }
};


const actEditMovieSuccess = (movie) => {
  return {
    type: EDIT_MOVIE_SUCCESS,
    movie
  }
};

//UPDATE MOVIE

export const actUpdateMovieRequest = (id, movie) => {
  let token = "";
  if (localStorage.getItem("userAdmin")) {
    token = JSON.parse(localStorage.getItem("userAdmin")).accessToken;
  }
  return dispatch => {
    Axios({
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhim/${id}`,
      method: "POST",
      data: movie,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((result) => {
        //console.log(result.data)
        dispatch(actUpdateMovie(result.data.id));
      })
      .catch(err => {
        console.log(err);
      })
  }
};

const actUpdateMovie = (movie) => {
  return {
    type: UPDATE_MOVIE_SUCCESS,
    movie

  }
}

