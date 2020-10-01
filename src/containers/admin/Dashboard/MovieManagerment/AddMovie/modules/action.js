import {
  ADD_DETAIL_LISTMOVIE_REQUEST,
  ADD_DETAIL_LISTMOVIE_SUCCESS,
  ADD_DETAIL_LISTMOVIE_FAILED,
} from "./constans";
import Axios from "axios";

const actAddMovie = (movie) => {
  movie.maNhom = "GP05"
  let imgUpload = "";
  if (movie.hinhAnh) {
    imgUpload = movie.hinhAnh[0];
  }

  movie.hinhAnh = `https://movie0706.cybersoft.edu.vn/hinhanh/0_gp01.jpg`;
  let token = "";
  if (localStorage.getItem("userAdmin")) {
    token = JSON.parse(localStorage.getItem("userAdmin")).accessToken;
    //console.log(accesstoken);
  }
  return (dispatch) => {
    dispatch(actAddListMovieRequest());
    Axios({
      //url: 'http://movie0706.cybersoft.edu.vn/api/quanlyphim/ThemPhimUploadHinh',
      method: 'POST',
      data: movie,
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhim",
      data: movie,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((result) => {
        dispatch(actAddListMovieSuccess(result.data));
        //history.push("/admin/movie");
        uploadImg(imgUpload, movie);
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

const actAddListMovieSuccess = (movie) => {
  return {
    type: ADD_DETAIL_LISTMOVIE_SUCCESS,
    movie
  };
};

const actAddListMovieFailed = (err) => {
  return {
    type: ADD_DETAIL_LISTMOVIE_FAILED,
    err,
  };
};

const uploadImg = (imgUpload, movie) => {
  if (imgUpload.name) {
    let formData = new FormData();
    formData.append("File", imgUpload, imgUpload.name);
    formData.append("tenphim", movie.tenPhim);
    formData.append("manhom", "GP05");
    Axios({
      method: "POST",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/UploadHinhAnhPhim`,
      data: formData
    })
      .then(result => {
        console.log(result.data);
      })
      .catch(err => {
        console.log(err.reponse.data);
      })
  }
  console.log(imgUpload);
}


export { actAddMovie };
