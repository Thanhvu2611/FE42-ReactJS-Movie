import Axios from "axios";

import { SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from "./constant";
import { alertSuccessfulRegister } from "../../../assets/js/main";

export const actSignUpAPI = (user) => (dispatch) => {
  dispatch(actSignUpRequest());
  Axios({
    method: "POST",
    url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
    data: user,
  })
    .then((res) => {
      dispatch(actSignUpSuccess(res.data));
      alertSuccessfulRegister();
    })
    .catch((err) => {
      dispatch(actSignUpFailure(err));
    });
};

export const actSignUpRequest = () => ({
  type: SIGN_UP_REQUEST,
});

export const actSignUpSuccess = (data) => ({
  type: SIGN_UP_SUCCESS,
  data,
});

export const actSignUpFailure = (err) => ({
  type: SIGN_UP_FAILURE,
  err,
});
