import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    return (
      <div>
        <div className="input-group mb-3" >
          <input type="text" className="form-control" placeholder="Search" />
          <div className="input-group-append">
            <button className="btn btn-success" type="submit">Search</button>
          </div>
        </div>
      </div>
    )
  }
}
