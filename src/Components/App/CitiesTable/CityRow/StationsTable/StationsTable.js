import React, { Component } from 'react';
import StationRow from './StationRow/StationRow.js';

class StationsTable extends Component {
  render() {
    return (
      <ul>
        {this.props.stations.map(station => (
          <li key={station.id}>
            <StationRow
              stationName={station.name}
              emptySlots={station.empty_slots}
              freeBikes={station.free_bikes}
              lastUpdate={station.timestamp}
            />
          </li>
        ))}
      </ul>
    );
  }
}

export default StationsTable;
