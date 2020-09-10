import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { actFetchDeleteUser } from "../../Dashboard/UserManagerment/listUser/module/action";
import { actGetUsers } from "./../../Dashboard/UserManagerment/AddUser/editmodule/action";
class UserItem extends Component {

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
          <Link to={`/admin/adduser/${user.taiKhoan}`}><button className="btn btn-success" onClick={() => {
            this.props.editUser(user.id)
          }}>Sửa</button></Link>
          <button className="btn btn-danger" onClick={() => { this.props.fetchDeleteUser(user.taiKhoan) }}>Xóa</button>
        </td>

      </tr>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchDeleteUser: (id) => {
      dispatch(actFetchDeleteUser(id));
    },
    editUser: (id) => {
      dispatch(actGetUsers(id));
    }
  }
}

export default connect(null, mapDispatchToProps)(UserItem);

