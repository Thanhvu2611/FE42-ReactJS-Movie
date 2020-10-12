import React, { useEffect } from "react";
import { actFetchMovieNow, actFetchMovieSoon } from "../../redux/action";
import { connect } from "react-redux";

function Movie(props) {
  //ComponentDidMount;
  useEffect(() => {
    props.fetchNowMovie();
    props.fetchSoonMovie();
  }, []);
  let { nowMovie, soonMovie } = props;

  const renderNowPhim = () => {
    if (nowMovie && nowMovie.length > 0) {
      return nowMovie.map((movie) => {
        return (
          <div
            className="col-md-2 col-sm-6 col-xs-12 movies-item  animated fadeInUp"
            key={movie.maPhim}
          >
            <div className="movie-home">
              <img src={movie.hinhAnh} alt />
              <a href="./chitietphim.html">
                <div className="overlay_movie">
                  <div className="overlay_content">
                    <button className="btn btn-muave">MUA VÉ</button>
                  </div>
                </div>
              </a>
            </div>
            <div className="movie-title">
              <p className="movie-name">{movie.tenPhim}</p>
            </div>
          </div>
        );
      });
    }
  };

  const renderSoonPhim = () => {
    if (soonMovie && soonMovie.length > 0) {
      return soonMovie.map((movie) => {
        return (
          <div
            className="col-md-2 col-sm-6 col-xs-12 movies-item  animated fadeInUp"
            key={movie.maPhim}
          >
            <div className="movie-home">
              <img src={movie.hinhAnh} alt />
              <a href="./chitietphim.html">
                <div className="overlay_movie">
                  <div className="overlay_content">
                    <button className="btn btn-muave">CHI TIẾT</button>
                  </div>
                </div>
              </a>
            </div>
            <div className="movie-title">
              <p className="movie-name">{movie.tenPhim}</p>
            </div>
          </div>
        );
      });
    }
  };

  console.log(props);
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
                {renderNowPhim()}
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
                {renderSoonPhim()}
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
const mapStateToProps = (state) => {
  return {
    nowMovie: state.nowMovieReducer.nowMovie,
    soonMovie: state.soonMovieReducer.soonMovie,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchNowMovie: () => {
      dispatch(actFetchMovieNow());
    },
    fetchSoonMovie: () => {
      dispatch(actFetchMovieSoon());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
