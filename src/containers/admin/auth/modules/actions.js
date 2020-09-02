import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILED } from "./constants";
import Axios from "axios";

const actFecthLogin = (user, history) => {
  return dispatch => {
    dispatch(actLoginRequest());
    Axios({
      url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data: user
    })
      .then(result => {
        dispatch(actLoginSuccess(result.data))
        if (result.data.maLoaiNguoiDung === "QuanTri") {
          localStorage.setItem("userAdmin", JSON.stringify(result.data));
          history.push("/dashboard/movie")
        } else {
          alert("Không có quyền truy cập");
        }
      })
      .catch(err => {
        dispatch(actLoginFailed(err));
      }
      );
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

export { actFecthLogin };
