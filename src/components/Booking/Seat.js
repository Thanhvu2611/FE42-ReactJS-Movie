import React from "react";
import { connect } from "react-redux";

import { actPushSeat } from "./action";

// Seat của phần Booking
function BookingSeat({ seatItem, pushSeat }) {
  const setColor = () => {
    if (seatItem.daDat) {
      return "seat-item seat-item--orange";
    } else if (seatItem.loaiGhe === "Thuong") {
      return "seat-item seat-item--black";
    } else if (seatItem.loaiGhe === "Vip") {
      return "seat-item seat-item--gold";
    }
  };

  // Mỗi seat sẽ có isBooking ban đầu = false
  let isBooking = false;

  const changeColor = (e) => {
    e.target.classList.toggle("seat-item--green");
    isBooking = !isBooking;
    let seat = {
      seatItem: seatItem,
      isBooking,
    };

    pushSeat(seat);
  };

  return (
    <div className="seat-wrap">
      <p className={setColor()} onClick={changeColor} title={seatItem.maGhe}>
        {seatItem.daDat ? "X" : seatItem.stt}
      </p>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  pushSeat: (seat) => {
    dispatch(actPushSeat(seat));
  },
});

export default connect(null, mapDispatchToProps)(BookingSeat);
