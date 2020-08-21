import React from 'react'

export default function MovieItem() {
  return (
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>
        <button
          className="btn btn-success"
          data-toggle="modal"
          data-target="#modelIdDetailMovie"
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
    </tr>
  )
}
