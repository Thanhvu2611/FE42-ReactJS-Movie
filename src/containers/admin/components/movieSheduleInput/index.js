import React, { Component } from 'react';

export default class MovieSheduleInput extends Component {
  render() {
    const { show, movieShowtime, showtime, index } = this.props;
    console.log(this.props, index)
    return (
      <div>

        <option key={index} value={movieShowtime.maHeThongRap}>{movieShowtime.tenHeThongRap}</option>

        {/* <div className="form-group">
            <label>Chọn Cụm rạp</label>
            <select className="form-control">
              <option key={index} value={showtime.maCumRap}>{showtime.tenCumRap}</option>
            </select>
          </div>
          <div className="form-group">
            <label>Chọn rạp</label>
            <select className="form-control">
              <option key={index} value={show.maRap}>{show.tenRap}</option>
            </select>
          </div>
        </div> */}
      </div>

    )
  }
}
