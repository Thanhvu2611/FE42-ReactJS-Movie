import React from 'react';
import Search from './listUser/search';
import ListUser from './listUser';

import { Link } from "react-router-dom";
import { connect } from "react-redux";

function UserManagerment(props) {
  return (
    <div>
      <div className="row">
        <div className="col-5">
          <Link to="/admin/adduser">
            <button className="btn btn-success" onClick={() => { props.addUser() }}>Thêm Người Dùng</button></Link>
        </div>
        <div className="col-7"><Search />
        </div>
      </div>
      <ListUser />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: () => {
      let action = {
        type: "EditUserReducer/EDIT_USER_SUCCESS",
        user: null
      };
      dispatch(action);
    }
  }
}

export default connect(null, mapDispatchToProps)(UserManagerment)
