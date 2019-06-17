import React, { Component } from 'react';
import CityRow from '../CityRow/CityRow.js';

class CitiesTable extends Component {
  render() {
    const networks = this.props.results.map(network => network);
    const queryNetworks = networks.filter(network =>
      network.location.city.toLowerCase().includes(this.props.query, 0)
    );

    return (
      <ul>
        {queryNetworks.map(network => (
          <li key={network.id}>
            <CityRow cityName={network.location.city} network={network} />
          </li>
        ))}
      </ul>
    );
  }
}

export default CitiesTable;
