//import React, { useEffect, useState } from "react";
// import MovieItem from "../../../components/movieItem";
// import { actFetchDetailListMovie } from "./modules/action";
// import Loading from "./../../../../../components/Loading";
// import { connect } from "react-redux";
//import { qLyPhimService } from "../../../../../services/QuanLyPhimServices";
//import { qLyAdminService } from "../../../../../services/QuanLyAdminService";


//var moment = require("moment");

// function MovieList(props) {
//   let [danhSachPhim, setDanhSachPhim] = useState([]);
//   useEffect(() => {
//     qLyPhimService
//       .layDanhSachPhim()
//       .then((result) => {
//         setDanhSachPhim(result.data);
//       })
//       .catch((err) => {
//         console.log((err.response.data));
//       })
//   }, []);
//   // const renderDanhSachPhim = () => {
//   //   return danhSachPhim
//   //   //.slice(page * rowsPer)
//   // }
//   useEffect(() => {
//     props.fetchListMovie();
//     // eslint-disable-next-line
//     // console.log(props);
//   }, []);
//   let { listMovie, loading, keyword } = props;
//   //console.log(props);
//   const renderTable = () => {
//     //console.log(listMovie, "search");
//     listMovie = listMovie.filter((item) => {
//       return item.tenPhim.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
//     });

//     if (listMovie && listMovie.length > 0) {
//       return listMovie.map((movie) => {
//         return <MovieItem key={movie.maPhim} movie={movie} />;
//       });
//     }
//   };
//   if (loading) return <Loading />;

//   //Phan Trang
//   // const classes = useStyles();
//   // const [page, setPage] = React.useState(0);
//   // const [rowsPerPage, setRowsPerPage] = React.useState(10);
//   // const handleChangePage = (event, newPage) => {
//   //   setPage(newPage);
//   // };
//   // const handleChangeRowsPerPage = (event) => {
//   //   setRowsPerPage(+event.target.value);
//   //   setPage(0);
//   // };
//   return (
//     <div>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Mã Phim</th>
//             <th>Tên Phim</th>
//             <th>Hình Ảnh</th>
//             <th>Mô Tả</th>
//             <th>Mã Nhóm</th>
//             <th>Ngày Khởi Chiếu</th>
//             <th>Tạo Lịch Chiếu/Sửa/Xóa</th>
//           </tr>
//         </thead>
//         <tbody>{renderTable()}</tbody>
//       </table>
//     </div>
//     // <Paper className={classes.root}>
//     //   <button className="btnAdd" data-toggle="modal" data-target="#addMovieModal" style={{ outline: "none" }}><i className="fa fa-plus"></i></button>
//     // </Paper>
//   );
// }
// const mapStateToProps = (state) => {
//   return {
//     listMovie: state.movieReducer.listMovie,
//     loading: state.movieReducer.loading,
//     keyword: state.movieReducer.keyword,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchListMovie: () => {
//       dispatch(actFetchDetailListMovie());
//     },
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(MovieList);

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import { qLyAdminService } from "../../../../../services/QuanLyAdminService";
import { qLyPhimService } from "../../../../../services/QuanLyPhimServices";
import swal from "sweetalert";

var moment = require("moment");

function createData(maPhim, tenPhim, hinhAnh, moTa, maNhom, ngayKhoiChieu, taoLichChieu) {
  return { maPhim, tenPhim, hinhAnh, moTa, maNhom, ngayKhoiChieu, taoLichChieu };
}
function Movie() {

}

const rows = [
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Donut', 452, 25.0, 51, 4.9),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Honeycomb', 408, 3.2, 87, 6.5),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Jelly Bean', 375, 0.0, 94, 0.0),
  createData('KitKat', 518, 26.0, 65, 7.0),
  createData('Lollipop', 392, 0.2, 98, 0.0),
  createData('Marshmallow', 318, 0, 81, 2.0),
  createData('Nougat', 360, 19.0, 9, 37.0),
  createData('Oreo', 437, 18.0, 63, 4.0)
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: 'maPhim', numeric: false, disablePadding: true, label: 'Mã Phim' },
  { id: 'tenPhim', numeric: true, disablePadding: false, label: 'Tên Phim' },
  { id: 'hinhAnh', numeric: true, disablePadding: false, label: 'Hình Ảnh' },
  { id: 'moTa', numeric: true, disablePadding: false, label: 'Mô Tả' },
  { id: 'maNhom', numeric: true, disablePadding: false, label: 'Mã Nhóm' },
  { id: 'ngayKhoiChieu', numeric: true, disablePadding: false, label: 'Ngày Khởi Chiếu' },
  { id: 'taoLichChieu', numeric: true, disablePadding: false, label: 'Tạo Lịch Chiếu/ Sữa/ Xóa' },
];

function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
        color: theme.palette.secondary.main,
        backgroundColor: lighten(theme.palette.secondary.light, 0.85),
      }
      : {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.secondary.dark,
      },
  title: {
    flex: '1 1 100%',
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {/* {numSelected > 0 ? (
        <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : ( */}
      <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
        Danh Sách Phim
          </Typography>
      {/* )} */}

      {/* {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
          <Tooltip title="Filter list">
            <IconButton aria-label="filter list">
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        )} */}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

export default function EnhancedTable() {
  let [danhSachPhim, setDanhSachPhim] = useState([]);
  useEffect(() => {
    qLyPhimService
      .layDanhSachPhim()
      .then((result) => {
        setDanhSachPhim(result.data);
        console.log(result.data);
      })
      .catch(err => {
        console.log(err.reponse.data);
      })
  }, []);
  const renderDSPhim = () => {
    return danhSachPhim
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map((phim, index) => {
        return (
          <TableRow hover role="checkbox" tabIndex={-1} key={phim.maPhim}>
            <TableCell>{phim.maPhim}</TableCell>
            <TableCell>{phim.tenPhim}</TableCell>
            <TableCell><img style={{ width: 70, height: 90 }} src={phim.hinhAnh} alt={phim.hinhAnh}></img></TableCell>
            <TableCell>{phim.moTa}</TableCell>
            <TableCell>{moment(phim.ngayKhoiChieu).format("DD/MM/YY")}</TableCell>
            <TableCell>{phim.maPhim}</TableCell>
            <TableCell>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div><i className="fa fa-file-movie" />
                </div>
                <div><i className="fa fa-edit" />
                </div>
                <div><i className="fa fa-trash-alt" />
                </div>
              </div>
            </TableCell>
          </TableRow>
        )
      })
  }
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('tenPhim');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              //onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(danhSachPhim, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((phim, index) => {
                  const isItemSelected = isSelected(phim.maPhim);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, phim.maPhim)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={phim.maPhim}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        {/* <Checkbox
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        /> */}
                      </TableCell>
                      <TableCell component="th" id={labelId} scope="row" padding="none">
                        {phim.maPhim}
                      </TableCell>
                      <TableCell align="right">{phim.tenPhim}</TableCell>
                      <TableCell><img style={{ width: 70, height: 90 }} src={phim.hinhAnh} alt={phim.hinhAnh}></img></TableCell>
                      <TableCell align="right">{phim.moTa}</TableCell>
                      <TableCell align="right">{phim.maNhom}</TableCell>
                      <TableCell>{moment(phim.ngayKhoiChieu).format("DD/MM/YY")}</TableCell>
                      <TableCell>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <div><i className="fa fa-file-movie" />
                          </div>
                          <div><i className="fa fa-edit" />
                          </div>
                          <div><i className="fa fa-trash-alt" />
                          </div>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={danhSachPhim.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </div>
  );
}
