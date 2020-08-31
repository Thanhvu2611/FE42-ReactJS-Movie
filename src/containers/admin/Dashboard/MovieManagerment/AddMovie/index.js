import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actAddDetailListMovie } from '../AddMovie/modules/action';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        maPhim: Number,
        tenPhim: "",
        biDanh: "",
        trailer: "",
        hinhAnh: "",
        maNhom: "GP01",
        ngayKhoiChieu: Date,
        danhGia: null,
        moTa: ""
      },
      errors: {
        maPhim: Number,
        tenPhim: "",
        biDanh: "",
        trailer: "",
        hinhAnh: "",
        maNhom: "",
        ngayKhoiChieu: Date,
        danhGia: null,
        moTa: ""
      }

    };
  };
  //EditMovie
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.editListMovie) {
      this.setState({
        values: {
          ...this.state.values,
          maPhim: nextProps.editListMovie.maPhim,
          tenPhim: nextProps.editListMovie.tenPhim,
          biDanh: nextProps.editListMovie.biDanh,
          trailer: nextProps.editListMovie.trailer,
          hinhAnh: nextProps.editListMovie.hinhAnh,
          maNhom: nextProps.editListMovie.maNhom,
          ngayKhoiChieu: nextProps.editListMovie.ngayKhoiChieu,
          danhGia: nextProps.editListMovie.danhGia,
          moTa: nextProps.editListMovie.moTa
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
          maNhom: "GP01",
          ngayKhoiChieu: Date,
          danhGia: null,
          moTa: ""
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
        }
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
          [name]: errorMessage
        }
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

  }

  //Validate
  validate = (name, value) => {
    let errorMessage = "";
    if (name === 'maPhim') {
      errorMessage = !value ? "Mã Phim không được để trống" : "";
    }
    if (name === 'tenPhim') {
      errorMessage = !value ? "Tên Phim không được để trống" : "";
    }
    if (name === 'biDanh') {
      errorMessage = !value ? "Bí Danh không được để trống" : "";
    }
    if (name === 'trailer') {
      errorMessage = !value ? "Trailer không được để trống" : "";
    }
    if (name === 'hinhAnh') {
      errorMessage = !value ? "Hình Ảnh không được để trống" : "";
    }
    if (name === 'ngayKhoiChieu') {
      errorMessage = !value ? "Ngày Khởi Chiếu không được để trống" : "";
    }
    return errorMessage;

  }
  render() {
    console.log(this.state.values)
    return (
      <div className="container" >
        <form >
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <label>Mã Phim</label>
                <input type="number" name="maPhim" className="form-control" value={this.state.values.maPhim} onChange={(event) => this.handleChange(event)} onBlur={this.handleBlur} />
                {this.state.errors.maPhim && (<div className="alert alert-danger"><span>{this.state.errors.maPhim}</span></div>)}
              </div>
              <div className="form-group">
                <label>Tên Phim</label>
                <input type="text" name="tenPhim" className="form-control" value={this.state.values.tenPhim} onChange={(event) => this.handleChange(event)} onBlur={this.handleBlur} />
                {this.state.errors.tenPhim && (<div className="alert alert-danger"><span>{this.state.errors.tenPhim}</span></div>)}
              </div>
              <div className="form-group">
                <label>Trailer</label>
                <input type="text" name="trailer" className="form-control" value={this.state.values.trailer} onChange={(event) => this.handleChange(event)} onBlur={this.handleBlur} />
                {this.state.errors.trailer && (<div className="alert alert-danger"><span>{this.state.errors.trailer}</span></div>)}

              </div>
              <div className="form-group">
                <label>Bí danh</label>
                <input type="text" name="biDanh" className="form-control" value={this.state.values.biDanh} onChange={(event) => this.handleChange(event)} onBlur={this.handleBlur} />
                {this.state.errors.biDanh && (<div className="alert alert-danger"><span>{this.state.errors.biDanh}</span></div>)}

              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label>Ngày Khởi Chiếu</label>
                <input type="date" name="ngayKhoiChieu" className="form-control" value={this.state.values.ngayKhoiChieu} onChange={(event) => this.handleChange(event)} onBlur={this.handleBlur} />
                {this.state.errors.ngayKhoiChieu && (<div className="alert alert-danger"><span>{this.state.errors.ngayKhoiChieu}</span></div>)}

              </div>
              <div className="form-group">
                <label>Đánh Giá</label>
                <input type="text" name="danhGia" className="form-control" value={this.state.values.danhGia} onChange={(event) => this.handleChange(event)} onBlur={this.handleBlur} />
              </div>
              <div className="form-group">
                <label>Hình Ảnh</label>
                <input type="file" name="hinhAnh" className="form-control" value={this.state.values.hinhAnh} onChange={(event) => this.handleChange(event)} onBlur={this.handleBlur} />
                {this.state.errors.hinhAnh && (<div className="alert alert-danger"><span>{this.state.errors.hinhAnh}</span></div>)}

              </div>
              <div className="form-group">
                <label>Mã Nhóm</label>
                <input type="text" name="maNhom" disabled className="form-control" value={this.state.values.maNhom} onChange={(event) => this.handleChange(event)} onBlur={this.handleBlur} />
              </div>
            </div>
            <div className="col-12">
              <div className="form-group">
                <label>Mô Tả</label>
                <textarea name="moTa" className="form-control" rows="5" value={this.state.values.moTa} onChange={(event) => this.handleChange(event)} onBlur={this.handleBlur} />
              </div>
            </div>


          </div>
          <div>
            <button type="submit" className="btn btn-success" onClick={this.handleSubmit}>
              Add
                </button>
            <button type="submit" className="btn btn-info">
              Save
                </button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    editListMovie: state.addListMovieReducer.editListMovie

  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAddListMovie: (listMovie) => {
      dispatch(actAddDetailListMovie(listMovie));

    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddMovie);