import { DETAIL_USER_REQUEST, DETAIL_USER_SUCCESS, DETAIL_USER_FAILED, } from "./constans";
import Axios from "axios";


//GET USER
const actFetchUser = () => {
  return dispatch => {
    dispatch(actUserRequest());
    Axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP05",
      method: "GET",
    })
      .then((result) => {
        dispatch(actUserSuccess(result.data));

      })
      .catch((err) => {
        console.log(err);
        dispatch(actUserFailed(err));
      })

  }
}

const actUserRequest = () => {
  return {
    type: DETAIL_USER_REQUEST,
  }
}
const actUserSuccess = (user) => {
  return {
    type: DETAIL_USER_SUCCESS,
    user
  }
}
const actUserFailed = (err) => {
  return {
    type: DETAIL_USER_FAILED,
    err
  }
}

//DELETE
const actFetchDeleteUser = (id) => {
  let token = "";
  if (localStorage.getItem("userAdmin")) {
    token = JSON.parse(localStorage.getItem("userAdmin")).accessToken;
  }
  return dispatch => {
    Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${id}`,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
      .then((result) => {
        dispatch(actFetchUser(result.data));
      })
      .catch(err => {
        console.log(err);
      })
  }
}


//SEARCH


export { actFetchUser, actFetchDeleteUser };