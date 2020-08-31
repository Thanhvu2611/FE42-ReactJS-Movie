import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { actEditListMovie } from "./../../Dashboard/MovieManagerment/AddMovie/modules/action";

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
          <Link className="btn btn-success" to={"/admin/addmovie"} onClick={() => {
            this.props.editListMovie(movie)
          }}>Sửa</Link>
          <button className="btn btn-danger">Xóa</button>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    //EDIT LISTMOVIE
    editListMovie: (movie) => {
      dispatch(actEditListMovie(movie));
      console.log(actEditListMovie(movie))
    }
  }
}
export default connect(null, mapDispatchToProps)(MovieItem);
