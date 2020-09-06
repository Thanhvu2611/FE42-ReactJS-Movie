import {
  ADD_DETAIL_LISTMOVIE_REQUEST,
  ADD_DETAIL_LISTMOVIE_SUCCESS,
  ADD_DETAIL_LISTMOVIE_FAILED, UPDATE_MOVIE
} from "./constans";
import Axios from "axios";

const actAddMovie = (movie, history) => {
  console.log(movie);

  let token = "";
  if (localStorage.getItem("userAdmin")) {
    token = JSON.parse(localStorage.getItem("userAdmin")).accessToken;
    //console.log(accesstoken);
  }
  return (dispatch) => {
    dispatch(actAddListMovieRequest());
    Axios({
      url: "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhim",
      method: "POST",
      data: movie,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((result) => {
        dispatch(actAddListMovieSuccess(result.data));
        history.push("/admin/movie");
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
    data
  };
};

const actAddListMovieFailed = (err) => {
  return {
    type: ADD_DETAIL_LISTMOVIE_FAILED,
    err,
  };
};

//EDIT MOVIE

const actUpdateMovieRequest = (movie) => {
  let token = "";
  if (localStorage.getItem("userAdmin")) {
    token = JSON.parse(localStorage.getItem("userAdmin")).accessToken;
  }
  return dispatch => {
    Axios({
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhim/${movie.id}`,
      method: "POST",
      data: movie,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((result) => {
        //console.log(result.data)
        dispatch(actUpdateMovie(result.data));
      })
      .catch(err => {
        console.log(err);
      })
  }
};

const actUpdateMovie = (movie) => {
  return {
    type: UPDATE_MOVIE,
    movie

  }
}

export { actAddMovie, actUpdateMovieRequest };
