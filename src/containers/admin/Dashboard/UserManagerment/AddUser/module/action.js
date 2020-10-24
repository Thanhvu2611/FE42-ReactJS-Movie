import { ADD_USER } from "./constans";
import Axios from "axios";
import swal from "sweetalert";

const actAddUser = (user) => {
  let token = "";
  if (localStorage.getItem("userAdmin")) {
    token = JSON.parse(localStorage.getItem("userAdmin")).accessToken;
    //console.log(accesstoken);
  }
  return (dispatch) => {
    Axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
      method: "POST",
      data: user,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((result) => {
        swal({
          title: "Tạo Tài Khoản Thành Công",
          icon: "success",
          button: "OK",
        })
        dispatch(actAddUserSuccess(result.data));
      })
      .catch(err => {
        swal({
          title: "Điền lại thông tin",
          icon: "warning",
          button: "OK",
        })
      })
  }
}

const actAddUserSuccess = (user) => {
  return {
    type: ADD_USER,
    user
  }
}

export { actAddUser }