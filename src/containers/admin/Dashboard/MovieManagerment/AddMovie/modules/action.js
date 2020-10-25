import {
  ADD_DETAIL_LISTMOVIE_REQUEST,
  ADD_DETAIL_LISTMOVIE_SUCCESS,
  ADD_DETAIL_LISTMOVIE_FAILED,
} from "./constans";
import Axios from "axios";
import swal from "sweetalert";

const actAddMovie = (form_data) => {
  // movie.maNhom = "GP05"
  // let imgUpload = "";
  // if (movie.hinhAnh) {
  //   imgUpload = movie.hinhAnh[0];
  // }

  // movie.hinhAnh = `https://movie0706.cybersoft.edu.vn/hinhanh/0_gp05.jpg`;
  let token = "";
  if (localStorage.getItem("userAdmin")) {
    token = JSON.parse(localStorage.getItem("userAdmin")).accessToken;
    //console.log(accesstoken);
  }
  return (dispatch) => {
    dispatch(actAddListMovieRequest());
    Axios({
      //url: 'http://movie0706.cybersoft.edu.vn/api/quanlyphim/ThemPhimUploadHinh',
      method: "POST",
      // data: movie,
      // url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhim",
      data: form_data,
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhimUploadHinh",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((result) => {
        swal({
          title: "Thêm Phim Thành công",
          icon: "success",
          button: "OK"
        })

        dispatch(actAddListMovieSuccess(result.data));
        //history.push("/admin/movie");
        //uploadImg(imgUpload, movie);
      })
      .catch((err) => {
        swal({
          title: "Thêm Phim Không Thành Công",
          icon: "warning",
          button: "OK"
        })
        dispatch(actAddListMovieFailed(err));
      });
  };
};

const actAddListMovieRequest = () => {
  return {
    type: ADD_DETAIL_LISTMOVIE_REQUEST,
  };
};

const actAddListMovieSuccess = (form_data) => {
  return {
    type: ADD_DETAIL_LISTMOVIE_SUCCESS,
    form_data
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
//     formData.append("tenphim", movie.tenPhim);
//     formData.append("manhom", "GP05");
//     Axios({
//       method: "POST",
//       url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/UploadHinhAnhPhim`,
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


export { actAddMovie };
