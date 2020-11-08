import React, { useEffect, useState } from "react";
// import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [userName, setUserName] = useState();
  useEffect(()=>{
    let name = JSON.parse(localStorage.getItem('userSignIn'));
    setUserName(name)
  })
  const DangXuat = () => {
    localStorage.removeItem('userSignIn');
    window.location.replace("/");
  }
  return (
    <div>
      <header id="header">
        <div className="header__navbar">
          <nav className="navbar navbar-expand-lg navbar-dark bg-light">
            <div className="col-3 logo wow animate__animated animate__fadeInLeftBig">
              <Link to={"/"}>
                <a>CYBERSOFT CINEMA</a>
              </Link>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="col-xs-12 col-sm-9 collapse navbar-collapse justify-content-center"
              id="navbarSupportedContent"
            >
              <ul className="nav justify-content-center">
                <li className="nav-item">
                  <a className="nav-link" href="#A">
                    LỊCH CHIẾU
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#A">
                    CỤM RẠP
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#A">
                    TIN TỨC
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#A">
                    VỀ CHÚNG TÔI
                  </a>
                </li>
                <li className="text-decoration-none">
                  {userName ? (
                    <div> 
                      <h5><i style={{color: 'tomato'}} class="fa fa-user"></i>{" "}{userName.toString()}</h5>
                      <button onClick={DangXuat} style={{color: 'red'}} className='btn'>(Đăng Xuất)</button>
                    </div>
                  ): (
                     <Link
                    className="btn buttonDangNhap"
                    to={"/login"}
                  >
                    <i className="fa fa-user" /> Đăng nhập
                  </Link>
                  )}
                 
                </li>{" "}
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}
