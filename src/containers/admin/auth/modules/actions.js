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
        if (result.data.maLoaiNguoiDung === "QuanTri") {

          localStorage.setItem("userAdmin", JSON.stringify(result.data));
          //Chuyển hướng qua trang Dashboard
          history.push("/admin/movie");
        } else {
          alert("Không có quyền truy cập!");
        }

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

export { actFetchLogin };

export const dangXuatAction = () => {
  return { type: FECTH_SIGN_OUT }
}