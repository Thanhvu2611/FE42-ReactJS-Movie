import React, { useEffect } from "react";
import MovieItem from "../../../components/movieItem";

import { actFetchDetailListMovie } from "./modules/action";
import Loading from "./../../../../../components/Loading";
import { connect } from "react-redux";

function MovieList(props) {
  useEffect(() => {
    props.fetchListMovie();
    // eslint-disable-next-line
    // console.log(props);
  }, []);

  let { listMovie, loading, keyword } = props;
  //console.log(props);
  const renderTable = () => {
    //console.log(listMovie, "search");
    listMovie = listMovie.filter((item) => {
      return item.tenPhim.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    });

    if (listMovie && listMovie.length > 0) {
      return listMovie.map((movie) => {
        return <MovieItem key={movie.maPhim} movie={movie} />;
      });
    }
  };
  if (loading) return <Loading />;

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Mã Phim</th>
            <th>Tên Phim</th>
            <th>Hình Ảnh</th>
            <th>Mô Tả</th>
            <th>Mã Nhóm</th>
            <th>Ngày Khởi Chiếu</th>
            <th>Tạo Lịch Chiếu/Sửa/Xóa</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    listMovie: state.movieReducer.listMovie,
    loading: state.movieReducer.loading,
    keyword: state.movieReducer.keyword,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchListMovie: () => {
      dispatch(actFetchDetailListMovie());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
