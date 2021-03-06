import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILED, FECTH_SIGN_OUT } from "./constants";
import Axios from "axios";

const actFetchLogin = (user, history) => {
  return dispatch => {
    dispatch(actLoginRequest());
    Axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data: user
    })
      .then(result => {
        dispatch(actLoginSuccess(result.data))
        //Lưu danh sách người dùng xuống trang, hệ thống trả về 2 mã loại người dùng
        //Xét mã loại người dùng quan trị hay user để phân loại quyền truy cập
        localStorage.setItem('accessToken', JSON.stringify(result.data.accessToken));

          localStorage.setItem('userSignIn', JSON.stringify(result.data.taiKhoan));
          //Chuyển hướng qua trang Dashboard
          history.push("/");
       

      })
      .catch(err => {
        dispatch(actLoginFailed(err));

      });
  };
};

const actLoginRequest = () => {
  return {
    type: AUTH_REQUEST
  };
};
const actLoginSuccess = (data) => {
  return {
    type: AUTH_SUCCESS,
    data
  };
};

const actLoginFailed = (err) => {
  return {
    type: AUTH_FAILED,
    err
  };
};



export const dangXuatAction = () => {
  return { type: FECTH_SIGN_OUT }
};
export { actFetchLogin };