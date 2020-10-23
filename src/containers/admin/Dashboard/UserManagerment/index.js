import React from 'react';
import { useDispatch } from "react-redux";
import ListUser from './listUser';

import { Link } from "react-router-dom";



export default function UserManagerment(props) {

  return (
    <div>
      <div className="row">
        <div className="col-5">
          <Link to="/admin/adduser">
            <button className="btn btn-success">Thêm Người Dùng</button></Link>
        </div>

      </div>
      <ListUser />
    </div>
  )
}

