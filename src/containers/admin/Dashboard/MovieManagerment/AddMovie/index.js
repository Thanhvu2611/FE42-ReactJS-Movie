import React, { Component } from "react";
import { connect } from "react-redux";
import { actAddMovie } from "../AddMovie/modules/action";
import { actFetchEditMovie } from "../DetailListMovie/modules/action";

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        maPhim: 0,
        tenPhim: "",
        biDanh: "",
        trailer: "",
        hinhAnh: "",
        moTa: "",
        maNhom: "",
        ngayKhoiChieu: "",
        danhGia: 0

      },
      errors: {
        maPhim: 0,
        tenPhim: "",
        biDanh: "",
        trailer: "",
        hinhAnh: "",
        moTa: "",
        maNhom: "",
        ngayKhoiChieu: "",
        danhGia: 0

      },
    };
    //console.log("Contrustor");
  }

  componentDidMount() {

    const id = this.props.match.params.id;
    this.props.fetchEditMovie(id);
    console.log(this.props.fetchEditMovie(id));
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.editMovie) {
      this.setState({
        values: {
          ...this.state.values,
          maPhim: nextProps.editMovie.maPhim,
          tenPhim: nextProps.editMovie.tenPhim,
          biDanh: nextProps.editMovie.biDanh,
          trailer: nextProps.editMovie.trailer,
          hinhAnh: nextProps.editMovie.hinhAnh,
          moTa: nextProps.editMovie.moTa,
          maNhom: nextProps.editMovie.maNhom,
          ngayKhoiChieu: nextProps.editMovie.ngayKhoiChieu,
          danhGia: nextProps.editMovie.danhGia
        }
      });
    } else {
      this.setState({
        values: {
          ...this.state.values,
          maPhim: Number,
          tenPhim: "",
          biDanh: "",
          trailer: "",
          hinhAnh: "",
          moTa: "",
          maNhom: "GP01",
          ngayKhoiChieu: "",
          danhGia: Number
        }
      });

    }
  }


  //Listeral
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState((state) => {
      return {
        values: {
          ...state.values,
          [name]: value,
        },
      };
    });
  };

  handleBlur = (event) => {
    const { value, name } = event.target;
    const errorMessage = this.validate(name, value);
    this.setState((state) => {
      return {
        errors: {
          ...state.errors,
          [name]: errorMessage,
        },
      };
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    let isValid = true;
    for (let key in this.state.values) {
      const errorMessage = this.validate(key, this.state.values[key]);
      if (errorMessage) {
        isValid = false;
      }
      this.setState((state) => {
        return {
          errors: {
            ...state.errors,
            [key]: errorMessage,
          },
        };
      });
    }
    if (!isValid) return;
    this.props.fetchAddListMovie(this.state.values);
    console.log(this.state.values);
  };

  //Validate
  validate = (name, value) => {
    let errorMessage = "";
    if (name === "maPhim") {
      errorMessage = !value ? "Mã Phim không được để trống" : "";
    }
    if (name === "tenPhim") {
      errorMessage = !value ? "Tên Phim không được để trống" : "";
    }
    if (name === "biDanh") {
      errorMessage = !value ? "Bí Danh không được để trống" : "";
    }
    if (name === "trailer") {
      errorMessage = !value ? "Trailer không được để trống" : "";
    }
    if (name === "hinhAnh") {
      errorMessage = !value ? "Hình Ảnh không được để trống" : "";
    }
    if (name === "ngayKhoiChieu") {
      errorMessage = !value ? "Ngày Khởi Chiếu không được để trống" : "";
    }
    return errorMessage;
  };
  render() {
    console.log(this.props.editMovie)
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <h3>{this.props.editMovie ? "EDIT MOVIE" : "ADD MOIVE"}</h3>
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <label>Mã Phim</label>
                <input
                  type="number"
                  name="maPhim"
                  className="form-control"
                  value={this.state.values.maPhim}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                />
                {this.state.errors.maPhim && (
                  <div className="alert alert-danger">
                    <span>{this.state.errors.maPhim}</span>
                  </div>
                )}
              </div>
              <div className="form-group">
                <label>Tên Phim</label>
                <input
                  type="text"
                  name="tenPhim"
                  className="form-control"
                  value={this.state.values.tenPhim}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                />
                {this.state.errors.tenPhim && (
                  <div className="alert alert-danger">
                    <span>{this.state.errors.tenPhim}</span>
                  </div>
                )}
              </div>
              <div className="form-group">
                <label>Trailer</label>
                <input
                  type="text"
                  name="trailer"
                  className="form-control"
                  value={this.state.values.trailer}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                />
                {this.state.errors.trailer && (
                  <div className="alert alert-danger">
                    <span>{this.state.errors.trailer}</span>
                  </div>
                )}
              </div>
              <div className="form-group">
                <label>Bí danh</label>
                <input
                  type="text"
                  name="biDanh"
                  className="form-control"
                  value={this.state.values.biDanh}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                />
                {this.state.errors.biDanh && (
                  <div className="alert alert-danger">
                    <span>{this.state.errors.biDanh}</span>
                  </div>
                )}
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label>Ngày Khởi Chiếu</label>
                <input
                  type="datetime"
                  name="ngayKhoiChieu"
                  className="form-control"
                  value={this.state.values.ngayKhoiChieu}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                />
                {this.state.errors.ngayKhoiChieu && (
                  <div className="alert alert-danger">
                    <span>{this.state.errors.ngayKhoiChieu}</span>
                  </div>
                )}
              </div>
              <div className="form-group">
                <label>Đánh Giá</label>
                <input
                  type="number"
                  name="danhGia"
                  className="form-control"
                  value={this.state.values.danhGia}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                />
              </div>
              <div className="form-group">
                <label>Hình Ảnh</label>
                <input
                  type="text"
                  name="hinhAnh"
                  className="form-control"
                  value={this.state.values.hinhAnh}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                />
                {this.state.errors.hinhAnh && (
                  <div className="alert alert-danger">
                    <span>{this.state.errors.hinhAnh}</span>
                  </div>
                )}
              </div>
              <div className="form-group">
                <label>Mã Nhóm</label>
                <input
                  type="text"
                  name="maNhom"
                  className="form-control"
                  value={this.state.values.maNhom}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                />
              </div>
            </div>
            <div className="col-12">
              <div className="form-group">
                <label>Mô Tả</label>
                <textarea
                  name="moTa"
                  className="form-control"
                  rows="5"
                  value={this.state.values.moTa}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                />
              </div>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="btn btn-success"
            //onClick={this.handleSubmit}
            >
              Submit
            </button>
            {/* <button type="submit" className="btn btn-info">
              Save
            </button> */}
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    editMovie: state.movieReducer.editMovie,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAddListMovie: (movie) => {
      dispatch(actAddMovie(movie));
      //console.log(actAddMovie(movie));
    },
    fetchEditMovie: (id) => {
      //console.log(id);
      dispatch(actFetchEditMovie(id));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddMovie);
