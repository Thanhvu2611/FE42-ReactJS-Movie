import React, { Component } from 'react';
import { actAddUser } from "./module/action";
import { connect } from "react-redux";

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        taiKhoan: "",
        matKhau: "",
        email: "",
        soDt: "",
        maNhom: "GP01",
        maLoaiNguoiDung: "",
        hoTen: ""

      },
      errors: {
        taiKhoan: "",
        matKhau: "",
        email: "",
        soDt: "",
        maNhom: "",
        maLoaiNguoiDung: "",
        hoTen: ""
      }
    }

  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState((state) => {
      return {
        values: {
          ...state.values,
          [name]: value,
        }
      }
    });
  };

  handleBlur = (event) => {
    const { value, name } = event.target;
    const errorMessage = this.validate(name, value);
    this.setState((state) => {
      return {
        error: {
          ...state.errors,
          [name]: errorMessage,
        }
      }
    });
  };

  handleSubmit = (event) => {
    event.prvenDefault();
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
        }
      });
    };
    if (!isValid) return;
    this.props.fetchAddUser(this.state.values);
    //console.log(this.props);
  }

  validate = (name, value) => {
    let errorMessage = "";
    if (name === 'taiKhoan') {
      errorMessage = !value ? "Username không được để trống" : "";
    }
    if (name === 'email') {
      if (!value) {
        errorMessage = !value ? "Email không được để trống" : "";
      } else {
        const isValid = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(value);
        errorMessage = !isValid ? "Email không hợp lệ" : "";
      }
    }
    if (name === 'matKhau') {
      if (!value) {
        errorMessage = !value ? "Mật Khẩu không được để trống" : "";
      } else {
        const isValid = /.{4,}/.test(value);
        errorMessage = !isValid ? "Mật khẩu ít nhất 4 ký tự" : "";
      }
      if (name === 'soDt') {
        errorMessage = !value ? "Số Điện Thoại không được để trống" : "";
      }
      if (name === 'hoTen') {
        errorMessage = !value ? "Họ Tên không được để trống" : "";
      }
    }
    return errorMessage;
  };

  render() {
    console.log(this.state.errors);
    return (
      <div className="container">
        <h3>ADD USER</h3>
        <form>
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <label>Tài Khoản</label>
                <input
                  type="text"
                  name="taiKhoan"
                  className="form-control"
                  value={this.state.values.taiKhoan}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                />
                {this.state.errors.taiKhoan && (
                  <div className="alert alert-danger">
                    <span>{this.state.errors.taiKhoan}</span>
                  </div>
                )}
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  value={this.state.values.email}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                />
                {this.state.errors.email && (
                  <div className="alert alert-danger">
                    <span>{this.state.errors.email}</span>
                  </div>
                )}
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label>Mật Khẩu</label>
                <input
                  type="password"
                  name="matKhau"
                  className="form-control"
                  value={this.state.values.matKhau}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                />
                {this.state.errors.matKhau && (
                  <div className="alert alert-danger">
                    <span>{this.state.errors.matKhau}</span>
                  </div>
                )}
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label>Số Điện Thoại</label>
                <input
                  type="number"
                  name="soDt"
                  className="form-control"
                  value={this.state.values.soDt}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                />
                {this.state.errors.soDt && (
                  <div className="alert alert-danger">
                    <span>{this.state.errors.soDt}</span>
                  </div>
                )}
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label>Họ Tên</label>
                <input
                  type="text"
                  name="hoTen"
                  className="form-control"
                  value={this.state.values.hoTen}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                />
                {this.state.errors.hoTen && (
                  <div className="alert alert-danger">
                    <span>{this.state.errors.hoTen}</span>
                  </div>
                )}
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label>Loại Người Dùng </label>
                <select className="form-control" name="maLoaiNguoiDung" value={this.state.values.maLoaiNguoiDung} onChange={this.handleChange}
                  onBlur={this.handleBlur}>
                  <option value="KhachHang">Khách Hàng</option>
                  <option value="QuanTri">Quản Trị</option>

                </select>
              </div>
            </div>
            <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Thêm</button>
            <button type="submit" className="btn btn-success">Lưu</button>
          </div>
        </form>
      </div >
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAddUser: (user) => {
      dispatch(actAddUser(user));
    }
  }
}

export default connect(null, mapDispatchToProps)(AddUser);