import React from 'react';
import StationRow from './StationRow';

class StationsTable extends React.Component {
  render() {
    return (
      <ul>
        {this.props.stations.map(station => (
          <li key={station.id}>
            <StationRow stationName={station.name} />
          </li>
        ))}
      </ul>
    );
  }
}

export default StationsTable;
