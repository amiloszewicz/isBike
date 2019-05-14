import React, { Component } from 'react';

import axios from 'axios';

import Header from '../Header/Header.js';
import SearchBar from '../SearchBar/SearchBar.js';
import CitiesTable from '../CitiesTable/CitiesTable.js';
import Map from '../Map/Map.js';

import './App.css';

class App extends Component {
  state = {
    query: '',
    results: [],
    location: {
      lat: 51.505,
      lng: -0.09
    },
    zoom: 3,
    haveUserLocation: false
  };

  componentDidMount() {
    this.getUserCurrentPosition();
  }

  /**
   * Get users location with the browser
   * @param {number} location.lat
   * @param {number} location.lng
   */
  getUserCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          location: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          },
          haveUserLocation: true,
          zoom: 13
        });
      },
      /**
       * https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API#Fine_tuning_response
       * * Get users location with their IP using an API (if browser fails)
       * @param {number} location.data.longitude
       * @param {number} location.data.longitude
       */
      () => {
        axios
          .get('https://ipapi.co/json')
          .then(location =>
            this.setState({
              location: {
                lat: location.data.longitude,
                lng: location.data.longitude
              },
              haveUserLocation: true,
              zoom: 13
            })
          )
          .catch(error => this.setState({ error }));
      }
    );
  }

  /**
   * Get bikes stations networks using an API
   * @param {object} response.data.networks
   */
  getInfo = () => {
    axios
      .get('https://api.citybik.es/v2/networks')
      .then(response =>
        this.setState({
          results: response.data.networks
        })
      )
      .catch(error => this.setState({ error }));
  };

  /**
   * Set state on text change from form and
   * send results after 2 or more typed letters
   * @param {string} text
   */
  handleInputChange = event => {
    const text = event.target.value;
    this.setState(
      {
        query: text
      },
      () => {
        this.getInfo();
        if (this.state.query.length < 2) {
          this.setState({
            results: []
          });
        } else {
          this.getInfo();
        }
      }
    );
  };

  render() {
    const position = [this.state.location.lat, this.state.location.lng];

    return (
      <>
        <Map
          position={position}
          haveUserLocation={this.state.haveUserLocation}
          zoom={this.state.zoom}
        />
        <Header />
        <SearchBar onChange={this.handleInputChange} />
        <CitiesTable results={this.state.results} query={this.state.query} />
      </>
    );
  }
}

export default App;
