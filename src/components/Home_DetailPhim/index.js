import React, { useEffect, useState } from "react";
import { qLyPhimService } from "../../services/QuanLyPhimServices";
import moment from "moment";

export default function HomeDetailPhim(props) {
  let [phimduocchon, setphimduocchon] = useState({});
  useEffect(() => {
    let { match } = props;
    if (match) {
      const id = match.params.id;
      qLyPhimService
        .layThongTinPhim(id)
        .then((res) => {
          let phim = res.data;
          setphimduocchon(phim);
          // console.log(phim);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    }
  });
  console.log(phimduocchon);

  return (
    <div>
      <section className="detailPhim">
        <div className="container">
          <nav aria-label="breadcrumb" className=" text-decoration-none">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Trang Chủ</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Phim Đang Chiếu</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {phimduocchon.tenPhim}
              </li>
            </ol>
          </nav>
          <div className="row contentPhim">
            <div className="col-12 col-sm-8 animate__animated animate__fadeInLeftBig">
              <div className="row">
                <div className="col-12 col-sm-5 img-Phim">
                  <img src={phimduocchon.hinhAnh} alt />
                  <a
                    href={phimduocchon.trailer}
                    className="btn-playVideo"
                    data-toggle="modal"
                    data-target="#trailerPhim"
                  >
                    <i className="fa fa-play" />
                  </a>
                </div>
                <div className="col-12 col-sm-7 titlePhim">
                  <h2 className="active">{phimduocchon.tenPhim}</h2>

                  <p>
                    <i className="fa fa-star" />
                    <span className="active">{phimduocchon.danhGia}</span>
                    <span> / 10 </span>
                    <button className="btn-danhgia btn btn-warning">
                      Đánh Giá
                    </button>
                  </p>

                  <div className="detail-info">
                    <p>
                      Diễn Viên: <a href="#">Diễn viên A</a>
                    </p>
                    <p>
                      Quốc Gia: <a href="#">ABC</a>
                    </p>
                    <p>
                      Thể Loại: <a href="#">Phim</a>
                    </p>
                    <p>
                      Ngày Khởi Chiếu:{" "}
                      <a href="#">
                        {moment(phimduocchon.ngayKhoiChieu).format(
                          "DD/MM/YYYY "
                        )}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="NoiDungPhim">
                <h4>Nội Dung Phim</h4>
                <p>{phimduocchon.moTa}</p>
              </div>
              <div className="LichChieu">
                <div className="row">
                  <div className="col-4">
                    <select className="form-control" name id>
                      <option value disabled selected>
                        Cả Nước
                      </option>
                      <option value>TP. Hồ Chí Minh</option>
                      <option value>Hà Nội</option>
                    </select>
                  </div>
                  <div className="col-4">
                    <input className="form-control" type="date" name id />
                  </div>
                  <div className="col-4">
                    <select className="form-control" name id>
                      <option value disabled selected>
                        Tất Cả Các Rạp
                      </option>
                      <option value>Galaxy Nguyễn Du</option>
                      <option value>Galaxy Kinh Dương Vương</option>
                      <option value>Galaxy Quang Trung</option>
                    </select>
                  </div>
                </div>
                <div className="row LichChieu_suatChieu">
                  <div className="col-12 LichChieu_suatChieuItems">
                    <h5 className="titleRap">Galaxy Nguyễn Du</h5>
                    <div className="LichChieu_gioChieu">
                      <div className="row">
                        <div className="col-4">
                          <p>2D - Phụ Đề</p>
                        </div>
                        <div className="col-8">
                          <a href="#">13:00</a>
                          <a href="#">15:00</a>
                          <a href="#">17:00</a>
                          <a href="#">19:00</a>
                          <a href="#">21:00</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 LichChieu_suatChieuItems">
                    <h5 className="titleRap">Galaxy Kinh Dương Vương</h5>
                    <div className="LichChieu_gioChieu">
                      <div className="row">
                        <div className="col-4">
                          <p>2D - Phụ Đề</p>
                        </div>
                        <div className="col-8">
                          <a href="#">13:00</a>
                          <a href="#">15:00</a>
                          <a href="#">17:00</a>
                          <a href="#">19:00</a>
                          <a href="#">21:00</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 LichChieu_suatChieuItems">
                    <h5 className="titleRap">Galaxy Quang Trung</h5>
                    <div className="LichChieu_gioChieu">
                      <div className="row">
                        <div className="col-4">
                          <p>2D - Phụ Đề</p>
                        </div>
                        <div className="col-8">
                          <a href="#">13:00</a>
                          <a href="#">15:00</a>
                          <a href="#">17:00</a>
                          <a href="#">19:00</a>
                          <a href="#">21:00</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-4 animate__animated animate__fadeInRightBig">
              <section className="movieGalaxy movieGalaxy_chitietPhim">
                <div className="container">
                  <ul
                    className="nav nav-tabs ulPhimChieu ulPhimChieu_ChitietPhim"
                    id="ul-phimchieu"
                    role="tablist"
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        data-toggle="tab"
                        href="#phimdangchieu"
                      >
                        PHIM ĐANG CHIẾU
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#phimsapchieu"
                      >
                        PHIM SẮP CHIẾU
                      </a>
                    </li>
                  </ul>
                  {/* Tab panes */}
                  <div className="tab-content">
                    <div
                      id="phimdangchieu"
                      className="container tab-pane active animate__animated animate__flipInY"
                    >
                      <br />
                      <div className="row movies-group animated fadeInUp">
                        <div className="col-md-12 col-sm-12 col-xs-12 movies-item">
                          <div className="movie-home">
                            <img src="./img/movie1.jpg" alt />
                            <a href="./chitietphim.html">
                              <div className="overlay_movie">
                                <div className="overlay_content">
                                  <button className="btn btn-muave">
                                    MUA VÉ
                                  </button>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="movie-title">
                            <p className="movie-name">SKYTOUR</p>
                            <p className="movie-name-trans">
                              SKY TOUR NHỮNG ĐIỀU GIỜ MỚI KỂ
                            </p>
                          </div>
                        </div>
                        <div className="col-md-12 col-sm-12 col-xs-12 movies-item">
                          <div className="movie-home">
                            <img src="./img/movie2.jpg" alt />
                            <a href="./chitietphim.html">
                              <div className="overlay_movie">
                                <div className="overlay_content">
                                  <button className="btn btn-muave">
                                    MUA VÉ
                                  </button>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="movie-title">
                            <p className="movie-name">THE SONATA</p>
                            <p className="movie-name-trans">
                              Bản Giao Hưởng Máu
                            </p>
                          </div>
                        </div>
                        <div className="col-md-12 col-sm-12 col-xs-12 movies-item">
                          <div className="movie-home">
                            <img src="./img/movie3.jpg" alt />
                            <a href="#">
                              <div className="overlay_movie">
                                <div className="overlay_content">
                                  <button className="btn btn-muave">
                                    MUA VÉ
                                  </button>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="movie-title">
                            <p className="movie-name">Fukushima 50</p>
                            <p className="movie-name-trans">
                              Fukushima 50: Thảm Họa Kép
                            </p>
                          </div>
                        </div>
                        <div className="col-md-12 col-sm-12 col-xs-12 movies-item">
                          <div className="movie-home">
                            <img src="./img/movie4.jpg" alt />
                            <a href="#">
                              <div className="overlay_movie">
                                <div className="overlay_content">
                                  <button className="btn btn-muave">
                                    MUA VÉ
                                  </button>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="movie-title">
                            <p className="movie-name">Inheritance </p>
                            <p className="movie-name-trans">Gia Tài Tội Lỗi</p>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12 pull-right">
                          <a href="#" className="btn-xemthem btn float-right">
                            Xem thêm{" "}
                            <i className="fa fa-long-arrow-alt-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      id="phimsapchieu"
                      className="container tab-pane fade animate__animated animate__flipInY"
                    >
                      <br />
                      <div className="row movies-group animated fadeInUp">
                        <div className="col-md-12 col-sm-12 col-xs-12 movies-item">
                          <div className="movie-home">
                            <img src="./img/movie7.jpg" alt />
                            <a href="#">
                              <div className="overlay_movie">
                                <div className="overlay_content">
                                  <button className="btn btn-muave">
                                    MUA VÉ
                                  </button>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="movie-title">
                            <p className="movie-name">Classic Again</p>
                            <p className="movie-name-trans">Cơn Mưa Tình Đầu</p>
                          </div>
                        </div>
                        <div className="col-md-12 col-sm-12 col-xs-12 movies-item">
                          <div className="movie-home">
                            <img src="./img/movie8.jpg" alt />
                            <a href="#">
                              <div className="overlay_movie">
                                <div className="overlay_content">
                                  <button className="btn btn-muave">
                                    MUA VÉ
                                  </button>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="movie-title">
                            <p className="movie-name">The Wretched</p>
                            <p className="movie-name-trans">Mẹ Quỷ</p>
                          </div>
                        </div>
                        <div className="col-md-12 col-sm-12 col-xs-12 movies-item">
                          <div className="movie-home">
                            <img src="./img/movie9.jpg" alt />
                            <a href="#">
                              <div className="overlay_movie">
                                <div className="overlay_content">
                                  <button className="btn btn-muave">
                                    MUA VÉ
                                  </button>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="movie-title">
                            <p className="movie-name">Stare</p>
                            <p className="movie-name-trans">
                              Lời Nguyền Shirai
                            </p>
                          </div>
                        </div>
                        <div className="col-md-12 col-sm-12 col-xs-12 movies-item">
                          <div className="movie-home">
                            <img src="./img/movie10.jpg" alt />
                            <a href="#">
                              <div className="overlay_movie">
                                <div className="overlay_content">
                                  <button className="btn btn-muave">
                                    MUA VÉ
                                  </button>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="movie-title">
                            <p className="movie-name">
                              Latte &amp; The Magic Waterstone
                            </p>
                            <p className="movie-name-trans">
                              Nhím, Sóc Và Viên Đá Thần Kỳ
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12 pull-right">
                          <a href="#" className="btn-xemthem btn float-right">
                            Xem thêm{" "}
                            <i className="fa fa-long-arrow-alt-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
