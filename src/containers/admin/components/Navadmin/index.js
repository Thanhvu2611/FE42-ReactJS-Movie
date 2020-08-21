import React from 'react';
import { NavLink } from 'react-router-dom';



export default function Navadmin() {
  return (
    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
      <NavLink activeClassName="active" className="nav-link" to="/admin/moviemanagerment">Quản Lý Phim</NavLink>
      <NavLink activeClassName="active" className="nav-link" to="/admin/usermanagerment">Quản Lý Người Dùng</NavLink>
    </div>
  )
}
