import React, { Component } from 'react';

import axios from 'axios';

import Header from '../Header/Header.js';
import SearchBar from '../SearchBar/SearchBar.js';
import CitiesTable from '../CitiesTable/CitiesTable.js';
import Map from '../Map/Map.js';
import Counter from '../Counter/Counter.js';

import { connect } from 'react-redux';
import { fetchCityBikesNetworks } from '../../redux/actions/cityBikesAction'

import './App.css';

class App extends Component {
  state = {
    query: '',
    //results: [],
    location: {
      lat: 51.505,
      lng: -0.09
    },
    zoom: 13,
    haveUserLocation: false,
    value: 0
  };

  componentDidMount() {
    //this.getUserCurrentPosition();
    this.props.dispatch(fetchCityBikesNetworks());
  }

  /**
   * Get users location with the browser
   * @param {number} location.lat
   * @param {number} location.lng
   */
  getUserCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition(
      userGeoPosition => {
        this.setState({
          location: {
            lat: userGeoPosition.coords.latitude,
            lng: userGeoPosition.coords.longitude
          },
          haveUserLocation: true,
          zoom: 13
        });
      },
      /**
       * https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API#Fine_tuning_response
       * * Get users location with their IP using an API (if browser fails)
       * @param {number} location.data.latitude
       * @param {number} location.data.longitude
       */
      () => {
        axios
          .get('https://ipapi.co/json')
          .then(userIpLocation =>
            this.setState({
              location: {
                lat: userIpLocation.data.latitude,
                lng: userIpLocation.data.longitude
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
  // getInfo = () => {
  //   axios
  //     .get('https://api.citybik.es/v2/networks')
  //     .then(response =>
  //       this.setState({
  //         results: response.data.networks
  //       })
  //     )
  //     .catch(error => this.setState({ error }));
  // };

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
    const userLocation = [this.state.location.lat, this.state.location.lng];

    return (
      <>
        <Map
          userLocation={userLocation}
          haveUserLocation={this.state.haveUserLocation}
          zoom={this.state.zoom}
        />
        <Header />
        <SearchBar onChange={this.handleInputChange} />
        <CitiesTable results={this.state.results} query={this.state.query} />
        <Counter />
      </>
    );
  }
}

const mapStateToProps = state => ({
  results: state.results
})

export default App;
