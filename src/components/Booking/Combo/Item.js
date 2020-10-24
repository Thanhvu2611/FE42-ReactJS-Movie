import React from "react";
import { connect } from "react-redux";

import { actChangeComboNumber } from "../action";

function BookingComboItem({ combo, changeComboNumber }) {
  return (
    <div className="row combo-details__item">
      <div className="col-2 combo-details__item-img">
        <img src={combo.image} alt="img" />
      </div>
      <div className="col combo-details__item-text">
        <div className="combo-details__item-info">
          <img src="/img/icon/information.png" alt="img" />
          <span>{combo.comboName}</span>
          <p>
            {combo.description}
            <br />
            {combo.note}
          </p>
        </div>
        <p className="combo-details__item-price">
          {combo.price.toLocaleString("fr-FR")} đ
        </p>
      </div>
      <div className="col-3 combo-details__item-number">
        <i
          className="far fa-minus"
          onClick={() => {
            changeComboNumber(combo, -1);
          }}
        />
        <span className="number">{combo.number}</span>
        <i
          className="far fa-plus"
          onClick={() => {
            changeComboNumber(combo, +1);
          }}
        />
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  changeComboNumber: (combo, flag) => {
    dispatch(actChangeComboNumber(combo, flag));
  },
});

export default connect(null, mapDispatchToProps)(BookingComboItem);
