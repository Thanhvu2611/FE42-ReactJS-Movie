import React from "react";
import MovieList from "./DetailListMovie";
import Paper from "@material-ui/core/Paper";
import Container from '@material-ui/core/Container';

import { Link } from "react-router-dom";
export default function MovieManagerment(props) {
  return (
    <Container>
      <Paper elevation={3}>
        {/* <div className="row">
          <div className="col-5"> */}
        <Link to="/admin/addmovie">
          <button
            className="btn btn-success"
          >
            ADD MOVIE
            </button>
        </Link>
        {/* </div>
        </div> */}

        <MovieList />
      </Paper>
    </Container>
  );
}