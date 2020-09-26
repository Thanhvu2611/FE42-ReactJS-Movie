import { EDIT_MOVIE_SUCCESS, UPDATE_MOVIE_SUCCESS } from "./constans";
import Axios from 'axios';

//GET MOVIE

export const actFetchEditMovie = (id) => {

  return dispatch => {

    Axios({
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
      method: "GET",
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

export const actUpdateMovieRequest = (form_data) => {
  // editmovie.maNhom = "GP01"
  // let imgUpload = "";
  // if (editmovie.hinhAnh) {
  //   imgUpload = editmovie.hinhAnh[0];
  // }

  // editmovie.hinhAnh = `http://movie0706.cybersoft.edu.vn/hinhanh/0_gp01.jpg`;

  let token = "";
  if (localStorage.getItem("userAdmin")) {
    token = JSON.parse(localStorage.getItem("userAdmin")).accessToken;
  }
  return dispatch => {
    Axios({
      //url: "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhim",
      url: "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhimUpload",
      method: "POST",
      data: form_data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((result) => {
        // debugger
        //console.log(result.data)
        dispatch(actUpdateMovie(result.data));
        // uploadImg(imgUpload, editmovie);
      })
      .catch(err => {
        console.log(err);
      })
  }
};

// const uploadImg = (imgUpload, editmovie) => {
//   if (imgUpload.name) {
//     let formData = new FormData();
//     formData.append("File", imgUpload, imgUpload.name);
//     formData.append("tenphim", editmovie.tenPhim);
//     formData.append("manhom", "GP01");
//     Axios({
//       method: "POST",
//       url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/UploadHinhAnhPhim`,
//       data: formData
//     })
//       .then(result => {
//         console.log(result.data);
//       })
//       .catch(err => {
//         console.log(err.reponse.data);
//       })
//   }
//   console.log(imgUpload);
// }

const actUpdateMovie = (form_data) => {
  return {
    type: UPDATE_MOVIE_SUCCESS,
    form_data

  }
}

