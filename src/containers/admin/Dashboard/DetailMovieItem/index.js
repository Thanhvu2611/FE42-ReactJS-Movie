import React, { useEffect, useState, Fragment } from "react";
import { actFetchMovieSchedule } from "./module/action";
import { connect } from "react-redux";
import MovieSheduleItem from "../../components/movieSheduleItem";
import { qLyPhimService } from "../../../../services/QuanLyPhimServices";

function ListMovieShedule(props) {
  useEffect(() => {
    const id = props.match.params.id;
    props.fetchMovieSchedule(id);
    //console.log(props.fetchMovieSchedule(id));
  }, []);
  // let [heThongRap, setHeThongRap] = useState([]);
  // useEffect(() => {
  //   qLyPhimService
  //     .layHeThongRap()
  //     .then((result) => {
  //       setHeThongRap(result.data);
  //     })
  //     .catch((err) => {
  //       console.log(err.response.data);
  //     });
  // }, []);

  const renderTable = () => {
    const { movieShedule } = props;

    if (
      movieShedule.heThongRapChieu &&
      movieShedule.heThongRapChieu.length > 0
    ) {
      //console.log(movieShedule.heThongRapChieu.cumRapChieu);
      return movieShedule.heThongRapChieu.map((movieShowtime) => {
        //console.log(movieShedule)
        return movieShowtime.cumRapChieu.map((showtime) => {
          return showtime.lichChieuPhim.map((show) => {
            return (
              <MovieSheduleItem
                show={show.maLichChieu}
                show={show}
                movieShowtime={movieShowtime}
                showtime={showtime}
              />
            );
          });
        });
      });
    }
  };

  var moment = require("moment");

  let [maHeThongRap, setMaHeThongRap] = useState();
  const layMaHeThongRap = (event) => {
    let maHeThongRap = event.target.value;
    setMaHeThongRap(maHeThongRap);
  };

  let [maCumRap, setMaCumRap] = useState();
  const layMaCumRap = (event) => {
    let maCumRap = event.target.value;
    setMaCumRap(maCumRap);
  };

  let [maRap, setMaRap] = useState();
  const layMaRap = (event) => {
    let maRap = event.target.value;
    setMaRap(maRap);
  };
  //let [cumRap, setCumRap] = useState([]);
  // useEffect(() => {
  //   qLyPhimService
  //     .layThongTinCumRapChieuTheoHeThong(maHeThongRap)
  //     .then((result) => {
  //       setCumRap(result.data);
  //     })
  //     .catch((err) => {
  //       //console.log(err.response.data);
  //     });
  // }, [maHeThongRap]);

  let [gioChieu, setGioChieu] = useState();
  const layGioChieu = (event) => {
    let gioChieu = event.target.value;
    setGioChieu(gioChieu);
  };
  let [ngayChieu, setNgayChieu] = useState();
  const layNgayChieu = (event) => {
    let ngayChieu = moment(event.target.value).format("DD/MM/yyyy");
    setNgayChieu(ngayChieu);
  };
  let ngayChieuGioChieu = `${ngayChieu} ${gioChieu}`;

  let [giaVe, setGiaVe] = useState();
  const layGiaVe = (event) => {
    let giaVe = parseInt(event.target.value);
    setGiaVe(giaVe);
  };

  const renderHeThongRap = () => {
    const { movieShedule } = props;
    if (
      movieShedule.heThongRapChieu &&
      movieShedule.heThongRapChieu.length > 0
    ) {
      return movieShedule.heThongRapChieu.map((heThongRap, index) => {
        return (
          <option key={index} index={index} value={heThongRap.maHeThongRap}>
            {heThongRap.tenHeThongRap}
          </option>
        );
      });
    }
  };
  const renderCumRap = () => {
    const { movieShedule } = props;
    if (
      movieShedule.heThongRapChieu &&
      movieShedule.heThongRapChieu.length > 0
    ) {
      return movieShedule.heThongRapChieu.map((heThongRap) => {
        if (maHeThongRap === heThongRap.maHeThongRap) {
          return heThongRap.cumRapChieu.map((cumRap, index) => {
            return (
              <option key={index} index={index} value={cumRap.maCumRap}>
                {cumRap.tenCumRap}
              </option>
            );
          });
        }
      });
    }
  };
  const renderRap = () => {
    const { movieShedule } = props;
    if (
      movieShedule.heThongRapChieu &&
      movieShedule.heThongRapChieu.length > 0
    ) {
      return movieShedule.heThongRapChieu.map((heThongRap) => {
        console.log(heThongRap);

        //console.log(heThongRap);
        return heThongRap.cumRapChieu.map((cumRap) => {
          //console.log(cumRap);
          if (maCumRap === cumRap.maCumRap) {
            return cumRap.lichChieuPhim.map((rap, index) => {
              console.log(rap);
              return (
                <option key={index} index={index} value={rap.maRap}>
                  {rap.tenRap}
                </option>
              );
            });
          }
        });
      });
    }
  };

  //let index = 0;
  return (
    <div>
      <div className="content">
        <div className="header">
          <h5 className="title">Thông Tin Lịch Chiếu Phim Của The Flash</h5>
        </div>
        <div className="body">
          <form>
            <div className="row">
              <div className="col-5">
                <div className="form-group">
                  <select
                    name="heThongRap"
                    onChange={layMaHeThongRap}
                    id="selection"
                  >
                    <option value="#">--Chọn Hệ Thống Rạp</option>
                    {renderHeThongRap()}
                  </select>
                </div>
                <div className="form-group">
                  <select name="cumRap" onChange={layMaCumRap} id="selection">
                    <option value="#">--Chọn Cụm Rạp</option>
                    {renderCumRap()}
                  </select>
                </div>

                <div className="form-group">
                  <select name="rap" onChange={layMaRap} id="selection">
                    <option value="#">--Chọn Rạp</option>
                    {renderRap()}
                  </select>
                </div>
              </div>

              <div className="col-7">
                <div className="form-group">
                  <label>Chọn ngày giờ chiếu</label>
                  <input type="date" className="form-control" />
                </div>
                <div className="form-group">
                  <label>Chọn Thời lượn phim</label>
                  <input type="time" className="form-control" />
                </div>
                <div className="form-group">
                  <label>Mã nhóm mặc định</label>
                  <input type="text" disabled className="form-control" />
                </div>
                <div className="form-group">
                  <label>Giá vé</label>
                  <div className="input-group">
                    <input type="number" className="form-control" />
                    <div className="input-group-append">
                      <span className="input-group-text">VNĐ</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          {/* <div>
              <button type="submit" className="btn btn-success">
                Submit
              </button>
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
            </div> */}

          <div>
            <table className="table">
              <thead>
                <tr>
                  <th>Mã Lịch Chiếu</th>
                  <th>Hệ Thống</th>
                  <th>Cụm Rạp</th>
                  <th>Ngày Giờ Chiếu</th>
                  <th>Giá</th>
                  <th>Thời Lượng</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>{renderTable()}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    movieShedule: state.movieSheduleReducer.movieShedule,
    loading: state.movieSheduleReducer.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovieSchedule: (id) => {
      // console.log(id);
      dispatch(actFetchMovieSchedule(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListMovieShedule);
