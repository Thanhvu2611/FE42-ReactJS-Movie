import Axios from "axios";

import {
  FETCH_TICKET_ROOM_REQUEST,
  FETCH_TICKET_ROOM_SUCCESS,
  FETCH_TICKET_ROOM_FAIL,
  PUSH_SEAT,
  CHANGE_COMBO_NUMBER,
  BOOK_TICKET_REQUEST,
  BOOK_TICKET_FAIL,
  BOOK_TICKET_SUCCESS,
} from "../../../redux/constans";

import {
  alertGeneralErrAPI,
  alertSuccessfulBooking,
} from "../../../assets/js/main";

export const actFetchTicketRoomAPI = (maLichChieu) => (dispatch) => {
  dispatch(actFetchTicketRoomRequest());
  Axios({
    method: "GET",
    url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
  })
    .then((res) => {
      dispatch(actFetchTicketRoomSuccess(res.data));
    })
    .catch((err) => {
      dispatch(actFetchTicketRoomFail(err));
      alertGeneralErrAPI(err);
    });
};

export const actFetchTicketRoomRequest = () => ({
  type: FETCH_TICKET_ROOM_REQUEST,
});

export const actFetchTicketRoomSuccess = (data) => ({
  type: FETCH_TICKET_ROOM_SUCCESS,
  data,
});

export const actFetchTicketRoomFail = (err) => ({
  type: FETCH_TICKET_ROOM_FAIL,
  err,
});

/*
 * ========== MUA VÉ ==========
 */
export const actBookTicketAPI = (data, token, history) => (dispatch) => {
  dispatch(actBookTicketRequest());
  Axios({
    method: "POST",
    url: "https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe",
    data: data,
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((res) => {
      dispatch(actBookTicketSuccess(res.data));
      alertSuccessfulBooking(res.data, () => {
        history.push("/");
      });
    })
    .catch((err) => {
      dispatch(actBookTicketFailure(err));
      alertGeneralErrAPI(err);
    });
};

export const actBookTicketRequest = () => ({
  type: BOOK_TICKET_REQUEST,
});

export const actBookTicketSuccess = (data) => ({
  type: BOOK_TICKET_SUCCESS,
  data,
});

export const actBookTicketFailure = (err) => ({
  type: BOOK_TICKET_FAIL,
  err,
});

export const actPushSeat = (data) => ({
  type: PUSH_SEAT,
  data,
});

export const actChangeComboNumber = (data, flag) => ({
  type: CHANGE_COMBO_NUMBER,
  data,
  flag,
});
