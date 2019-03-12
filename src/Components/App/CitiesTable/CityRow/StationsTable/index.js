import React from 'react';
import axios from 'axios';

class StationsTable extends React.Component {
  state = {
    stations: []
  };

  getStationsList = () => {
    axios
      .get(`https://api.citybik.es/v2/networks/${this.props.network.id}`)
      .then(response =>
        this.setState({
          stations: response.data.network.stations
        })
      )
      .catch(error => this.setState({ error }));
  };

  render() {
    const stations = this.state.stations;

    return (
      <>
        <p onClick={this.getStationsList}>{this.props.cityName}</p>
        <ul>
          {stations.map(station => (
            <li key={station.id}>{station.name}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default StationsTable;
