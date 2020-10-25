import React from 'react';
import { useDispatch } from "react-redux";
import ListUser from './listUser';
import Container from '@material-ui/core/Container';
import Paper from "@material-ui/core/Paper";

import { Link } from "react-router-dom";



export default function UserManagerment(props) {

  return (
    <Container>
      <Paper elevation={3}>
        <Link to="/admin/adduser">
          <button className="btn btn-success">Thêm Người Dùng</button></Link>
        <ListUser />
      </Paper>
    </Container>
  )
}

