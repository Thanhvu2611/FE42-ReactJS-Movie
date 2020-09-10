import { EDIT_USER_SUCCESS } from "./constans";
import Axios from 'axios';

//GET USER DETAIL
export const actGetUsers = (id) => {
  return dispatch => {
    Axios({
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01&tuKhoa=${id}`,
      method: "GET",
    })
      .then((result) => {
        dispatch(actEditUserSuccess(result.data));
        console.log(actEditUserSuccess(result.data));
      })
      .catch(err => {
        console.log(err);
      })
  }
}

const actEditUserSuccess = (user) => {
  return {
    type: EDIT_USER_SUCCESS,
    user
  }
};