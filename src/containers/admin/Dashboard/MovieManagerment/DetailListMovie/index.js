import React from 'react';
import MovieItem from "../../../components/movieItem"

export default function MovieList() {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Mã Phim</th>
            <th>Tên Phim</th>
            <th>Hình Ảnh</th>
            <th>Mô Tả</th>
            <th>Mã Nhóm</th>
            <th>Ngày Khởi Chiếu</th>
            <th>Tạo Lịch Chiếu/Sửa/Xóa</th>
          </tr>
        </thead>
        <tbody>
          <MovieItem />
        </tbody>
      </table>

    </div>
  )
}
