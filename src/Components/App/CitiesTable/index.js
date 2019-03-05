import React, { Component } from 'react';

import CityRow from './CityRow';

import './style.css';

class CitiesTable extends Component {
  render() {
    const networks = this.props.results.map(network => network);
    const queryNetworks = networks.filter(network =>
      network.location.city.includes(this.props.query)
    );

    return (
      <>
        <h2>Cities list:</h2>
        <ul>
          {queryNetworks.map(network => (
            <li key={network.id}>
              <CityRow name={network.location.city} />
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default CitiesTable;
