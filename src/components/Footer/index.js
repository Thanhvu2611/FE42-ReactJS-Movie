import React from "react";

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-3 col-xs-6 footer-items">
              <h5>GIỚI THIỆU</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#">
                    <i className="fa fa-angle-double-right" />
                    về chúng tôi
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-angle-double-right" />
                    thỏa thuận sử dụng
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-angle-double-right" />
                    quy chế hoạt động
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-angle-double-right" />
                    chính sách bảo mật
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-6 footer-items">
              <h5>GÓC ĐIỆN ẢNH</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#">
                    <i className="fa fa-angle-double-right" />
                    thể loại phim
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-angle-double-right" />
                    bình luận phim
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-angle-double-right" />
                    blog điện ảnh
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-angle-double-right" />
                    phim hay tháng
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-6 footer-items">
              <h5>HỖ TRỢ</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#">
                    <i className="fa fa-angle-double-right" />
                    góp ý
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-angle-double-right" />
                    sale &amp; services
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-angle-double-right" />
                    rạp / giá vé
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-angle-double-right" />
                    tuyển dụng
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-6 footer-items">
              <h5>KẾT NỐI GALAXY CINEMA</h5>
              <ul className="list-unstyled contact-mxh">
                <li>
                  <a href="#" id="facebook">
                    <i class="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#" id="youtube">
                    <i className="fab fa-youtube" />
                  </a>
                </li>
                <li>
                  <a href="#" id="instagram">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
              </ul>
              <h5>DOWNLOAD APP</h5>
              <ul className="list-unstyled contact-mxh">
                <li>
                  <a href="#">
                    <i className="fab fa-apple" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-xbox" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="container">
          <div className="copyright d-flex justify-content-center align-items-center">
            <i>
              <p id="tenCty">
                <i class="fa fa-copyright"></i> Dự án cuối khóa CyberSoft của
                Trần Thanh Vũ và Hồ Quốc Long
              </p>
            </i>
            <img src="https://s3img.vcdn.vn/123phim/2020/03/d1e6bd560daa9e20131ea8a0f62e87f8.png" />
          </div>
        </div>
      </footer>
    </div>
  );
}
