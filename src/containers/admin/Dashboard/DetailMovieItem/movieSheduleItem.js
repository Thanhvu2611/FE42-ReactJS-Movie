import React from "react";

export default function movieSheduleItem(props) {
  const { movieShowtime } = props;

  return (
    <tr>
      <td>{movieShowtime.maHeThong}</td>
      <td>{movieShowtime.tenHeThong}</td>
      <td>{movieShowtime.cumRapChieu.tenCumRap}</td>
    </tr>
  );
}
