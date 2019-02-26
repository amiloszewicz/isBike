import React, { Component } from 'react';
import './style.css'

class CitiesTable extends Component {
  render() {
    return(
      <>
      <h2>Cities list:</h2>
      <ul>
        {/* {this.props.bikeNetworks.map(network => (
          <li key={network.id}>
            <p>{network.location.city}</p>
          </li>
        ))} */}
      </ul>
      </>
    );
  }
}

export default CitiesTable;
