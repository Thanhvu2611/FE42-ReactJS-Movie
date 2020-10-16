import React from "react";
import Search from "./DetailListMovie/search";
import MovieList from "./DetailListMovie";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

function MovieManagerment(props) {
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
        <div className="col-7">
          {" "}
          <Search />
        </div>
      </div>

      <MovieList />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMovie: () => {
      let action = {
        type: "EditMovieReducer/EDIT_MOVIE_SUCCESS",
        movie: null,
      };
      dispatch(action);
    },
  };
};
export default connect(null, mapDispatchToProps)(MovieManagerment);
