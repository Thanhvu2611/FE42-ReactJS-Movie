import {
  FETCH_TICKET_ROOM_REQUEST,
  FETCH_TICKET_ROOM_SUCCESS,
  FETCH_TICKET_ROOM_FAIL,
  PUSH_SEAT,
  CHANGE_COMBO_NUMBER,
  BOOK_TICKET_REQUEST,
  BOOK_TICKET_SUCCESS,
  BOOK_TICKET_FAIL,
} from "../constans";

import comboListData from "../../services/config/dataCombo.json";

const initialState = {
  ticketRoom: {},
  ticketRoomLoading: true,
  ticketRoomError: null,
  seatList: [],
  comboList: comboListData,
  bookingMessageSuccess: {},
  bookingLoading: false,
  bookingMessageError: null,
};

const BookingTicket = (state = initialState, action) => {
  switch (action.type) {
    /*
     * ========== FETCH TICKET ROOM ==========
     */
    case FETCH_TICKET_ROOM_REQUEST:
      state.ticketRoom = {};
      state.ticketRoomLoading = true;
      state.ticketRoomError = null;
      return { ...state };

    case FETCH_TICKET_ROOM_SUCCESS:
      state.ticketRoom = action.data;
      state.ticketRoomLoading = false;
      state.ticketRoomError = null;
      state.seatList = [];
      state.comboList = comboListData;
      return { ...state };

    case FETCH_TICKET_ROOM_FAIL:
      state.ticketRoom = {};
      state.ticketRoomLoading = false;
      state.ticketRoomError = action.err;
      return { ...state };

    /*
     * ========== BOOK TICKET ==========
     */
    case PUSH_SEAT:
      if (action.data.isBooking) {
        state.seatList = [...state.seatList, action.data.seatItem];
      } else {
        state.seatList = state.seatList.filter(
          (item) => item.maGhe !== action.data.seatItem.maGhe
        );
      }
      return { ...state };

    case CHANGE_COMBO_NUMBER:
      let index = state.comboList.findIndex(
        (item) => item.comboID === action.data.comboID
      );
      let comboItem = { ...state.comboList[index] };

      if (action.flag === -1) {
        if (comboItem.number > 0) {
          comboItem.number += action.flag;
        }
      } else {
        comboItem.number += action.flag;
      }

      let comboList = [...state.comboList];
      comboList[index] = comboItem;
      state.comboList = comboList;
      return { ...state };

    case BOOK_TICKET_REQUEST:
      state.bookingMessageSuccess = {};
      state.bookingLoading = true;
      state.bookingMessageError = null;
      return { ...state };

    case BOOK_TICKET_SUCCESS:
      state.bookingMessageSuccess = action.data;
      state.bookingLoading = false;
      state.bookingMessageError = null;
      return { ...state };

    case BOOK_TICKET_FAIL:
      state.bookingMessageSuccess = {};
      state.bookingLoading = false;
      state.bookingMessageError = action.err;
      return { ...state };

    default:
      return { ...state };
  }
};

export default BookingTicket;
