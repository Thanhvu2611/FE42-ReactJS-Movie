import React from 'react';
import { NavLink } from 'react-router-dom';
import Dashboard from '../../containers/admin/Dashboard';


export default function Navadmin() {
  return (
    <div className="row">
      <div className="col-2">
        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Quản Lý Phim</a>
          <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Quản Lý Người Dùng</a>
        </div>
      </div>
      <div className="col-10">
        <Dashboard />
      </div>

    </div>


  )
}
