import React, { useEffect, useState } from "react";
import { actFetchMovieSchedule } from "./module/action";
import { connect } from "react-redux";
import MovieSheduleItem from "../../components/movieSheduleItem";
import MovieSheduleInput from "../../components/movieSheduleInput";
import { Dropdown } from "react-bootstrap";


function ListMovieShedule(props) {
  const [cinemaSystem, setCinemaSystem] = useState({
    cinemaSystemName: "Chọn Hệ Thống Rạp",
    cinemaSystemId: "",
  });

  const [cinemaClus, setCinemaClus] = useState({
    cinemaClusName: "Chọn Cụm Rạp",
    cinemaClusId: "",
  })

  const [cinema, setCinema] = useState({
    cinemaName: "Chọn Rạp",
    cinemasId: "",
  })

  useEffect(() => {

    const id = props.match.params.id;
    props.fetchMovieSchedule(id);
    //console.log(props.fetchMovieSchedule(id));

  }, []);

  const renderTable = () => {
    const { movieShedule } = props;

    if (movieShedule.heThongRapChieu && movieShedule.heThongRapChieu.length > 0) {
      //console.log(movieShedule.heThongRapChieu.cumRapChieu);
      return movieShedule.heThongRapChieu.map((movieShowtime) => {
        //console.log(movieShedule)
        return movieShowtime.cumRapChieu.map((showtime) => {

          return showtime.lichChieuPhim.map((show) => {
            return <MovieSheduleItem show={show.maLichChieu} show={show} movieShowtime={movieShowtime} showtime={showtime} />
          })
        })

      });

    }

  };

  const { movieShedule } = props

  const resetState = (value) => {
    switch (value) {
      case "cinemaSystem":
        {
          setCinemaSystem({ cinemaClusId: "", cinemaClusName: "Chọn Hệ Thống Rạp" })
          setCinemaClus({ cinemaClusId: "", cinemaClusName: "Chọn Cụm Rạp" })
          setCinema({ cinemasId: "", cinemaName: "Chọn Rạp" })
        }

        break;
      case "cinemaClus":
        {
          setCinemaClus({ cinemaClusId: "", cinemaClusName: "Chọn Cụm Rạp" })
          setCinema({ cinemasId: "", cinemaName: "Chọn Rạp" })
        }

        break;
      case "cinema":
        {
          setCinema({ cinemasId: "", cinemaName: "Chọn Rạp" })
        }

        break;


      default:
        break;
    }
  }

  const checkCinemaClus = () => {
    if (cinemaSystem.cinemaSystemName === "Chọn Hệ Thống Rạp") {
      return <Dropdown.Item>Hãy chọn hệ thống rạp</Dropdown.Item>;
    } else {
      return renderCinemaClus();
    }
  }

  const checkCinema = () => {
    if (cinemaSystem.cinemaSystemName === "Chọn Hệ Thống Rạp" || cinemaClus.cinemaClusName !== "Chọn Cụm Rạp") {
      return <Dropdown.Item>Hãy chọn hệ thống rạp, Cụm rạp </Dropdown.Item>
    } else {
      return renderCinema();
    }
  }

  const renderCinemaSystem = () => {
    if (movieShedule.heThongRapChieu && movieShedule.heThongRapChieu.length > 0) {
      return movieShedule.heThongRapChieu.map((cinemaSys, index) => {
        return (
          <Dropdown.Item
            onSelect={() => {
              setCinemaSystem({ cinemaSystemName: cinemaSys.tenHeThongRap, cinemaSystemId: cinemaSys.maHeThongRap });
              resetState("cinemaSystem");
            }}
            key={index}>
            {cinemaSys.tenHeThongRap}
          </Dropdown.Item>
        );
      });
    }
  }

  const renderCinemaClus = () => {

    return movieShedule.heThongRapChieu.map((cinemaSys) => {
      return cinemaSys.cumRapChieu.map((cinemaClust, index) => {
        if (cinemaSys.maHeThongRap === cinemaSystem.cinemaSystemId) {
          return (<Dropdown.Item onSelect={() => {
            setCinemaClus({
              cinemaClus: cinemaClust.tenCumRap, cinemaClusId: cinemaClust.maCumRap,
            })
            resetState("cinemaClus");
          }} key={index}>{cinemaClust.tenCumRap}</Dropdown.Item>)
        }
      })
    })

  }

  const renderCinema = () => {

    return movieShedule.heThongRapChieu.map((cinemaSys) => {
      return cinemaSys.cumRapChieu.map((cinemaClust) => {
        return cinemaClust.lichChieuPhim.map((cinemaDetail, index) => {
          if (cinemaSys.maHeThongRap === cinemaSystem.cinemaSystemId && cinemaClust.maCumRap === cinemaClus.setCinemaClusId) {
            return (<Dropdown.Item onSelect={() => {
              setCinema({
                cinemaName: cinemaDetail.tenRap,
                cinemasId: cinemaDetail.maRap
              }); resetState("cinema");
            }} key={index}>{cinemaDetail.tenRap}</Dropdown.Item>)
          }
        })
      })
    })

  }


  // const renderInputHTR = () => {
  //   let index = 0;
  //   const { movieShedule } = props;
  //   if (movieShedule.heThongRapChieu && movieShedule.heThongRapChieu.length > 0) {
  //     return movieShedule.heThongRapChieu.map((movieShowtime) => {
  //       console.log(movieShedule);
  //       index++;
  //       return <option key={index} index={index}
  //         movieShowtime={movieShowtime}>
  //         {/* {which.tenHeThongRap || which.tenCumRap || which.tenRap} */}
  //         {movieShowtime.maHeThongRap}
  //       </option>

  //     });
  //   }
  // };
  // const renderInputCR = () => {
  //   let index = 0;
  //   const { movieShedule } = props;
  //   if (movieShedule.heThongRapChieu && movieShedule.heThongRapChieu.length > 0) {
  //     return movieShedule.heThongRapChieu.map((movieShowtime) => {
  //       console.log(movieShedule);
  //       return movieShowtime.cumRapChieu.map((showtime) => {
  //         index++;
  //         return <option key={index} index={index}
  //           showtime={showtime}
  //         >
  //           {/* {which.tenHeThongRap || which.tenCumRap || which.tenRap} */}
  //           {showtime.tenCumRap}
  //         </option>

  //       })
  //     });
  //   }
  // };
  // const renderInputR = () => {
  //   let index = 0;
  //   const { movieShedule } = props;
  //   if (movieShedule.heThongRapChieu && movieShedule.heThongRapChieu.length > 0) {
  //     return movieShedule.heThongRapChieu.map((movieShowtime) => {
  //       console.log(movieShedule);
  //       return movieShowtime.cumRapChieu.map((showtime) => {
  //         return showtime.lichChieuPhim.map((show) => {
  //           index++;
  //           return <option key={index} index={index}

  //             show={show}
  //           >
  //             {/* {which.tenHeThongRap || which.tenCumRap || which.tenRap} */}
  //             {show.tenRap}
  //           </option>
  //         })
  //       })
  //     });
  //   }
  // };



  //let index = 0;
  return (

    <div>
      <div className="content">
        <div className="header">
          <h5 className="title">Thông Tin Lịch Chiếu Phim Của The Flash</h5>
        </div>
        <div className="body">

          <div className="row">

            {/* {renderInput()} */}


            <div className="col-5">

              <Dropdown>
                <Dropdown.Toggle id="dropdown-cinemaSystem">{cinemaSystem.cinemaSystemName}</Dropdown.Toggle>
                <Dropdown.Menu flip={false}>{renderCinemaSystem()}</Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle id="dropdown-cinemaClus">{cinemaClus.cinemaClusName}</Dropdown.Toggle>
                <Dropdown.Menu flip={false}>{checkCinemaClus()}</Dropdown.Menu>
              </Dropdown>

              <Dropdown>
                <Dropdown.Toggle id="dropdown-cinema">{cinema.cinemaName}</Dropdown.Toggle>
                <Dropdown.Menu flip={false}>{checkCinema()}</Dropdown.Menu>
              </Dropdown>
            </div>
            <form>
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
            </form>
          </div>
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
    </div >
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
