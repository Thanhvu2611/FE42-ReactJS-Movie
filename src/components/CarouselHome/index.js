import React, { useEffect } from "react";
import Slider from "react-slick";
import { WOW } from "wowjs";

export default function CarouselHome() {
  useEffect(() => {
    const wow = new WOW({
      offset: 100,
      mobile: false,
      live: true,
    });

    wow.init();
  });
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div>
      <section className="carouselGalaxy">
        <Slider {...settings}>
          <div>
            <img src="./img/Banner/2.jpg" alt="Ban1" />
          </div>
          <div>
            <img src="./img/Banner/3.jpg" alt="Ban1" />
          </div>
          <div>
            <img src="./img/Banner/4.jpg" alt="Ban1" />
          </div>
          <div>
            <img src="./img/Banner/5.jpg" alt="Ban1" />
          </div>
          <div>
            <img src="./img/Banner/6.jpg" alt="Ban1" />
          </div>
        </Slider>
        <div
          className="carousel_muavenhanh wow animate__animated animate__tada"
          id="div-muavenhanh"
        >
          <h2>MUA VÉ NHANH</h2>
          <br />
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item">
              <a
                className="muavenhanh_Theo nav-link active"
                data-toggle="tab"
                href="#home"
              >
                Theo phim
              </a>
            </li>
            <li className="nav-item">
              <a
                className="muavenhanh_Theo nav-link"
                data-toggle="tab"
                href="#menu1"
              >
                Theo ngày
              </a>
            </li>
            <li className="nav-item">
              <a
                className="muavenhanh_Theo nav-link"
                data-toggle="tab"
                href="#menu2"
              >
                Theo rạp
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div
              id="home"
              className="container tab-pane active animate__animated animate__flipInY"
            >
              <br />
              <form action>
                <select className="muavenhanh_select form-control" name id>
                  <option value disabled selected>
                    Chọn Phim
                  </option>
                  <option value={1}>Phim 1</option>
                  <option value={2}>Phim 2</option>
                  <option value={3}>Phim 3</option>
                </select>
                <select className="muavenhanh_select form-control" name id>
                  <option value disabled selected>
                    Chọn Rạp
                  </option>
                  <option value={1}>Rạp 1</option>
                  <option value={2}>Rạp 2</option>
                  <option value={3}>Rạp 3</option>
                </select>
                <select className="muavenhanh_select form-control" name id>
                  <option value disabled selected>
                    Chọn Ngày
                  </option>
                  <option value={1}>Ngày 1</option>
                  <option value={2}>Ngày 2</option>
                  <option value={3}>Ngày 3</option>
                </select>
                <select className="muavenhanh_select form-control" name id>
                  <option value disabled selected>
                    Chọn Suất
                  </option>
                  <option value={1}>Suất 1</option>
                  <option value={2}>Suất 2</option>
                  <option value={3}>Suất 3</option>
                </select>
              </form>
            </div>
            <div
              id="menu1"
              className="container tab-pane fade animate__animated animate__flipInY"
            >
              <br />
              <form action>
                <select className="muavenhanh_select form-control" name id>
                  <option value disabled selected>
                    Chọn Ngày
                  </option>
                  <option value={1}>Ngày 1</option>
                  <option value={2}>Ngày 2</option>
                  <option value={3}>Ngày 3</option>
                </select>
                <select className="muavenhanh_select form-control" name id>
                  <option value disabled selected>
                    Chọn Rạp
                  </option>
                  <option value={1}>Rạp 1</option>
                  <option value={2}>Rạp 2</option>
                  <option value={3}>Rạp 3</option>
                </select>
                <select className="muavenhanh_select form-control" name id>
                  <option value disabled selected>
                    Chọn Phim
                  </option>
                  <option value={1}>Phim 1</option>
                  <option value={2}>Phim 2</option>
                  <option value={3}>Phim 3</option>
                </select>
                <select className="muavenhanh_select form-control" name id>
                  <option value disabled selected>
                    Chọn Suất
                  </option>
                  <option value={1}>Suất 1</option>
                  <option value={2}>Suất 2</option>
                  <option value={3}>Suất 3</option>
                </select>
              </form>
            </div>
            <div
              id="menu2"
              className="container tab-pane fade animate__animated animate__flipInY"
            >
              <br />
              <form action>
                <select className="muavenhanh_select form-control" name id>
                  <option value disabled selected>
                    Chọn Rạp
                  </option>
                  <option value={1}>Rạp 1</option>
                  <option value={2}>Rạp 2</option>
                  <option value={3}>Rạp 3</option>
                </select>
                <select className="muavenhanh_select form-control" name id>
                  <option value disabled selected>
                    Chọn Phim
                  </option>
                  <option value={1}>Phim 1</option>
                  <option value={2}>Phim 2</option>
                  <option value={3}>Phim 3</option>
                </select>
                <select className="muavenhanh_select form-control" name id>
                  <option value disabled selected>
                    Chọn Ngày
                  </option>
                  <option value={1}>Ngày 1</option>
                  <option value={2}>Ngày 2</option>
                  <option value={3}>Ngày 3</option>
                </select>
                <select className="muavenhanh_select form-control" name id>
                  <option value disabled selected>
                    Chọn Suất
                  </option>
                  <option value={1}>Suất 1</option>
                  <option value={2}>Suất 2</option>
                  <option value={3}>Suất 3</option>
                </select>
              </form>
            </div>
            <button id="btn-muave" className="btn btn-muavenhanh">
              MUA VÉ
            </button>
          </div>
        </div>
        <div className="muavenhanh_mobile container" id="muavenhanh_mobile">
          <h2>MUA VÉ NHANH</h2>
          <br />
          {/* Nav tabs */}
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item">
              <a
                className="muavenhanh_Theo nav-link active"
                data-toggle="tab"
                href="#home-mobie"
              >
                Theo phim
              </a>
            </li>
            <li className="nav-item">
              <a
                className="muavenhanh_Theo nav-link"
                data-toggle="tab"
                href="#menu1-mobie"
              >
                Theo ngày
              </a>
            </li>
            <li className="nav-item">
              <a
                className="muavenhanh_Theo nav-link"
                data-toggle="tab"
                href="#menu2-mobie"
              >
                Theo rạp
              </a>
            </li>
          </ul>
          {/* Tab panes */}
          <div className="tab-content">
            <div
              id="home-mobie"
              className="container tab-pane active animate__animated animate__flipInY"
            >
              <br />
              <form action>
                <select className="muavenhanh_select form-control" name id>
                  <option value disabled selected>
                    Chọn Phim
                  </option>
                  <option value={1}>Phim 1</option>
                  <option value={2}>Phim 2</option>
                  <option value={3}>Phim 3</option>
                </select>
                <select className="muavenhanh_select form-control" name id>
                  <option value disabled selected>
                    Chọn Rạp
                  </option>
                  <option value={1}>Rạp 1</option>
                  <option value={2}>Rạp 2</option>
                  <option value={3}>Rạp 3</option>
                </select>
                <select className="muavenhanh_select form-control" name id>
                  <option value disabled selected>
                    Chọn Ngày
                  </option>
                  <option value={1}>Ngày 1</option>
                  <option value={2}>Ngày 2</option>
                  <option value={3}>Ngày 3</option>
                </select>
                <select className="muavenhanh_select form-control" name id>
                  <option value disabled selected>
                    Chọn Suất
                  </option>
                  <option value={1}>Suất 1</option>
                  <option value={2}>Suất 2</option>
                  <option value={3}>Suất 3</option>
                </select>
              </form>
            </div>
            <div
              id="menu1-mobie"
              className="container tab-pane fade animate__animated animate__flipInY"
            >
              <br />
              <form action>
                <select className="muavenhanh_select form-control" name id>
                  <option value disabled selected>
                    Chọn Ngày
                  </option>
                  <option value={1}>Ngày 1</option>
                  <option value={2}>Ngày 2</option>
                  <option value={3}>Ngày 3</option>
                </select>
                <select className="muavenhanh_select form-control" name id>
                  <option value disabled selected>
                    Chọn Rạp
                  </option>
                  <option value={1}>Rạp 1</option>
                  <option value={2}>Rạp 2</option>
                  <option value={3}>Rạp 3</option>
                </select>
                <select className="muavenhanh_select form-control" name id>
                  <option value disabled selected>
                    Chọn Phim
                  </option>
                  <option value={1}>Phim 1</option>
                  <option value={2}>Phim 2</option>
                  <option value={3}>Phim 3</option>
                </select>
                <select className="muavenhanh_select form-control" name id>
                  <option value disabled selected>
                    Chọn Suất
                  </option>
                  <option value={1}>Suất 1</option>
                  <option value={2}>Suất 2</option>
                  <option value={3}>Suất 3</option>
                </select>
              </form>
            </div>
            <div
              id="menu2-mobie"
              className="container tab-pane fade animate__animated animate__flipInY"
            >
              <br />
              <form action>
                <select className="muavenhanh_select form-control" name id>
                  <option value disabled selected>
                    Chọn Rạp
                  </option>
                  <option value={1}>Rạp 1</option>
                  <option value={2}>Rạp 2</option>
                  <option value={3}>Rạp 3</option>
                </select>
                <select className="muavenhanh_select form-control" name id>
                  <option value disabled selected>
                    Chọn Phim
                  </option>
                  <option value={1}>Phim 1</option>
                  <option value={2}>Phim 2</option>
                  <option value={3}>Phim 3</option>
                </select>
                <select className="muavenhanh_select form-control" name id>
                  <option value disabled selected>
                    Chọn Ngày
                  </option>
                  <option value={1}>Ngày 1</option>
                  <option value={2}>Ngày 2</option>
                  <option value={3}>Ngày 3</option>
                </select>
                <select className="muavenhanh_select form-control" name id>
                  <option value disabled selected>
                    Chọn Suất
                  </option>
                  <option value={1}>Suất 1</option>
                  <option value={2}>Suất 2</option>
                  <option value={3}>Suất 3</option>
                </select>
              </form>
            </div>
            <div className="div_buttonmuave">
              <button id="btn-muave" className="btn btn-muavenhanh">
                MUA VÉ
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
