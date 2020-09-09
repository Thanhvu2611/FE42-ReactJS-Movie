import React from 'react';
import Search from './listUser/search';
import ListUser from './listUser';

import { Link } from "react-router-dom";

export default function UserManagerment() {
  return (
    <div>
      <Link to="/admin/adduser"><button className="btn btn-success">Thêm Người Dùng</button></Link>
      <Search />
      <ListUser />
    </div>
  )
}
