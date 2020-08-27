import React, { Component } from 'react';

export default class MovieSheduleItem extends Component {
  render() {
    const { show, movieShowtime, showtime } = this.props;
    console.log(this.props)
    return (
      <tr>
        <td>{show.maLichChieu}</td>
        <td>{movieShowtime.maHeThongRap}</td>
        <td>{showtime.tenCumRap}</td>
        <td>{show.ngayChieuGioChieu}</td>
        <td>{show.giaVe}</td>
        <td>{show.thoiLuong}</td>
      </tr>
    )
  }
}
