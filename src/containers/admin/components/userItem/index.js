import React, { Component } from 'react';
import { Link } from "react-router-dom";
//import { connect } from "react-redux";

export default class UserItem extends Component {

  render() {
    const { user, index } = this.props;

    return (
      <tr>
        <td>{index + 1}</td>
        <td>{user.taiKhoan}</td>
        <td>{user.matKhau}</td>
        <td>{user.hoTen}</td>
        <td>{user.email}</td>
        <td>{user.soDt}</td>
        <td>
          <button className="btn btn-primary">Ghi Danh</button>
          <button className="btn btn-success">Thêm</button>
          <button className="btn btn-danger">Xóa</button>
        </td>

      </tr>
    )
  }
}

