import { ADD_USER } from "./constans";
import Axios from "axios";

const actAddUser = (user) => {
  let token = "";
  if (localStorage.getItem("userAdmin")) {
    token = JSON.parse(localStorage.getItem("userAdmin")).accessToken;
    //console.log(accesstoken);
  }
  return (dispatch) => {
    Axios({
      url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
      method: "POST",
      data: user,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((result) => {
        dispatch(actAddUserSuccess(result.data));
      })
      .catch(err => {
        console.log(err);
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