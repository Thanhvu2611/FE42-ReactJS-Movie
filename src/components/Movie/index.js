import React from "react";

export default function Movie() {
  return (
    <div>
      <section className="movieGalaxy">
        <div className="container wow animate__animated animate__fadeInRightBig">
          <ul className="nav nav-tabs" id="ul-phimchieu" role="tablist">
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
              <a className="nav-link" data-toggle="tab" href="#phimsapchieu">
                PHIM SẮP CHIẾU
              </a>
            </li>
          </ul>
          {/* Tab panes */}
          <div className="tab-content animate-box" data-animate-effect="fadeIn">
            <div id="phimdangchieu" className="container tab-pane active">
              <br />
              <div className="row movies-group animated fadeInUp">
                <div className="col-md-4 col-sm-6 col-xs-12 movies-item">
                  <div className="movie-home">
                    <img src="./img/movie1.jpg" alt />
                    <a href="./chitietphim.html">
                      <div className="overlay_movie">
                        <div className="overlay_content">
                          <button className="btn btn-muave">MUA VÉ</button>
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
                <div className="col-md-4 col-sm-6 col-xs-12 movies-item">
                  <div className="movie-home">
                    <img src="./img/movie2.jpg" alt />
                    <a href="./chitietphim.html">
                      <div className="overlay_movie">
                        <div className="overlay_content">
                          <button className="btn btn-muave">MUA VÉ</button>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="movie-title">
                    <p className="movie-name">THE SONATA</p>
                    <p className="movie-name-trans">Bản Giao Hưởng Máu</p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12 movies-item">
                  <div className="movie-home">
                    <img src="./img/movie3.jpg" alt />
                    <a href="#">
                      <div className="overlay_movie">
                        <div className="overlay_content">
                          <button className="btn btn-muave">MUA VÉ</button>
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
                <div className="col-md-4 col-sm-6 col-xs-12 movies-item">
                  <div className="movie-home">
                    <img src="./img/movie4.jpg" alt />
                    <a href="#">
                      <div className="overlay_movie">
                        <div className="overlay_content">
                          <button className="btn btn-muave">MUA VÉ</button>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="movie-title">
                    <p className="movie-name">Inheritance </p>
                    <p className="movie-name-trans">Gia Tài Tội Lỗi</p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12 movies-item">
                  <div className="movie-home">
                    <img src="./img/movie5.jpg" alt />
                    <a href="#">
                      <div className="overlay_movie">
                        <div className="overlay_content">
                          <button className="btn btn-muave">MUA VÉ</button>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="movie-title">
                    <p className="movie-name">Trolls World Tour</p>
                    <p className="movie-name-trans">
                      Quỷ Lùn Tinh Nghịch: Chuyến Lưu Diễn Thế Giới
                    </p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12 movies-item">
                  <div className="movie-home">
                    <img src="./img/movie6.jpg" alt />
                    <a href="#">
                      <div className="overlay_movie">
                        <div className="overlay_content">
                          <button className="btn btn-muave">MUA VÉ</button>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="movie-title">
                    <p className="movie-name">The Wishmas Tree</p>
                    <p className="movie-name-trans">Giải Cứu Cây Ước Nguyện</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12 pull-right">
                  <a href="#" className="btn-xemthem btn float-right">
                    Xem thêm <i className="fa fa-long-arrow-alt-right" />
                  </a>
                </div>
              </div>
            </div>
            <div id="phimsapchieu" className="container tab-pane fade">
              <br />
              <div className="row movies-group animated fadeInUp">
                <div className="col-md-4 col-sm-6 col-xs-12 movies-item">
                  <div className="movie-home">
                    <img src="./img/movie7.jpg" alt />
                    <a href="#">
                      <div className="overlay_movie">
                        <div className="overlay_content">
                          <button className="btn btn-muave">MUA VÉ</button>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="movie-title">
                    <p className="movie-name">Classic Again</p>
                    <p className="movie-name-trans">Cơn Mưa Tình Đầu</p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12 movies-item">
                  <div className="movie-home">
                    <img src="./img/movie8.jpg" alt />
                    <a href="#">
                      <div className="overlay_movie">
                        <div className="overlay_content">
                          <button className="btn btn-muave">MUA VÉ</button>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="movie-title">
                    <p className="movie-name">The Wretched</p>
                    <p className="movie-name-trans">Mẹ Quỷ</p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12 movies-item">
                  <div className="movie-home">
                    <img src="./img/movie9.jpg" alt />
                    <a href="#">
                      <div className="overlay_movie">
                        <div className="overlay_content">
                          <button className="btn btn-muave">MUA VÉ</button>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="movie-title">
                    <p className="movie-name">Stare</p>
                    <p className="movie-name-trans">Lời Nguyền Shirai</p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12 movies-item">
                  <div className="movie-home">
                    <img src="./img/movie10.jpg" alt />
                    <a href="#">
                      <div className="overlay_movie">
                        <div className="overlay_content">
                          <button className="btn btn-muave">MUA VÉ</button>
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
                <div className="col-md-4 col-sm-6 col-xs-12 movies-item">
                  <div className="movie-home">
                    <img src="./img/movie11.jpg" alt />
                    <a href="#">
                      <div className="overlay_movie">
                        <div className="overlay_content">
                          <button className="btn btn-muave">MUA VÉ</button>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="movie-title">
                    <p className="movie-name">Intruder</p>
                    <p className="movie-name-trans">Kẻ Xâm Nhập</p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12 movies-item">
                  <div className="movie-home">
                    <img src="./img/movie12.jpg" alt />
                    <a href="#">
                      <div className="overlay_movie">
                        <div className="overlay_content">
                          <button className="btn btn-muave">MUA VÉ</button>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="movie-title">
                    <p className="movie-name">100% Wolf</p>
                    <p className="movie-name-trans">Sói 100%</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12 pull-right">
                  <a href="#" className="btn-xemthem btn float-right">
                    Xem thêm <i className="fa fa-long-arrow-alt-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
