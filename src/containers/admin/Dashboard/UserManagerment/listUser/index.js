// import React, { useEffect } from 'react';
// import { connect } from "react-redux";
// import UserItem from "../../../components/userItem";
// import { actFetchUser, actSearchUserRequest } from "./module/action";
// import Loading from '../../../../../components/Loading';

// function ListUser(props) {
//   useEffect(() => {
//     props.fetchUser();
//     // eslint-disable-next-line
//     //console.log(props);
//   }, []);
//   let { user, loading, keyword } = props;
//   const renderUser = () => {
//     user = user.filter((item) => {
//       return item.taiKhoan.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
//     });

//     if (user && user.length > 0) {
//       return user.map((user, index) => {
//         return <UserItem key={user.taiKhoan} user={user} index={index} />
//       });
//     }
//   };

//   if (loading) return <Loading />

//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th>STT</th>
//             <th>Tài Khoản</th>
//             <th>Mật Khẩu</th>
//             <th>Họ Tên</th>
//             <th>Email</th>
//             <th>Số Điện Thoại</th>
//             <th>Thao Tác</th>
//           </tr>
//         </thead>
//         <tbody>{renderUser()}</tbody>
//       </table>
//     </div>
//   )
// }

// const mapStateToProps = (state) => {
//   return {
//     user: state.userReducer.user,
//     loading: state.userReducer.loading,
//     keyword: state.userReducer.keyword,
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchUser: () => {
//       dispatch(actFetchUser());
//     },
//     // searchUser: (user) => {
//     //   dispatch(actSearchUserRequest(user));
//     // }
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ListUser)
import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles, fade } from '@material-ui/core/styles';
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
import Tooltip from '@material-ui/core/Tooltip';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { qLyAdminService } from "../../../../../services/QuanLyAdminService";

import swal from "sweetalert";


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
  { id: 'index', numeric: false, disablePadding: true, label: 'STT', },
  { id: 'taiKhoan', numeric: true, disablePadding: false, label: 'Tài Khoản' },
  { id: 'matKhau', numeric: true, disablePadding: false, label: 'Mật Khẩu' },
  { id: 'hoTen', numeric: true, disablePadding: false, label: 'Họ Tên' },
  { id: 'email', numeric: true, disablePadding: false, label: 'Email' },
  { id: 'soDt', numeric: true, disablePadding: false, label: 'Số Điện Thoại' },
  { id: 'thaoTac', numeric: true, disablePadding: false, label: 'Thao Tác' },
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
            align={headCell.numeric ? 'center' : 'left'}
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
    paddingLeft: theme.spacing(1),
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
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }, inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '40ch',
      },
    },
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
      <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
        Danh Sách Người Dùng
          </Typography>
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
    marginBottom: theme.spacing(1),
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
    top: 10,
    width: 1,
  },
}));

export default function EnhancedTable(props) {
  let [listNguoiDung, setListNguoiDung] = useState([]);
  useEffect(() => {
    qLyAdminService
      .layDanhSachNguoiDung()
      .then((result) => {
        setListNguoiDung(result.data);
        console.log(result.data);
      })
      .catch(err => {
        console.log(err.reponse.data);
      });
  }, []);
  const [searchTerm, setSearchTerm] = useState("");
  const [danhSachNguoiDung, setDanhSachNguoiDung] = useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const results = listNguoiDung.filter((nguoiDung) => {
      return nguoiDung.taiKhoan
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    });
    setDanhSachNguoiDung(results);
  }, [searchTerm, listNguoiDung]);

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

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, listNguoiDung.length - page * rowsPerPage);

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
              rowCount={listNguoiDung.length}
            />
            <TableBody>
              {stableSort(listNguoiDung, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((user, index) => {
                  const isItemSelected = isSelected(user.taiKhoan);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, user.taiKhoan)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={user.taiKhoan}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                      </TableCell>
                      <TableCell component="th" id={labelId} scope="row" padding="none">
                        {index + 1}
                      </TableCell>
                      <TableCell align="left">{user.taiKhoan}</TableCell>
                      <TableCell align="left">{user.matKhau}</TableCell>
                      <TableCell align="left">{user.hoTen}</TableCell>
                      <TableCell align="left">{user.email}</TableCell>
                      <TableCell align="left">{user.soDt}</TableCell>
                      <TableCell>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <Tooltip title="Cập Nhật Thông Tin Người Dùng"><Link to={`/admin/adduser/${user.taiKhoan}`}><i className="fa fa-edit" />
                          </Link></Tooltip>
                          <Tooltip title="Xóa Người Dùng"><div><i style={{ cursor: "pointer", color: "#fb4226" }} className="fa fa-trash-alt"
                            onClick={() => {
                              swal({
                                title: "Bạn chắc chứ?",
                                text: `Xóa ${user.taiKhoan}`,
                                icon: "warning",
                                buttons: true,
                                dangerMode: true,
                              }).then((willDelete) => {
                                if (willDelete) {
                                  qLyAdminService
                                    .xoaNguoiDung(user.taiKhoan)
                                    .then((res) => {
                                      swal({
                                        title: `Xóa ${user.taiKhoan} thành công`,
                                        icon: "success",
                                        buttons: "OK",
                                      });

                                      qLyAdminService
                                        .layDanhSachNguoiDung()
                                        .then((result) => {
                                          setListNguoiDung(result.data);
                                        })
                                        .catch((err) => {
                                          console.log(err.response.data);
                                        });
                                    })
                                    .catch((err) => {
                                      swal({
                                        title: `Xóa ${user.taiKhoan} không thành công`,
                                        icon: "warning",
                                        buttons: "OK",
                                      })
                                    });
                                }
                              });
                            }} />
                          </div></Tooltip>
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
          count={listNguoiDung.length}
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
    </div >
  );
}
