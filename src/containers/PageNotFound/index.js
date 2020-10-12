import React, { Component } from "react";
import "./style.scss";
import { Link } from "react-router-dom";

export default class PageNotFound extends Component {
  render() {
    return (
      <div>
        <h1 className="title-404">TRANG NÀY KHÔNG TỒN TẠI!</h1>
        <h2 className="number-404">404</h2>
        <Link to="/">
          <button className="btn-trangchu btn btn-muave">
            QUAY VỀ TRANG CHỦ
          </button>
        </Link>
      </div>
    );
  }
}
