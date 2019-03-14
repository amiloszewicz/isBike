import React, { Component } from 'react';
import StationDetails from './StationDetails/StationDetails.js';

class StationRow extends Component {
  state = {
    showDetails: false
  };

  showDetails = () => {
    this.setState(prevState => ({
      showDetails: !prevState.showDetails
    }));
  };

  render() {
    return (
      <>
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
        <button type='button' onClick={this.showDetails}>
          more
        </button>
        {this.state.showDetails === true ? (
          <StationDetails
            allSlots={this.props.allSlots}
            latitude={this.props.latitude}
            longitude={this.props.longitude}
          />
        ) : (
          true
        )}
      </>
    );
  }
}

export default StationRow;
