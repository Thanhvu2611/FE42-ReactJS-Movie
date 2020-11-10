import React, { useEffect, useState } from "react";
import { qLyPhimService } from "../../services/QuanLyPhimServices";
import moment from "moment";
import { Link } from "react-router-dom";
import { showVideo } from "../../assets/js/main";
import ModalVideo from "../../components/Modal/Video";

export default function HomeDetailPhim(props) {
  let [phimduocchon, setphimduocchon] = useState({});
  let [danhsachphim, setdanhsachphim] = useState([]);
  let [danhsachphimsapchieu, setdanhsachphimsapchieu] = useState([]);
  let [lichchieutheophim, setlichchieutheophim] = useState([]);

  const { match } = props;
  const id = match.params.id;
  useEffect(() => {
    showVideo();
  }, [phimduocchon]);

  useEffect(() => {
    if (match) {
      qLyPhimService
        .layThongTinPhim(id)
        .then((res) => {
          let phim = res.data;
          setphimduocchon(phim);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
      qLyPhimService
        .layLichChieuTheoPhim(id)
        .then((res) => {
          let lichchieu = res.data.heThongRapChieu;
          setlichchieutheophim(lichchieu);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    }
  }, [id]);
  //console.log(lichchieutheophim);
  useEffect(() => {
    qLyPhimService
      .layThongTinPhimTheoTrang(1, 6)
      .then((res) => {
        let lstPhim = res.data.items;
        setdanhsachphim(lstPhim);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
    qLyPhimService
      .layThongTinPhimTheoTrang(4, 6)
      .then((res) => {
        let lstPhimSC = res.data.items;
        setdanhsachphimsapchieu(lstPhimSC);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, [id]);

  const renderPhimDeXuat = () => {
    return danhsachphim.map((item, index) => {
      //console.log(item);
      return (
        <div
          className="col-md-12 col-sm-12 col-xs-12 movies-item mb-3"
          key={index}
        >
          <div className="movie-home">
            <img src={item.hinhAnh} alt />

            <div className="overlay_movie">
              <div className="overlay_content">
                <h2 className="movie-name text-white">{item.tenPhim}</h2>
                <Link
                  className="btn btn-muave"
                  to={`/detailmovie/${item.maPhim}`}
                >
                  XEM CHI TIẾT
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
  const renderPhimSapChieu = () => {
    return danhsachphimsapchieu.map((item, index) => {
      // console.log(item);
      return (
        <div
          className="col-md-12 col-sm-12 col-xs-12 movies-item mb-1"
          key={index}
        >
          <div className="movie-home">
            <img src={item.hinhAnh} alt="hinhPhim" />

            <div className="overlay_movie">
              <div className="overlay_content">
                <h2 className="movie-name text-white">{item.tenPhim}</h2>
                <Link
                  className="btn btn-muave"
                  to={`/detailmovie/${item.maPhim}`}
                >
                  XEM CHI TIẾT
                </Link>{" "}
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  const renderLichChieu = () => {
    return lichchieutheophim.map((item, index) => {
      //console.log(item);
      return (
        <div className="col-12 LichChieu_suatChieuItems" key={index}>
          <h5 className="titleRap">
            <img src={item.logo} alt="logoRap" />
          </h5>
          {Object.entries(item.cumRapChieu).map(([index, itemRap]) => {
            //console.log(itemRap);
            return (
              <div className="LichChieu_gioChieu">
                <div className="row">
                  <div className="col-3">
                    <p>
                      Chi nhánh: <b>{itemRap.tenCumRap}</b>
                    </p>
                  </div>{" "}
                  <div className="col-9">
                    {Object.entries(itemRap.lichChieuPhim).map(
                      ([index, itemLich]) => {
                        if (
                          moment(itemLich.ngayChieuGioChieu).format("DD.MM") !=
                          "41.01"
                        ) {
                          return (
                            <Link
                              to={`/booking/${itemLich.maLichChieu}`}
                              key={index}
                            >
                              {moment(itemLich.ngayChieuGioChieu).format(
                                "DD/MM"
                              )}
                              {" ~ "}
                              {moment(itemLich.ngayChieuGioChieu).format(
                                "hh:mm A"
                              )}
                            </Link>
                          );
                        }
                      }
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
    });
  };
  return (
    <div>
      <section className="detailPhim">
        <div className="container">
          <nav aria-label="breadcrumb" className=" text-decoration-none">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to={"/"}>Trang Chủ</Link>
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
                    //to={phimduocchon.trailer}
                    className="btn-playVideo video-popup"
                    data-toggle="modal"
                    //data-target="#trailerPhim"
                    data-src={phimduocchon.trailer}
                    href="#modalVideo"
                  >
                    <i className="fa fa-play" />
                  </a>
                </div>
                <div className="col-12 col-sm-7 titlePhim">
                  <div className="row justify-content-center">
                    <h1 className="active">{phimduocchon.tenPhim}</h1>

                    <p className="danhgia">
                      <i className="fa fa-star" />{" "}
                      <span className="active fa-2x">
                        {phimduocchon.danhGia}
                      </span>
                      <span> / 10 </span>
                      {/* <button className="btn-danhgia btn btn-warning">
                      Đánh Giá
                    </button> */}
                    </p>
                  </div>

                  <div className="detail-info mt-4">
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
                <h4>CÁC SUẤT CHIẾU</h4>
                <div className="row LichChieu_suatChieu">
                  {renderLichChieu()}
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
                        {renderPhimDeXuat()}
                      </div>
                    </div>
                    <div
                      id="phimsapchieu"
                      className="container tab-pane fade animate__animated animate__flipInY"
                    >
                      <br />
                      <div className="row movies-group animated fadeInUp">
                        {renderPhimSapChieu()}
                      </div>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-12 col-sm-12 col-xs-12 pull-right">
                      <a href="#" className="btn-xemthem btn float-right">
                        Xem thêm <i className="fa fa-long-arrow-alt-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
      <ModalVideo />
    </div>
  );
}
