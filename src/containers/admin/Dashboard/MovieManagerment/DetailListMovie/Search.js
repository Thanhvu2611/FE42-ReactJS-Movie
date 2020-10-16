import React, { Component } from "react";
import { connect } from "react-redux";
import { actGetKeyWordListMovie } from "./modules/action";

class Search extends Component {
  render() {
    return (
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          onChange={(event) => {
            this.props.getKeyWordListMovie(event.target.value);
          }}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getKeyWordListMovie: (keyword) => {
      dispatch(actGetKeyWordListMovie(keyword));
    },
  };
};

export default connect(null, mapDispatchToProps)(Search);
