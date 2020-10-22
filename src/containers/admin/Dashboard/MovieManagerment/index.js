import React from "react";
import MovieList from "./DetailListMovie";

import { Link } from "react-router-dom";
export default function MovieManagerment(props) {
  return (
    <div>
      <div className="row">
        <div className="col-5">
          <Link to="/admin/addmovie">
            <button
              className="btn btn-success"
              onClick={() => {
                props.addMovie();
              }}
            >
              ADD MOVIE
            </button>
          </Link>
        </div>
      </div>

      <MovieList />
    </div>
  );
}