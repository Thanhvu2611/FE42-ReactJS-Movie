import React from 'react';



export default function MovieItem(props) {

  const { movie } = props;
  return (

    <tr>
      <td>{movie.maPhim}</td>
      <td>{movie.tenPhim}</td>
      <td><img src={movie.hinhAnh} style={{ width: "100px", height: "70px" }} /></td>
      <td>{movie.moTa}</td>
      <td>{movie.maNhom}</td>
      <td>{movie.ngayKhoiChieu}</td>
      <td>
        <button
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#modelIdDetailMovie" to={`${movie.maPhim}`}
        >
          Tạo Lịch Chiếu
          </button>
        <button
          className="btn btn-success"
          data-toggle="modal"
          data-target="#modelIdDetailMovie"
        >
          Sửa
          </button>
        <button className="btn btn-danger">Xóa</button>
      </td>
    </ tr >
  )
}
