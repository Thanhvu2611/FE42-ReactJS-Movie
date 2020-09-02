import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { actEditMovie } from "./../../Dashboard/MovieManagerment/DetailListMovie/modules/action";

class MovieItem extends Component {
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
          <Link
            className="btn btn-success"
            to={"/admin/addmovie"}
            onClick={() => {
              this.props.editMovie(movie);
            }}
          >
            Sửa
          </Link>
          <button className="btn btn-danger">Xóa</button>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editMovie: (movie) => {

      dispatch(actEditMovie(movie));
      //console.log(actEditMovie(movie));
    },
  };
};
export default connect(null, mapDispatchToProps)(MovieItem);
