import React, { useEffect } from 'react';
import { actFetchListMovie } from "./modules/action";
import { connect } from "react-redux";
function MovieItem(props) {
  useEffect(() => {
    props.fetchListMovie();
  }, []);

  return (

    <div>
      {/* <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>
        <button
          className="btn btn-success"
          data-toggle="modal"
          data-target="#modelIdDetailMovie"
        >
          Tạo Lịch Chiếu
          </button>
        <button
          className="btn btn-success"
          data-toggle="modal"
          data-target="#modelIdDetailMovie"
        >
          Sửa
          </button>
        <button className="btn btn-danger">Xóa</button>
      </td> */}
    </ div >
  )
}
const mapStateToProps = state => {
  return {
    listMovie: state.movieReducer.listMovie
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchListMovie: () => {
      dispatch(actFetchListMovie());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieItem)