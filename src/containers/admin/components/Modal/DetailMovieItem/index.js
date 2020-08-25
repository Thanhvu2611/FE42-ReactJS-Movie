import React, { useState, useEffect } from 'react';
import { actFetchMovieSchedule } from "./module/action";
import { connect } from "react-redux";
import movieSheduleItem from './movieSheduleItem.js';
import Loading from '../../../../../components/Loading';

function ModalMovieShedule(props) {
  // const [state, setState] = useState({ movieShedule: {}, status: true, number: 0 });
  useEffect(() => {
    // console.log(props.fetchMovieSchedule(id));
    // const id = props.match.params.id;

    // props.fetchMovieSchedule(id);
  }, []);
  const { movieShedule, loading } = props;
  const renderTable = () => {
    if (movieShedule.maLichChieu && movieShedule.maLichChieu.length > 0) {
      return movieShedule.maLichChieu.map((movieShowtime) => {
        return <movieSheduleItem key={movieShowtime.maLichChieu} movieShowtime={movieShedule} />
      })
    }
  }

  return (
    <div>
      <div
        className="modal fade"
        id="modelIdDetailMovie"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Thông Tin Lịch Chiếu Phim Của The Flash</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="row">
                  <div className="col-5">
                    <div className="form-group">
                      <label>Chọn Hệ Thống Rạp</label>
                      <select className="form-control">
                        <option>BHD Star Cineplex</option>
                        <option>cgv</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Chọn Cụm rạp</label>
                      <select className="form-control">
                        <option>cụm 1</option>
                        <option>cụm 2</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Chọn rạp</label>
                      <select className="form-control">
                        <option>rạp 1</option>
                        <option>rạp 2</option>
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
                <div>
                  <button type="submit" className="btn btn-success">
                    Submit
                </button>
                  <button type="submit" className="btn btn-danger">
                    Delete
                </button>
                </div>
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
                  <tbody>

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    movieShedule: state.movieSheduleReducer.movieShedule,
    loading: state.movieSheduleReducer.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMovieSchedule: (id) => {
      // console.log(id);
      dispatch(actFetchMovieSchedule(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalMovieShedule);