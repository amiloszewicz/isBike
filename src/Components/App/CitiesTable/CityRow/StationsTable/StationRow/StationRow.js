import React, { Component } from 'react';

class StationRow extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.stationName}</h3>
        <table>
          <thead>
            <tr>
              <th>Empty slots</th>
              <th>Available bikes</th>
              <th>Update time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.props.emptySlots}</td>
              <td>{this.props.freeBikes}</td>
              <td>{this.props.lastUpdate}</td>
            </tr>
          </tbody>
        </table>
        <button>details</button>
      </div>
    );
  }
}

export default StationRow;
