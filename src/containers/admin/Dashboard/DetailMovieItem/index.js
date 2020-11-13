import React, { useEffect, useState, Fragment } from "react";
import { actFetchMovieSchedule } from "./module/action";
import { connect } from "react-redux";
import { qLyPhimService } from "../../../../services/QuanLyPhimServices";
import Showtime from "./showtime";
import { qLyAdminService } from "../../../../services/QuanLyAdminService";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import swal from "sweetalert";
import Loading from "../../../../components/Loading";
import { MessageSharp } from "@material-ui/icons";

function ListMovieShedule(props) {
  const [state, setState] = useState({
    values: {
      maRap: null,
      ngayChieu: "",
      gioChieu: "",
      giaVe: null,
      maPhim: props.match.params.id,
    },
    errors: {
      // maRap: null,
      ngayChieu: "",
      gioChieu: "",
      giaVe: null,
      maPhim: "",
    },
    validations: {
      // maRap: false,
      ngayChieu: false,
      gioChieu: false,
      giaVe: false,
    },
    loading: true,
  });
  const [formValid, setFormValid] = useState(false);
  const [danhSachHeThongRap, setDanhSachHeThongRap] = useState([]);
  const [danhSachCumRap, setDanhSachCumRap] = useState([]);
  const [ThongLichChieu, setThongLichChieu] = useState([]);

  const id = props.match.params.id;
  useEffect(() => {
    qLyPhimService
      .layThongTinPhim(id)
      .then((res) => {
        setThongLichChieu(res.data);
        setState({ loading: false });
      })
      .catch((err) => {});
  }, [id]);
  useEffect(() => {
    props.fetchMovieSchedule(id);
    qLyPhimService.layHeThongRap().then((result) => {
      setDanhSachHeThongRap(result.data);
    });
    // if (props) {

    //setmovieShedule1(movieShedule);
    // }

    //console.log(props.fetchMovieSchedule(id));
  }, [id]);
  //console.log(ThongLichChieu);
  //const { movieShedule } = props;
  //console.log(movieShedule);
  // useEffect(() => {
  //   setmovieShedule(props.movieShedule);
  // }, []);
  // console.log(movieShedule);
  //const { movieShedule } = useState;
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
        .catch((err) => {
          console.log(err);
        });
    }
  }, [maHeThongRap]);
  const renderTable = () => {
    if (
      ThongLichChieu.heThongRapChieu &&
      ThongLichChieu.heThongRapChieu.length > 0
    ) {
      return ThongLichChieu.heThongRapChieu.map((heThong) => (
        <Showtime heThong={heThong} />
      ));
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

  const [danhSachRap, setDanhSachRap] = useState([]);
  const layDanhSachRap = (event) => {
    let maCumRap = event.target.value;
    if (danhSachCumRap && danhSachCumRap.length > 0) {
      let cumRapTimDuoc = danhSachCumRap.find(
        (cumRap) => cumRap.maCumRap === maCumRap
      );
      console.log(cumRapTimDuoc);

      if (cumRapTimDuoc) {
        if (danhSachRap.length > 0) {
          setDanhSachRap([]);
        }
        setDanhSachRap(cumRapTimDuoc.danhSachRap);
      }
    }
  };

  const renderHeThongRap = () => {
    if (danhSachHeThongRap && danhSachHeThongRap.length > 0) {
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
    if (danhSachCumRap && danhSachCumRap.length > 0) {
      return danhSachCumRap.map((cumRap) => {
        return (
          <option key={cumRap.maCumRap} value={cumRap.maCumRap}>
            {cumRap.tenCumRap}
          </option>
        );
      });
    }
  };
  const renderRap = () => {
    if (danhSachRap && danhSachRap.length > 0) {
      return danhSachRap.map((rap) => {
        return (
          <option key={rap.maRap} value={rap.maRap}>
            {rap.tenRap}
          </option>
        );
      });
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
  //xét validation

  // useEffect(() => {
  //   let { ngayChieu, gioChieu, giaVe } = state.validations;
  //   setFormValid(ngayChieu && gioChieu && giaVe);
  // }, [state]);

  const handeChange = (e) => {
    let { name, value } = e.target;
    setState({
      ...state,

      values: { ...state.values, [name]: value },
    });
  };
  // const handleBlur = (e) => {
  //   const { name, value } = e.target;
  //   const errorMessage = validate(name, value);
  //   setState((state) => {
  //     return {
  //       errors: {
  //         ...state.errors,
  //         [name]: errorMessage,
  //       },
  //     };
  //   });
  // };
  //Validate
  const handleErrors = (e) => {
    let { placeholder, name, value } = e.target;
    //check rỗng
    let mess = value === "" ? placeholder + "không được để trống" : "";
    //check từng ô input đã nhập
    switch (name) {
      // case "maRap":
      //   break;
      case "ngayChieu":
        let ngayPattern = /^[0-2][0-3]:[0-5][0-9]:[0-5][0-9]$/;
        mess =
          value && !value.match(ngayPattern)
            ? placeholder + "Ngày khởi chiếu không đúng định dạng DD/MM/YYYY"
            : mess;
        break;
      case "gioChieu":
        let gioPattern = /^[0-2][0-3]:[0-5][0-9]:[0-5][0-9]$/;
        mess =
          value && !value.match(gioPattern)
            ? placeholder + "Giờ khởi chiếu không đúng định dạng 00:00:00"
            : mess;
        break;
      case "giaVe":
        mess =
          value && value.length < 10000
            ? placeholder + "Phải từ 10000 vnđ trở lên"
            : mess;
        break;

      default:
        break;
    }
    let valid = mess ? false : true;
    setState({
      ...state,
      errors: {
        ...state.errors,
        [name]: mess,
      },
      validations: {
        ...state.validations,
        [name]: valid,
      },
    });
  };

  //Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // let isValid = true;
    // for (let key in state.values) {
    //   const errorMessage = validate(key, state.values[key]);
    //   if (errorMessage) {
    //     isValid = false;
    //   }

    //   setState((state) => {
    //     return {
    //       errors: {
    //         ...state.errors,
    //         [key]: errorMessage,
    //       },
    //     };
    //   });
    // }
    // if (!isValid) return;
    const { maPhim, maRap, giaVe, ngayChieu, gioChieu } = state;
    const thongtin = {
      maPhim: parseInt(maPhim),
      maRap: parseInt(maRap),
      giaVe: parseInt(giaVe),
      ngayChieuGioChieu: `${ngayChieu} ${gioChieu}`,
    };
    //console.log("thongtin", thongtin);
    qLyAdminService
      .taoLichChieu(thongtin)
      .then((result) => {
        swal({
          title: "Tạo Lịch Chiếu Phim thành Công",
          icon: "success",
          button: "OK",
        });
      })
      .catch((err) => {
        swal({
          title: err.response.data,
          text: "Không đúng định dạng ngày giờ (dd/mm/yyy 00:00:00)",
          icon: "warning",
          button: "OK",
        });
      });
  };
  //Eorror
  const renderError = (name) => {
    if (state.errors[name]) {
      return <div className="alert alert-danger">{state.errors[name]}</div>;
    }
    return "";
  };
  //Validate
  // const validate = (name, value) => {
  //   let errorMessage = "";
  //   if (name === "heThongRap") {
  //     errorMessage = !value ? "Bạn chưa chọn hệ thống rạp" : "";
  //   }
  //   if (name === "cumRap") {
  //     errorMessage = !value ? "Bạn chưa chọn cụm rạp" : "";
  //   }
  //   if (name === "maRap") {
  //     errorMessage = !value ? "Bạn chưa chọn rạp" : "";
  //   }
  //   if (name === "ngayChieu") {
  //     if (!value) {
  //       errorMessage = !value ? "Ngày Khởi Chiếu không được để trống" : "";
  //     } else {
  //       const isValid = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(
  //         value
  //       );
  //       errorMessage = !isValid
  //         ? "Ngày khởi chiếu không đúng định dạng DD/MM/YYYY"
  //         : "";
  //     }
  //   }
  //   if (name === "gioChieu") {
  //     if (!value) {
  //       errorMessage = !value ? "Giờ Chiếu không được để trống" : "";
  //     } else {
  //       const isValid = /^[0-2][0-3]:[0-5][0-9]:[0-5][0-9]$/.test(value);
  //       errorMessage = !isValid
  //         ? "Ngày khởi chiếu không đúng định dạng 00:00:00"
  //         : "";
  //     }
  //   }
  //   if (name === "giaVe") {
  //     errorMessage = !value ? "Bạn chưa chọn giá vé" : "";
  //   }
  //   return errorMessage;
  // };

  if (state.loading) return <Loading />;
  //console.log(state);
  //let index = 0;
  return (
    <Container>
      <Paper elevation={3}>
        <div className="container my-1">
          <div className="header py-1">
            <h4 className="title">
              Thông Tin Lịch Chiếu Phim Của Phim {ThongLichChieu.tenPhim}
            </h4>
          </div>
          <div className="body title p-2">
            <form onSubmit={handleSubmit}>
              <div className="row title-label">
                <div className="col-4">
                  <img
                    className="img-thumbnail"
                    src={ThongLichChieu.hinhAnh}
                    style={{
                      width: "100 %",
                      height: 300,
                      backgroundColor: "black",
                    }}
                  />
                </div>
                <div className="col-3">
                  <div className="form-group py-2">
                    <select
                      style={{ width: 200, height: 50 }}
                      name="heThongRap"
                      onChange={layMaHeThongRap}
                      // onBlur={handleErrors}
                      // onKeyUp={handleErrors}
                    >
                      <option value="#">Chọn Hệ Thống Rạp</option>
                      {renderHeThongRap()}
                    </select>
                  </div>
                  <div className="form-group py-2">
                    <select
                      style={{ width: 200, height: 50 }}
                      name="cumRap"
                      onChange={layDanhSachRap}
                    >
                      <option value="#">Chọn Cụm Rạp</option>
                      {renderCumRap()}
                    </select>
                  </div>

                  <div className="form-group py-2">
                    <select
                      style={{ width: 200, height: 50 }}
                      name="maRap"
                      onChange={handeChange}
                      // onBlur={handleErrors}
                      // onKeyUp={handleErrors}
                    >
                      {/* {renderError("maRap")} */}
                      <option value="#">Chọn Rạp</option>
                      {renderRap()}
                    </select>
                  </div>
                </div>

                <div className="col-5">
                  <div className="form-group">
                    <label>Chọn ngày chiếu</label>
                    <input
                      name="ngayChieu"
                      type="text"
                      className="form-control"
                      onChange={handeChange}
                      // onBlur={handleErrors}
                      // onKeyUp={handleErrors}
                    />
                    {/* {renderError("ngayChieu")} */}
                  </div>
                  <div className="form-group">
                    <label>Chọn giờ chiếu</label>
                    <input
                      name="gioChieu"
                      type="text"
                      className="form-control"
                      onChange={handeChange}
                      // onBlur={handleErrors}
                      // onKeyUp={handleErrors}
                    />
                    {/* {renderError("gioChieu")} */}
                  </div>
                  <div className="form-group">
                    <label>Giá vé</label>
                    <div className="input-group">
                      <input
                        name="giaVe"
                        type="number"
                        className="form-control"
                        //value={state.values.giaVe}
                        onChange={handeChange}
                        // onBlur={handleErrors}
                        // onKeyUp={handleErrors}
                        min="10000"
                      />
                      {/* {renderError("giaVe")} */}
                      {/* {state.errors.giaVe && (
                        <div className="alert alert-danger">
                          <span>{state.errors.giaVe}</span>
                        </div>
                      )} */}
                      <div className="input-group-append">
                        <span className="input-group-text">VNĐ</span>
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-success btn-submit"
                    // disabled={!formValid}
                  >
                    Tạo Lịch Chiếu
                  </button>
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
          </div>
          <div>
            <hr />

            {renderTable()}
          </div>
        </div>
      </Paper>
    </Container>
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
