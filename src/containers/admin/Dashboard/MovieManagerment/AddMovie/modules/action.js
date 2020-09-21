import {
  ADD_DETAIL_LISTMOVIE_REQUEST,
  ADD_DETAIL_LISTMOVIE_SUCCESS,
  ADD_DETAIL_LISTMOVIE_FAILED, UPLOAD_IMG
} from "./constans";
import Axios from "axios";

const actAddMovie = (movie) => {
  //console.log(form_data);

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
        //history.push("/admin/movie");
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

// const uploadImg = (imgUpload, movie) => {
//   if (imgUpload.name) {
//     let formData = new FormData();
//     formData.append("File", imgUpload, imgUpload.name);
//     formData.append("tenPhim", movie.tenPhim);
//     formData.append("maNhom", "GP01");
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
// }

const uploadSuccess = (formData) => {
  return {
    type: UPLOAD_IMG,
    formData
  }
}

export { actAddMovie, };
