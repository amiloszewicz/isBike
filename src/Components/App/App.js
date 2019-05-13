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
    zoom: 13
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position.coords.latitude, position.coords.longitude);
      this.setState({
        location: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      })
    });
  }

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
        <Map position={position} />
        <Header />
        <SearchBar onChange={this.handleInputChange} />
        <CitiesTable results={this.state.results} query={this.state.query} />
      </>
    );
  }
}

export default App;
