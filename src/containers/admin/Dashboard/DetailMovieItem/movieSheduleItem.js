import React, { Component } from 'react'

export default class movieSheduleItem extends Component {
  render() {
    const { movieShowtime } = this.props;
    // console.log(this.props);
    return (
      <tr>
        <td>{movieShowtime.maHeThong}</td>
      </tr>
    )
  }
}
