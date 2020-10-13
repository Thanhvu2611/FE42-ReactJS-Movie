import React, { useEffect, useState } from "react";
import MovieItem from "../../../components/movieItem";
import { actFetchDetailListMovie } from "./modules/action";
import Loading from "./../../../../../components/Loading";
import { connect } from "react-redux";
import { qLyPhimService } from "../../../../../services/QuanLyPhimServices";

//MaterialUI
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";


var moment = require("moment");

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 600
    ,
  }
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#e1f5fe",
    color: theme.palette.common.black,
  }, body: {
    fontSize: 14,
  }
}))(TableCell);

function MovieList(props) {
  let [danhSachPhim, setDanhSachPhim] = useState([]);
  useEffect(() => {
    qLyPhimService
      .layDanhSachPhim()
      .then((result) => {
        setDanhSachPhim(result.data);
      })
      .catch((err) => {
        console.log((err.response.data));
      })
  }, []);
  // const renderDanhSachPhim = () => {
  //   return danhSachPhim
  //   //.slice(page * rowsPer)
  // }
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

  //Phan Trang
  // const classes = useStyles();
  // const [page, setPage] = React.useState(0);
  // const [rowsPerPage, setRowsPerPage] = React.useState(10);
  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };
  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(+event.target.value);
  //   setPage(0);
  // };
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
    // <Paper className={classes.root}>
    //   <button className="btnAdd" data-toggle="modal" data-target="#addMovieModal" style={{ outline: "none" }}><i className="fa fa-plus"></i></button>
    // </Paper>
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
