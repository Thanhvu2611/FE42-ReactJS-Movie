import React from "react";
import Search from "./DetailListMovie/search";
import MovieList from "./DetailListMovie";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

function MovieManagerment(props) {
  return (
    <div>
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
      <Search />
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
