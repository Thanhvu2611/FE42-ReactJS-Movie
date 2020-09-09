import React, { Component } from 'react';
import { connect } from "react-redux";
import { actSearchUserRequest, actSearchUserSucess } from "./module/action";

class Search extends Component {
  render() {
    return (

      <div className="input-group mb-3" >
        <input type="text" className="form-control" placeholder="Search" onChange={event => { this.props.searchUser(event.target.value) }} />
        <div className="input-group-append">
          <button className="btn btn-success" type="submit">Search</button>
        </div>
      </div>

    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchUser: (keyword) => {
      dispatch(actSearchUserSucess(keyword));
      console.log(1);
    }
  }
}

export default connect(null, mapDispatchToProps)(Search);
