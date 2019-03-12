import React from 'react';
import axios from 'axios';

import StationsTable from './StationsTable';

class CityRow extends React.Component {
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
    return (
      <div onClick={this.getStationsList}>
        {this.props.cityName}
        { (this.state.stations.length > 0) ? (<StationsTable stations={this.state.stations} />) : null }
      </div>
    );
  }
}

export default CityRow;
