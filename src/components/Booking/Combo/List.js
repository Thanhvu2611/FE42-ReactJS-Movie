import React from "react";
import { connect } from "react-redux";

import BookingComboItem from "./Item";

function BookingComboList({ comboList }) {
  const renderCombo = () => {
    if (comboList && comboList.length > 0) {
      return comboList.map((combo, index) => (
        <BookingComboItem key={index} combo={combo} />
      ));
    }
  };

  return (
    <div className="booking__combo-details combo-details" id="comboDetails">
      <div className="combo-details__content">{renderCombo()}</div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  comboList: state.BookingTicket.comboList,
});

export default connect(mapStateToProps, null)(BookingComboList);
