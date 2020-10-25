import React, { Component } from "react";
import { connect } from "react-redux";
import { actAddMovie, } from "../AddMovie/modules/action";
import { actFetchEditMovie, actUpdateMovieRequest, } from "./editmodules/action";
import Loading from '../../../../../components/Loading';


class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        hinhAnh: {},
        //maPhim: "",
        tenPhim: "",
        biDanh: "",
        trailer: "",
        moTa: "",
        maNhom: "GP05",
        ngayKhoiChieu: "",
        danhGia: ""

      },
      errors: {
        hinhAnh: "",
        maPhim: "",
        tenPhim: "",
        biDanh: "",
        trailer: "",
        moTa: "",
        maNhom: "",
        ngayKhoiChieu: "",
        danhGia: ""

      },
      loading: false,
    };
    //console.log("Contrustor");
  }

  componentDidMount() {

    var { match } = this.props;
    if (match) {
      const id = match.params.id;
      this.props.fetchEditMovie(id);
      if (id) {
        this.setState({ loading: true })
      }

      //console.log(this.props.fetchEditMovie(id));
    }
  }
  UNSAFE_componentWillReceiveProps(nextProps) {


    if (nextProps && nextProps.editMovie) {
      //console.log(nextProps.editMovie.hinhAnh)
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
          ngayKhoiChieu: new Date(nextProps.editMovie.ngayKhoiChieu).toLocaleDateString("en-GB"),
          danhGia: nextProps.editMovie.danhGia
        },
        loading: false,
      });

    }
  }
  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({
      values: { ...this.state.values, [name]: value }
    });
    if (event.target.files && event.target.files[0]) {
      this.setState({
        values: { ...this.state.values, hinhAnh: event.target.files[0] },
      })
    }
  }


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
    //console.log("ok");
    event.preventDefault();
    var { history } = this.props;
    var form_data = new FormData();
    let isValid = true;
    for (let key in this.state.values) {

      const errorMessage = this.validate(key, this.state.values[key]);
      if (errorMessage) {
        isValid = false;
      }
      form_data.append(key, this.state.values[key]);
      // this.setState((state) => {
      //   return {
      //     errors: {
      //       ...state.errors,
      //       [key]: errorMessage,
      //     },
      //   };
      // });
    }
    if (!isValid) return;
    if (this.state.values.maPhim) {
      this.props.fetchUpdateMovie(form_data);
    } else {
      this.props.fetchAddListMovie(form_data);
    }
    // var form_data = new FormData();
    // for (var key in this.state.values) {


    //   form_data.append(key, this.state.values[key]);

    // }
    // if (this.state.values.maPhim) {
    //this.props.fetchUpdateMovie(this.state.values);
    // } else {

    //this.props.fetchAddListMovie(this.state.values);
    //}
    history.push("/admin/movie");
  };
  // handleSave = (event) => {
  //   event.preventDefault();
  //   let isValid = true;
  //   var form_data = new FormData();
  //   for (var key in this.state.values) {
  //     const errorMessage = this.validate(key, this.state.values[key]);
  //     if (errorMessage) {
  //       isValid = false;
  //     }

  //     form_data.append(key, this.state.values[key]);

  //   }
  //   if (!isValid) return;
  //   this.props.fetchUpdateMovie(form_data);
  // }

  //Validate
  validate = (name, value) => {
    let errorMessage = "";
    // if (name === "maPhim") {
    //   errorMessage = !value ? "Mã Phim không được để trống" : "";
    // }
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
      if (!value) {
        errorMessage = !value ? "Ngày Khởi Chiếu không được để trống" : "";
      } else {
        const isValid = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(value);
        errorMessage = !isValid ? "Ngày khởi chiếu không đúng định dạng DD/MM/YYYY" : "";
      }
    }
    return errorMessage;
  };
  render() {
    const { loading } = this.state;
    if (loading) return <Loading />
    console.log(this.state);
    return (
      <div className="container">
        <h3>{this.props.match.params.id ? "EDIT MOVIE" : "ADD MOVIE"}</h3>
        <form onSubmit={this.handleSubmit}>

          <div className="row">
            <div className="col-6">
              {/* <div className="form-group">
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
              </div> */}
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
                  type="text"
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
                  type="file"
                  name="hinhAnh"
                  className="form-control"
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                //value={this.state.values.hinhAnh[0]}
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
              className="btn btn-success">
              Submit
            </button>
            {/* <button type="submit" className="btn btn-info" onClick={this.handleSave}>
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
    editMovie: state.EditMovieReducer.editMovie,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAddListMovie: (form_data) => {
      dispatch(actAddMovie(form_data));
      //console.log(actAddMovie(form_data));
    },
    fetchEditMovie: (movie) => {
      //console.log(id);
      dispatch(actFetchEditMovie(movie));
    },
    fetchUpdateMovie: (form_data) => {
      dispatch(actUpdateMovieRequest(form_data));
    },
    // fechUploadImg: (formData) => {
    //   dispatch(uploadImg(formData))
    // }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddMovie);
