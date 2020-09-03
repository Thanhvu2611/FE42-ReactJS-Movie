import React from "react";
import Search from "./DetailListMovie/search";
import MovieList from "./DetailListMovie";

import { Link } from "react-router-dom";
import { connect } from "react-redux";


function MovieManagerment(props) {
  return (
    <div>
      <Link to="/admin/addmovie" onClick={() => { props.addMovie() }}>ADD MOVIE</Link>
      <Search />
      <MovieList />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMovie: () => {
      let action = {
        type: "MovieReducer/EDIT_DETAIL_LISTMOVIE",
        movie: null
      };
      dispatch(action);
    },
  };
};
export default connect(null, mapDispatchToProps)(MovieManagerment);