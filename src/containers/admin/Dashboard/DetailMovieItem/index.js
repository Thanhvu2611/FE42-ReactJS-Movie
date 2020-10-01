import React, { useEffect } from "react";
import { actFetchMovieSchedule } from "./module/action";
import { connect } from "react-redux";
import MovieSheduleItem from "../../components/movieSheduleItem";
import MovieSheduleInput from "../../components/movieSheduleInput";


function ListMovieShedule(props) {

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

  const renderInputHTR = () => {
    let index = 0;
    const { movieShedule } = props;
    if (movieShedule.heThongRapChieu && movieShedule.heThongRapChieu.length > 0) {
      return movieShedule.heThongRapChieu.map((movieShowtime) => {
        console.log(movieShedule);
        return movieShowtime.cumRapChieu.map((showtime) => {
          return showtime.lichChieuPhim.map((show) => {
            index++;
            return <option key={index} index={index}

              show={show} movieShowtime={movieShowtime} showtime={showtime}
            >
              {/* {which.tenHeThongRap || which.tenCumRap || which.tenRap} */}
              {movieShowtime.tenHeThongRap}
            </option>
          })
        })
      });
    }
  };
  const renderInputCR = () => {
    let index = 0;
    const { movieShedule } = props;
    if (movieShedule.heThongRapChieu && movieShedule.heThongRapChieu.length > 0) {
      return movieShedule.heThongRapChieu.map((movieShowtime) => {
        console.log(movieShedule);
        return movieShowtime.cumRapChieu.map((showtime) => {
          return showtime.lichChieuPhim.map((show) => {
            index++;
            return <option key={index} index={index}

              show={show} movieShowtime={movieShowtime} showtime={showtime}
            >
              {/* {which.tenHeThongRap || which.tenCumRap || which.tenRap} */}
              {showtime.tenCumRap}
            </option>
          })
        })
      });
    }
  };
  const renderInputR = () => {
    let index = 0;
    const { movieShedule } = props;
    if (movieShedule.heThongRapChieu && movieShedule.heThongRapChieu.length > 0) {
      return movieShedule.heThongRapChieu.map((movieShowtime) => {
        console.log(movieShedule);
        return movieShowtime.cumRapChieu.map((showtime) => {
          return showtime.lichChieuPhim.map((show) => {
            index++;
            return <option key={index} index={index}

              show={show} movieShowtime={movieShowtime} showtime={showtime}
            >
              {/* {which.tenHeThongRap || which.tenCumRap || which.tenRap} */}
              {show.tenRap}
            </option>
          })
        })
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

              {/* {renderInput()} */}


              <div className="col-5">
                <div className="form-group">
                  <label>Chọn Hệ Thống Rạp</label>
                  <select className="form-control">
                    {renderInputHTR()}
                  </select>
                </div>
                <div className="form-group">
                  <label>Chọn Cụm rạp</label>
                  <select className="form-control">
                    {renderInputCR()}
                  </select>
                </div>
                <div className="form-group">
                  <label>Chọn rạp</label>
                  <select className="form-control">
                    {renderInputR()}
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
            {/* <div>
              <button type="submit" className="btn btn-success">
                Submit
              </button>
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
            </div> */}
          </form>
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
