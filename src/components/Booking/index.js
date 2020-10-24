import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./_booking.scss";
import { actFetchTicketRoomAPI, actBookTicketAPI } from "./action";

import {
  countdownTimer,
  toggleComboDetails,
  BookingTimer,
  alertFailedBooking,
} from "../../assets/js/main";

import BookingSeat from "./Seat";
import BookingComboList from "./Combo/List";
import Loading1  from "../Loading/index";

function Booking({
  fetchData,
  match,
  ticketRoomLoading,
  ticketRoom,
  seatList,
  comboList,
  bookTicket,
  bookingLoading,
  history,
}) {
  const [state, setState] = useState({
    maLichChieu: 0,
    danhSachVe: [
      {
        maGhe: 0,
        giaVe: 0,
      },
    ],
    taiKhoanNguoiDung: "",
  });

  let userInfo = JSON.parse(localStorage.getItem("userSignIn"));

  let { thongTinPhim, danhSachGhe } = ticketRoom;
  if (!thongTinPhim) {
    thongTinPhim = {};
    thongTinPhim.tenCumRap = "";
    thongTinPhim.ngayChieu = "";
  }

  useEffect(() => {
    let showtimesID = match.params.id;
    fetchData(showtimesID);
    document.title = "Đặt vé";
  }, []); // eslint-disable-line

  useEffect(() => {
    if (Object.entries(ticketRoom).length > 0) {
      /*
       * countdownTimer chỉ được chạy sau khi có được dữ liệu ticketRoom
       * để render ra thẻ vì nếu không thì không có thẻ dẫn tới việc DOM
       * sẽ gây ra null, dùng null ở các lệnh tiếp theo sẽ gây ra lỗi
       * (lần đầu khi useEffect chạy, ticketRoom đang [])
       * --> Kết hợp điều kiện if với useEffect tham số để kiểm soát và chạy lại hàm khi tham số  thay đổi
       */
      countdownTimer(400, () => {
        alertFailedBooking(() => {
          fetchData(match.params.id);
        });
      });

      return () => {
        window.clearTimeout(BookingTimer);
      };
    }
  }, [ticketRoom]); /* eslint-disable-line */

  useEffect(() => {
    if (Object.entries(ticketRoom).length > 0) {
      setState({ ...createBookingInfo() });
    }
  }, [seatList]); // eslint-disable-line

  const renderSeat = () => {
    if (danhSachGhe && danhSachGhe.length > 0) {
      return danhSachGhe
        .slice(0, 50)
        .map((seatItem, index) => (
          <BookingSeat key={index} seatItem={seatItem} />
        ));
    }
  };

  const renderBookingSeatList = () => {
    if (seatList && seatList.length > 0) {
      return seatList.map((item, index) => (
        <span key={index}>{item.tenGhe} </span>
      ));
    }
  };

  const calcSeatPrice = () => {
    if (seatList && seatList.length > 0) {
      return seatList.reduce((total, item) => {
        total += item.giaVe;
        return total;
      }, 0);
    }

    return 0;
  };

  const calcComboPrice = () => {
    if (comboList && comboList.length > 0) {
      return comboList.reduce((total, item) => {
        total += item.price * item.number;
        return total;
      }, 0);
    }

    return 0;
  };

  const createBookingInfo = () => {
    let seatListServer = [];
    if (seatList && seatList.length > 0) {
      seatList.forEach((item) => {
        let seatObjServer = {
          maGhe: item.maGhe,
          giaVe: item.giaVe,
        };
        seatListServer.push(seatObjServer);
      });
    }

    let bookingInfo = {
      maLichChieu: ticketRoom.thongTinPhim.maLichChieu,
      danhSachVe: seatListServer,
      taiKhoanNguoiDung: userInfo.taiKhoan,
    };

    return bookingInfo;
  };

  const handleBookTicket = () => {
    bookTicket(state, userInfo.accessToken, history);
  };

  // if (ticketRoomLoading) {
  //   return (
  //     <div className="loading-wrap screen-center">
  //       <Loading1 />
  //     </div>
  //   );
  // }

  return (
    <>
      <div className="loading-wrap screen-center close">
        {/* <Loading1 /> */}
      </div>
      <section className="booking">
        <div className="row ml-0 mr-0">
          <div className="booking__left col-9">
            <div className="container-fluid">
              <div className="booking__left-header row align-items-center">
                <div className="cinema col">
                  <div className="row align-items-center cinema__wrap">
                    <div className="cinema__img col-2 pr-0">
                      <img
                        src={`/img/logo/${thongTinPhim.tenCumRap
                          .split("-")[0]
                          .replace(/\s/g, "")}.png`}
                        alt="img"
                      />
                    </div>
                    <div className="cinema__text col">
                      <h6>
                        <span>{thongTinPhim.tenCumRap.split("-")[0]}</span> -{" "}
                        {thongTinPhim.tenCumRap.split("-")[1]}
                      </h6>
                      <p className="mb-0">
                        {thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu} -{" "}
                        {thongTinPhim.tenRap}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="time col-4 text-center">
                  <div className="d-table ml-auto time__content">
                    <h6>Thời gian giữ ghế</h6>
                    <p className="mb-0">
                      <span id="minutes">10</span>:<span id="seconds">10</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="booking__left-room">
                <div className="booking__left-screen col-12">
                  <img src="/img/others/screen.png" alt="img" />
                </div>
                <div className="booking__left-seat">
                  {/* // ! START seat item */}
                  {renderSeat()}
                  {/* // ! END seat item */}
                </div>
              </div>
              <div className="booking__left-footer d-flex">
                <div className="footer-item">
                  <p className="seat-item seat-item--black">X</p>
                  <p>Thường</p>
                </div>
                <div className="footer-item">
                  <p className="seat-item seat-item--gold">X</p>
                  <p>VIP</p>
                </div>
                <div className="footer-item">
                  <p className="seat-item seat-item--green">X</p>
                  <p>Ghế đang chọn</p>
                </div>
                <div className="footer-item">
                  <p className="seat-item seat-item--orange">X</p>
                  <p>Ghế đã có người chọn</p>
                </div>
              </div>
            </div>
          </div>
          <div className="booking__right col-3">
            <div className="booking__right-content">
              <p className="price-total text-center">
                {(calcSeatPrice() + calcComboPrice()).toLocaleString("fr-FR")} đ
              </p>
              <div className="booking__right-movie">
                <h6>{thongTinPhim.tenPhim}</h6>
                <p>
                  {thongTinPhim.tenCumRap.split("-")[0]} -{" "}
                  {thongTinPhim.tenCumRap.split("-")[1]}
                </p>
                <p>
                  {thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu} -{" "}
                  {thongTinPhim.tenRap}
                </p>
              </div>
              <div className="row booking__right-seat mx-0">
                <p className="col-6 pl-0">Ghế: {renderBookingSeatList()}</p>
                <p className="seat-price col-6 text-right">
                  {calcSeatPrice().toLocaleString("fr-FR")} đ
                </p>
              </div>
              <div
                className="row booking__right-combo mx-0"
                onClick={toggleComboDetails}
              >
                <div className="col-6 pl-0 combo-img">
                  <i className="fas fa-angle-left" />
                  <img src="/img/icon/popcorn.png" alt="img" />
                  Chọn combo
                </div>
                <p className="combo-price col-6 text-right">
                  {calcComboPrice().toLocaleString("fr-FR")} đ
                </p>
              </div>
              <form className="booking__right-form">
                <div className="form-group mb-4">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group mb-0">
                  <input
                    type="text"
                    name="sdt"
                    className="form-control"
                    placeholder="Số điện thoại"
                  />
                </div>
              </form>
            </div>
            <div className="booking__right__bottom">
              <div className="booking__right-attention text-center">
                <img
                  src="/img/icon/exclamation.png"
                  alt="img"
                  style={{ width: 20 }}
                />
                <span>Vé đã mua không thể đổi hoặc hoàn tiền</span>
                <p>
                  Mã vé sẽ được gửi qua tin nhắn ZMS (tin nhắn Zalo) và Email đã
                  nhập.
                </p>
              </div>
              <button
                type="button"
                id="buy-ticket"
                className="buy-ticket movie-btn--green"
                disabled={seatList.length > 0 ? false : true}
                onClick={handleBookTicket}
              >
                {bookingLoading ? <Loading1 /> : "Đặt Vé"}
              </button>
            </div>
          </div>
        </div>
        {/* // ! COMBO DETAILS */}
        <BookingComboList />
      </section>
    </>
  );
}

const mapStateToProps = (state) => ({
  ticketRoom: state.BookingTicket.ticketRoom,
  ticketRoomLoading: state.BookingTicket.ticketRoomLoading,

  seatList: state.BookingTicket.seatList,
  comboList: state.BookingTicket.comboList,

  bookingLoading: state.BookingTicket.bookingLoading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: (showtimesID) => {
    dispatch(actFetchTicketRoomAPI(showtimesID));
  },
  bookTicket: (bookingInfo, token, history) => {
    dispatch(actBookTicketAPI(bookingInfo, token, history));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Booking);
