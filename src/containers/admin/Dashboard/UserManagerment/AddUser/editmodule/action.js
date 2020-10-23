import { EDIT_USER_SUCCESS, UPDATE_USER_SUCCESS } from "./constans";
import Axios from 'axios';

//GET USER DETAIL
export const actGetUsers = (id) => {
  return dispatch => {
    Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP05&tuKhoa=${id}`,
      method: "GET",
    })
      .then((result) => {
        dispatch(actEditUserSuccess(result.data));
        //console.log(actEditUserSuccess(result.data));
      })
      .catch(err => {
        console.log(err);
      })
  }
}

const actEditUserSuccess = (editUser) => {
  return {
    type: EDIT_USER_SUCCESS,
    editUser
  }
};

//UPDATE USER
export const fectUpdateUserRequest = (editUser) => {
  let token = "";
  if (localStorage.getItem("userAdmin")) {
    token = JSON.parse(localStorage.getItem("userAdmin")).accessToken;
  }
  return dispatch => {
    Axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
      method: "PUT",
      data: editUser,
      headers: {
        Authorization: `Bearer ${token}`,
      }

    })
      .then((result) => {

        dispatch(actUpdateUserSuccess(result.data));
      })
      .catch(err => {
        console.log(err);
      })
  }
}

const actUpdateUserSuccess = (editUser) => {
  return {
    type: UPDATE_USER_SUCCESS,
    editUser
  }


}
