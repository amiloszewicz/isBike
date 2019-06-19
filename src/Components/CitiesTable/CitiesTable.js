import React, { Component } from 'react';
import CityRow from '../CityRow/CityRow.js';

import './CitiesTable.css';

class CitiesTable extends Component {
  render() {
    /**
     * creates new array of networks
     * @param {array} results
     */
    const networks = this.props.results.map(network => network);

    /**
     * Filter @param {array} networks
     * to select @param {object} network
     * with @param {string} query
     * included in city name
     */
    const queryNetworks = networks.filter(network =>
      network.location.city.toLowerCase().includes(this.props.query, 0)
    );

    return (
      <ul className="CitiesTable">
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
