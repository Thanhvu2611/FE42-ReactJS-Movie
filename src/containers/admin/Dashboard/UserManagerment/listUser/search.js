import React, { Component } from 'react';
import { connect } from "react-redux";


export default class Search extends Component {
  render() {
    return (

      <div className="input-group mb-3" >
        <input type="text" className="form-control" placeholder="Search" onChange={event => { this.props.searchUser(event.target.value) }} />
      </div>

    )
  }
}

