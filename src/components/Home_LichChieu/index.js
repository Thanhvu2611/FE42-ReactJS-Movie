import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function HomeLichChieu() {
  let [danhSachPhim, setdanhSachPhim] = useState({});
  let [lichChieu, setlichChieu] = useState({});
  //   const maHeThongRap = useSelector(
  //     (state) => state.MovieHookReducer.maHeThongRap
  //   );
  //   const maCumRap = useSelector((state) => state.MovieHookReducer.maCumRap);
  //   let [danhSachRap, setdanhSachRap] = useState([]);

  useEffect(() => {});

  return (
    <div className="container">
      <h2 className="text-center">CÁC SUẤT CHIẾU</h2>
      <br />
      {/* Nav pills */}

      <div className="row w-100">
        <div className="col-sm-4">
          <ul className="nav nav-pills flex-column" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" data-toggle="pill" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="pill" href="#menu1">
                Menu 1
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="pill" href="#menu2">
                Menu 2
              </a>
            </li>
          </ul>
        </div>

        <div className="col-sm-4">
          {" "}
          <div className="tab-content">
            <div id="home" className="container tab-pane active">
              <br />
              <h3>HOME</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div id="menu1" className="container tab-pane fade">
              <br />
              <h3>Menu 1</h3>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div id="menu2" className="container tab-pane fade">
              <br />
              <h3>Menu 2</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-4"></div>
      </div>
    </div>
  );
}
