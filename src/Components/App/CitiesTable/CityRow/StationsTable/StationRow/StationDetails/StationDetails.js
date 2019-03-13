import React, { Component } from 'react';

class StationMoreDetails extends Component {
  render() {
    return (
      <div>
        <h1>Hilla</h1>
        {/* <p>{this.props.extra.slots}</p> */}
        <p>{this.props.latitude}</p>
        <p>{this.props.longitude}</p>
      </div>
    );
  }
}

export default StationMoreDetails;
