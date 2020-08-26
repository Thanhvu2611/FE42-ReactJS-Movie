import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class MovieItem extends Component {
  render() {
    const { movie } = this.props;
    // console.log(this.props);
    return (
      <tr>
        <td>{movie.maPhim}</td>
        <td>{movie.tenPhim}</td>
        <td>
          <img src={movie.hinhAnh} style={{ width: "100px", height: "70px" }} />
        </td>
        <td>{movie.moTa}</td>
        <td>{movie.maNhom}</td>
        <td>{movie.ngayKhoiChieu}</td>
        <td>
          <Link
            className="btn btn-primary"
            to={`/admin/detail/${movie.maPhim}`}
          >
            Tạo Lịch Chiếu
          </Link>
          <button className="btn btn-success">Sửa</button>
          <button className="btn btn-danger">Xóa</button>
        </td>
      </tr>
    );
  }
}
