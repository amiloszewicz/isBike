import React, { Component } from 'react';
import axios from 'axios';
import StationsTable from '../StationsTable/StationsTable.js';

class CityRow extends Component {
  state = {
    stations: [],
    showStationsList: false,
  };

  getStationsList = () => {
    this.setState(prevState => ({
      showStationsList: !prevState.showStationsList
    }));

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
    if (!this.state.stations) {
      return null
    } else {
      return (
        <div onClick={this.getStationsList}>
          {this.props.cityName}
          {this.state.showStationsList === true ? (
            <StationsTable stations={this.state.stations} />
          ) : (
              true
            )}
        </div>
      )
    }
  }
}

export default CityRow;
