import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { actFetchDeleteMovie } from "./../../Dashboard/MovieManagerment/DetailListMovie/modules/action";
import { actFetchEditMovie } from "./../../Dashboard/MovieManagerment/AddMovie/editmodules/action";
class MovieItem extends Component {

  render() {
    const { movie } = this.props;
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
            to={`/admin/addmovie/${movie.maPhim}`}
          ><button className="btn btn-success" onClick={() => {
            this.props.editMovie(movie.id)
          }}>
              Sửa</button>
          </Link>
          <button className="btn btn-danger" onClick={() => { this.props.fetchDeleteMovie(movie.maPhim) }}>Xóa</button>
        </td>
      </tr>
    );
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
    editMovie: (id) => {
      dispatch(actFetchEditMovie(id));
    },
    fetchDeleteMovie: (id) => {
      dispatch(actFetchDeleteMovie(id));
    }
  };
};
export default connect(null, mapDispatchToProps)(MovieItem);
