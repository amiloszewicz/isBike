import React, { Component } from 'react';

class StationDetails extends Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>All slots</th>
              <th>latitude</th>
              <th>longitude</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.props.allSlots}</td>
              <td>{this.props.latitude}</td>
              <td>{this.props.longitude}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default StationDetails;
