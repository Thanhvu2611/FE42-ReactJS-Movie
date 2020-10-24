import React, { useEffect, useState, Fragment } from "react";
import { actFetchMovieSchedule } from "./module/action";
import { connect } from "react-redux";
import { qLyPhimService } from "../../../../services/QuanLyPhimServices";
import Showtime from "./showtime";
import { qLyAdminService } from "../../../../services/QuanLyAdminService";
import swal from "sweetalert";

function ListMovieShedule(props) {
  const [state, setState] = useState({
    maRap: null,
    ngayChieu: '',
    gioChieu: '',
    giaVe: null,
    maPhim: props.match.params.id,
  })
  const [danhSachHeThongRap, setDanhSachHeThongRap] = useState([])
  const [danhSachCumRap, setDanhSachCumRap] = useState([])

  const { movieShedule } = props;
  useEffect(() => {
    const id = props.match.params.id;
    props.fetchMovieSchedule(id);
    qLyPhimService
      .layHeThongRap()
      .then(result => {
        setDanhSachHeThongRap(result.data)
      })

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
  const [maHeThongRap, setMaHeThongRap] = useState();
  useEffect(() => {
    if (maHeThongRap) {
      qLyPhimService
        .layThongTinCumRapTheoHeThong(maHeThongRap)
        .then((result) => {
          setDanhSachCumRap(result.data);
          //console.log(result.data);
        })
        .catch(err => {
          console.log(err);
        })

    }
  }, [maHeThongRap])
  const renderTable = () => {


    if (
      movieShedule.heThongRapChieu &&
      movieShedule.heThongRapChieu.length > 0
    ) {
      return movieShedule.heThongRapChieu.map((heThong) => (
        < Showtime heThong={heThong} />
      )

      )
      //console.log(movieShedule.heThongRapChieu.cumRapChieu);

      //movieShedule.heThongRapChieu.map((movieShowtime) => {
      //console.log(movieShedule)
      // return movieShowtime.cumRapChieu.map((showtime) => {
      //   return showtime.lichChieuPhim.map((show) => {
      //     return (
      //       <Showtime
      //         show={show.maLichChieu}
      //         show={show}
      //         movieShowtime={movieShowtime}
      //         showtime={showtime}
      //       />
      //     );
      //   });
      // });
      //});
    }
  };


  const layMaHeThongRap = (event) => {
    let maHeThongRap = event.target.value;
    setMaHeThongRap(maHeThongRap);
  };
  const [danhSachRap, setDanhSachRap] = useState([])
  const layDanhSachRap = (event) => {
    let maCumRap = event.target.value;
    if (danhSachCumRap && danhSachCumRap.length > 0) {
      let cumRapTimDuoc = danhSachCumRap.find(cumRap => cumRap.maCumRap === maCumRap)
      console.log(cumRapTimDuoc);

      if (cumRapTimDuoc) {
        if (danhSachRap.length > 0) {
          setDanhSachRap([])
        }
        setDanhSachRap(cumRapTimDuoc.danhSachRap)
      }
    }
  };

  const renderHeThongRap = () => {
    if (
      danhSachHeThongRap &&
      danhSachHeThongRap.length > 0
    ) {
      return danhSachHeThongRap.map((heThongRap, index) => {
        return (
          <option key={heThongRap.maHeThongRap} value={heThongRap.maHeThongRap}>
            {heThongRap.tenHeThongRap}
          </option>
        );
      });
    }
  };
  const renderCumRap = () => {
    if (
      danhSachCumRap &&
      danhSachCumRap.length > 0
    ) {
      return danhSachCumRap.map((cumRap) => {
        return <option key={cumRap.maCumRap}
          value={cumRap.maCumRap}
        >
          {cumRap.tenCumRap}
        </option>
      });
    }
  };
  const renderRap = () => {
    if (danhSachRap && danhSachRap.length > 0) {
      return danhSachRap.map((rap) => {
        return <option key={rap.maRap} value={rap.maRap}>{rap.tenRap}</option>
      })
    }

    // if (
    //   movieShedule.heThongRapChieu &&
    //   movieShedule.heThongRapChieu.length > 0
    // ) {
    //   return movieShedule.heThongRapChieu.map((heThongRap) => {

    //     return heThongRap.cumRapChieu.map((cumRap) => {
    //       if (maCumRap === cumRap.maCumRap) {
    //         return cumRap.lichChieuPhim.map((rap, index) => {
    //           return <option key={index} index={index}
    //             value={rap.maRap}
    //           >
    //             {rap.tenRap}
    //           </option>
    //         })
    //       }

    //     })

    //   });
    // }
  };

  const handeChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    })
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    const { maPhim, maRap, giaVe, ngayChieu, gioChieu } = state;
    const thongtin = {
      maPhim: parseInt(maPhim),
      maRap: parseInt(maRap),
      giaVe: parseInt(giaVe),
      ngayChieuGioChieu: `${ngayChieu} ${gioChieu}`
    }
    console.log('thongtin', thongtin);
    qLyAdminService
      .taoLichChieu(thongtin)
      .then(result => {
        swal({
          title: "Tạo Lịch Chiếu Phim thành Công",
          icon: "success",
          button: "OK"
        })
      })
      .catch((err) => {
        swal({
          title: err.response.data,
          text: "Không đúng định dạng ngày giờ (dd/mm/yyy 00:00:00)",
          icon: "warning",
          button: "OK",
        });
      })


  }
  //console.log(state);

  //let index = 0;
  return (
    <div>
      <div className="content">
        <div className="header">
          <h5 className="title">Thông Tin Lịch Chiếu Phim Của The {movieShedule.tenPhim}</h5>
        </div>
        <div className="body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-5">
                <div className="form-group">
                  <select
                    name="heThongRap"
                    onChange={layMaHeThongRap}
                  >
                    <option value="#">--Chọn Hệ Thống Rạp</option>
                    {renderHeThongRap()}
                  </select>
                </div>
                <div className="form-group">
                  <select name="cumRap" onChange={layDanhSachRap}>
                    <option value="#">--Chọn Cụm Rạp</option>
                    {renderCumRap()}
                  </select>
                </div>

                <div className="form-group">
                  <select name="maRap" onChange={handeChange}>
                    <option value="#">--Chọn Rạp</option>
                    {renderRap()}
                  </select>
                </div>
                <div className="float-right" style={{ width: 250, height: 150 }}>
                  <img src={movieShedule.hinhAnh} style={{ width: "100 %" }} />
                </div>
              </div>

              <div className="col-7">
                <div className="form-group">
                  <label>Chọn ngày chiếu</label>
                  <input name="ngayChieu" type="text" className="form-control" onChange={handeChange} />
                </div>
                <div className="form-group">
                  <label>Chọn giờ chiếu</label>
                  <input name="gioChieu" type="text" className="form-control" onChange={handeChange} />
                </div>
                <div className="form-group">
                  <label>Giá vé</label>
                  <div className="input-group">
                    <input name="giaVe" type="number" className="form-control" onChange={handeChange} />
                    <div className="input-group-append">
                      <span className="input-group-text">VNĐ</span>
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn btn-success">Tạo Lịch Chiếu</button>
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
            <hr />

            {renderTable()}

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
