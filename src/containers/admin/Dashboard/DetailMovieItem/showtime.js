import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableFooter from '@material-ui/core/TableFooter';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}


const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function Showtime(props) {
  const classes = useStyles();
  const { heThong } = props;
  //console.log(movieShowtime);
  let tongSoRow = null;

  return (

    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Mã Lịch Chiếu</StyledTableCell>
            <StyledTableCell>Hệ Thống</StyledTableCell>
            <StyledTableCell>Cụm Rạp</StyledTableCell>
            <StyledTableCell>Ngày Giờ Chiếu</StyledTableCell>
            <StyledTableCell>Giá</StyledTableCell>
            <StyledTableCell>Thời Lượng</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            heThong.cumRapChieu.map((cumrap) => (
              cumrap.lichChieuPhim.map((lichchieu) => (
                <StyledTableRow key={lichchieu.maLichChieu}>
                  <StyledTableCell >{lichchieu.maLichChieu}</StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    <img src={heThong.logo} alt={heThong.tenHeThongRap} style={{ width: 50, height: 50 }} />
                  </StyledTableCell>
                  <StyledTableCell>{cumrap.tenCumRap}</StyledTableCell>
                  <StyledTableCell>{lichchieu.ngayChieuGioChieu}</StyledTableCell>
                  <StyledTableCell>{lichchieu.giaVe}</StyledTableCell>
                  <StyledTableCell>{lichchieu.thoiLuong} ph</StyledTableCell>
                </StyledTableRow>
              ))
            )

            )

          }
        </TableBody>
        {/* <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter> */}
      </Table>
    </TableContainer>
  );
}
