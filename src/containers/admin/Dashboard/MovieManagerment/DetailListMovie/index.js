
// import React, { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";
// import PropTypes from 'prop-types';
// import clsx from 'clsx';
// import { lighten, makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TablePagination from '@material-ui/core/TablePagination';
// import TableRow from '@material-ui/core/TableRow';
// import TableSortLabel from '@material-ui/core/TableSortLabel';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Paper from '@material-ui/core/Paper';
// import Tooltip from '@material-ui/core/Tooltip';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Switch from '@material-ui/core/Switch';
// import { qLyAdminService } from "../../../../../services/QuanLyAdminService";
// import { qLyPhimService } from "../../../../../services/QuanLyPhimServices";
// import swal from "sweetalert";


// var moment = require("moment");

// function descendingComparator(a, b, orderBy) {
//   if (b[orderBy] < a[orderBy]) {
//     return -1;
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1;
//   }
//   return 0;
// }

// function getComparator(order, orderBy) {
//   return order === 'desc'
//     ? (a, b) => descendingComparator(a, b, orderBy)
//     : (a, b) => -descendingComparator(a, b, orderBy);
// }

// function stableSort(array, comparator) {
//   const stabilizedThis = array.map((el, index) => [el, index]);
//   stabilizedThis.sort((a, b) => {
//     const order = comparator(a[0], b[0]);
//     if (order !== 0) return order;
//     return a[1] - b[1];
//   });
//   return stabilizedThis.map((el) => el[0]);
// }

// const headCells = [
//   { id: 'maPhim', numeric: false, disablePadding: true, label: 'Mã Phim', },
//   { id: 'tenPhim', numeric: true, disablePadding: false, label: 'Tên Phim' },
//   { id: 'hinhAnh', numeric: true, disablePadding: false, label: 'Hình Ảnh' },
//   { id: 'moTa', numeric: true, disablePadding: false, label: 'Mô Tả' },
//   { id: 'maNhom', numeric: true, disablePadding: false, label: 'Mã Nhóm' },
//   { id: 'ngayKhoiChieu', numeric: true, disablePadding: false, label: 'Ngày Khởi Chiếu' },
//   { id: 'taoLichChieu', numeric: true, disablePadding: false, label: 'Tạo Lịch Chiếu/ Sữa/ Xóa' },
// ];

// function EnhancedTableHead(props) {
//   const { classes, order, orderBy, onRequestSort } = props;
//   const createSortHandler = (property) => (event) => {
//     onRequestSort(event, property);
//   };

//   return (
//     <TableHead>
//       <TableRow>
//         <TableCell padding="checkbox">
//         </TableCell>
//         {headCells.map((headCell) => (
//           <TableCell
//             key={headCell.id}
//             align={headCell.numeric ? 'center' : 'left'}
//             padding={headCell.disablePadding ? 'none' : 'default'}
//             sortDirection={orderBy === headCell.id ? order : false}
//           >
//             <TableSortLabel
//               active={orderBy === headCell.id}
//               direction={orderBy === headCell.id ? order : 'asc'}
//               onClick={createSortHandler(headCell.id)}
//             >
//               {headCell.label}
//               {orderBy === headCell.id ? (
//                 <span className={classes.visuallyHidden}>
//                   {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
//                 </span>
//               ) : null}
//             </TableSortLabel>
//           </TableCell>
//         ))}
//       </TableRow>
//     </TableHead>
//   );
// }

// EnhancedTableHead.propTypes = {
//   classes: PropTypes.object.isRequired,
//   numSelected: PropTypes.number.isRequired,
//   onRequestSort: PropTypes.func.isRequired,
//   onSelectAllClick: PropTypes.func.isRequired,
//   order: PropTypes.oneOf(['asc', 'desc']).isRequired,
//   orderBy: PropTypes.string.isRequired,
//   rowCount: PropTypes.number.isRequired,
// };

// const useToolbarStyles = makeStyles((theme) => ({
//   root: {
//     paddingLeft: theme.spacing(1),
//     paddingRight: theme.spacing(1),
//   },
//   highlight:
//     theme.palette.type === 'light'
//       ? {
//         color: theme.palette.secondary.main,
//         backgroundColor: lighten(theme.palette.secondary.light, 0.85),
//       }
//       : {
//         color: theme.palette.text.primary,
//         backgroundColor: theme.palette.secondary.dark,
//       },
//   title: {
//     flex: '1 1 100%',
//   },
// }));

// const EnhancedTableToolbar = (props) => {
//   const classes = useToolbarStyles();
//   const { numSelected } = props;

//   return (
//     <Toolbar
//       className={clsx(classes.root, {
//         [classes.highlight]: numSelected > 0,
//       })}
//     >
//       <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
//         Danh Sách Phim
//           </Typography>
//     </Toolbar>
//   );
// };

// EnhancedTableToolbar.propTypes = {
//   numSelected: PropTypes.number.isRequired,
// };

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//   },
//   paper: {
//     width: '100%',
//     marginBottom: theme.spacing(1),
//   },
//   table: {
//     minWidth: 750,
//   },
//   visuallyHidden: {
//     border: 0,
//     clip: 'rect(0 0 0 0)',
//     height: 1,
//     margin: -1,
//     overflow: 'hidden',
//     padding: 0,
//     position: 'absolute',
//     top: 10,
//     width: 1,
//   },
// }));

// export default function EnhancedTable() {
//   let [danhSachPhim, setDanhSachPhim] = useState([]);
//   useEffect(() => {
//     qLyPhimService
//       .layDanhSachPhim()
//       .then((result) => {
//         setDanhSachPhim(result.data);
//         console.log(result.data);
//       })
//       .catch(err => {
//         console.log(err.reponse.data);
//       })
//   }, []);

//   const classes = useStyles();
//   const [order, setOrder] = React.useState('asc');
//   const [orderBy, setOrderBy] = React.useState('tenPhim');
//   const [selected, setSelected] = React.useState([]);
//   const [page, setPage] = React.useState(0);
//   const [dense, setDense] = React.useState(false);
//   const [rowsPerPage, setRowsPerPage] = React.useState(5);

//   const handleRequestSort = (event, property) => {
//     const isAsc = orderBy === property && order === 'asc';
//     setOrder(isAsc ? 'desc' : 'asc');
//     setOrderBy(property);
//   };

//   const handleClick = (event, name) => {
//     const selectedIndex = selected.indexOf(name);
//     let newSelected = [];

//     if (selectedIndex === -1) {
//       newSelected = newSelected.concat(selected, name);
//     } else if (selectedIndex === 0) {
//       newSelected = newSelected.concat(selected.slice(1));
//     } else if (selectedIndex === selected.length - 1) {
//       newSelected = newSelected.concat(selected.slice(0, -1));
//     } else if (selectedIndex > 0) {
//       newSelected = newSelected.concat(
//         selected.slice(0, selectedIndex),
//         selected.slice(selectedIndex + 1),
//       );
//     }

//     setSelected(newSelected);
//   };

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const handleChangeDense = (event) => {
//     setDense(event.target.checked);
//   };

//   const isSelected = (name) => selected.indexOf(name) !== -1;

//   const emptyRows = rowsPerPage - Math.min(rowsPerPage, danhSachPhim.length - page * rowsPerPage);


//   return (
//     <div classname="{classes.root}">


//       <Paper className={classes.paper}>
//         <EnhancedTableToolbar numSelected={selected.length} />
//         <TableContainer>
//           <Table
//             className={classes.table}
//             aria-labelledby="tableTitle"
//             size={dense ? 'small' : 'medium'}
//             aria-label="enhanced table"
//           >
//             <EnhancedTableHead
//               classes={classes}
//               numSelected={selected.length}
//               order={order}
//               orderBy={orderBy}
//               onRequestSort={handleRequestSort}
//               rowCount={danhSachPhim.length}
//             />
//             <TableBody>

//               {stableSort(danhSachPhim, getComparator(order, orderBy))
//                 .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                 .map((phim, index) => {
//                   const isItemSelected = isSelected(phim.maPhim);
//                   const labelId = `enhanced-table-checkbox-${index}`;

//                   return (
//                     <TableRow
//                       hover
//                       onClick={(event) => handleClick(event, phim.maPhim)}
//                       role="checkbox"
//                       aria-checked={isItemSelected}
//                       tabIndex={-1}
//                       key={phim.maPhim}
//                       selected={isItemSelected}
//                     >
//                       <TableCell padding="checkbox">
//                       </TableCell>
//                       <TableCell component="th" id={labelId} scope="row" padding="none">
//                         {phim.maPhim}
//                       </TableCell>
//                       <TableCell align="left">{phim.tenPhim}</TableCell>
//                       <TableCell><img style={{ width: 70, height: 90 }} src={phim.hinhAnh} alt={phim.hinhAnh}></img></TableCell>
//                       <TableCell align="left">{phim.moTa}</TableCell>
//                       <TableCell align="left">{phim.maNhom}</TableCell>
//                       <TableCell>{moment(phim.ngayKhoiChieu).format("DD/MM/YY")}</TableCell>
//                       <TableCell>
// <div style={{ display: "flex", justifyContent: "space-between" }}>
//   <Tooltip title="Tạo Lịch Chiếu"><Link to={`/admin/detail/${phim.maPhim}`}><i class="fas fa-video" />
//   </Link></Tooltip>
//   <Tooltip title="Sửa Phim"><Link to={`/admin/addmovie/${phim.maPhim}`}><i className="fa fa-edit" />
//   </Link></Tooltip>
//   <Tooltip title="Xóa Phim"><div><i style={{ cursor: "pointer", color: "#fb4226" }} className="fa fa-trash-alt"
//     onClick={() => {
//       swal({
//         title: "Bạn chắc chứ?",
//         text: `Xóa phim ${phim.tenPhim}`,
//         icon: "warning",
//         buttons: true,
//         dangerMode: true,
//       }).then((willDelete) => {
//         if (willDelete) {
//           qLyAdminService
//             .xoaPhim(phim.maPhim)
//             .then((res) => {
//               swal({
//                 title: "Xóa phim thành công",
//                 icon: "success",
//                 buttons: "OK",
//               });

//               qLyPhimService
//                 .layDanhSachPhim()
//                 .then((result) => {
//                   setDanhSachPhim(result.data);
//                 })
//                 .catch((err) => {
//                   console.log(err.response.data);
//                 });
//             })
//             .catch((err) => {
//               swal({
//                 title: "Xóa Phim không thành công",
//                 icon: "warning",
//                 buttons: "OK",
//               })
//             });
//         }
//       });
//     }} />
//   </div></Tooltip>
// </div>
//                       </TableCell>
//                     </TableRow>
//                   );
//                 })}
//               {emptyRows > 0 && (
//                 <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
//                   <TableCell colSpan={6} />
//                 </TableRow>
//               )}
//             </TableBody>
//           </Table>
//         </TableContainer>
//         <TablePagination
//           rowsPerPageOptions={[5, 10, 25]}
//           component="div"
//           count={danhSachPhim.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onChangePage={handleChangePage}
//           onChangeRowsPerPage={handleChangeRowsPerPage}
//         />
//       </Paper>
//       <FormControlLabel
//         control={<Switch checked={dense} onChange={handleChangeDense} />}
//         label="Dense padding"
//       />
//     </div>
//   );
// }
import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import Paper from '@material-ui/core/Paper';
import { qLyAdminService } from "../../../../../services/QuanLyAdminService";
import { qLyPhimService } from "../../../../../services/QuanLyPhimServices";
import { showVideo } from "../../../../../assets/js/main";
import ModalVideo from "../../../../../components/Modal/Video";
import Tooltip from '@material-ui/core/Tooltip';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actFetchDeleteMovie } from "./modules/action";
import swal from "sweetalert";
import Loading from "../../../../../components/Loading";


export default function MovieList() {

  let [danhSachPhim, setDanhSachPhim] = useState([]);
  const [loading, setLoading] = useState({ loading: true });
  useEffect(() => {
    showVideo();
  }, [danhSachPhim])
  useEffect(() => {
    qLyPhimService
      .layDanhSachPhim()
      .then((result) => {
        setDanhSachPhim(result.data);
        setLoading(false);
        // console.log(result.data);
      })
      .catch(err => {
        console.log(err.reponse.data);
      })
  }, []);
  const renderMovie = () => {

    if (danhSachPhim && danhSachPhim.length > 0) {
      return danhSachPhim.map((item) => {
        const {
          maPhim,
          tenPhim,
          hinhAnh,
          moTa,
          trailer,
          ngayKhoiChieu
        } = item;
        return {
          hinhAnh: <div style={{ width: 100, height: 50 }}><img src={hinhAnh} alt="img" style={{ width: "100%" }} /></div>,
          maPhim: <span>{maPhim}</span>,
          tenPhim: tenPhim,
          trailer: (
            <a className="video-popup" data-toggle="modal" data-src={trailer} href="#modalVideo"><span className="mb-2 d-inline-block"><br /><i className="fa fa-play-circle" /></span>

            </a>
          ),
          moTa: <div style={{ width: 400, }}>{moTa}</div>,
          ngayKhoiChieu: (
            <span>{new Date(ngayKhoiChieu).toLocaleDateString("en-GB")}</span>
          ),
          taoLichChieu: (
            <>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Tooltip title="Tạo Lịch Chiếu"><Link to={`/admin/detail/${maPhim}`}><i class="fas fa-video" />
                </Link></Tooltip>
                <Tooltip title="Sửa Phim"><Link to={`/admin/addmovie/${maPhim}`}><i className="fa fa-edit" />
                </Link></Tooltip>
                <Tooltip title="Xóa Phim"><div><i style={{ cursor: "pointer", color: "#fb4226" }} className="fa fa-trash-alt"
                  onClick={() => {
                    swal({
                      title: "Bạn chắc chứ?",
                      text: `Xóa phim ${tenPhim}`,
                      icon: "warning",
                      buttons: true,
                      dangerMode: true,
                    }).then((willDelete) => {
                      if (willDelete) {
                        handleDelete(maPhim);
                      }
                    });
                  }} />
                </div></Tooltip>
              </div>
            </>
          )
        }
      })
    }
  }
  const dispatch = useDispatch();
  const handleDelete = (maPhim) => {
    dispatch(actFetchDeleteMovie(maPhim))
    qLyAdminService
      .xoaPhim(maPhim)
      .then((res) => {
        swal({
          title: "Xóa phim thành công",
          icon: "success",
          buttons: "OK",
        });

        qLyPhimService
          .layDanhSachPhim()
          .then((result) => {
            setDanhSachPhim(result.data);
          })
          .catch((err) => {
            console.log(err.response.data);
          });
      })
      .catch((err) => {
        swal({
          title: "Xóa Phim không thành công",
          icon: "warning",
          buttons: "OK",
        })
      });

  }

  if (loading) {
    return <Loading />
  }
  return (
    <Paper>
      <MaterialTable
        title="Quản Lý Phim"
        columns={[
          { title: 'Mã Phim', field: 'maPhim', width: 103 },
          { title: 'Tên Phim', field: 'tenPhim', width: 103 },
          {
            title: 'Hình Ảnh', field: 'hinhAnh', width: 103,
            //render: rowData => (
            // <img style={{ height: 36, width: 50 }} src={rowData.hinhAnh} />
            //)
          },
          { title: 'Mô Tả', field: 'moTa', width: 103 },
          { title: 'Trailer', field: 'trailer', width: 103 },
          { title: 'Ngày Khởi Chiếu', field: 'ngayKhoiChieu', width: 103 },
          { title: 'Tạo Lịch Chiếu', field: 'taoLichChieu', width: 103 },

        ]}
        data={renderMovie()

        }
        options={{
          search: true
        }}

      />
      <ModalVideo />
    </Paper>
  )
}


