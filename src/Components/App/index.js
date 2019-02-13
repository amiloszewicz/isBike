import React, { Component } from 'react';

import Header from './Header';
import SearchBar from './SearchBar';

import './style.css';

class App extends Component {
  state = {
    bikeNetworks: [],
    isLoading: false
  };

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch('https://api.citybik.es/v2/networks')
      .catch(error => console.log(error))
      .then(response => response.json())
      .then(response => this.setState({ bikeNetworks: response.networks, isLoading: false }));
  }

  render() {
    const { bikeNetworks, isLoading } = this.state;

    if (isLoading) {
      return <p>Loading...</p>
    }

    return (
      <div>
        <Header />
        <SearchBar />
        <ul>
          {bikeNetworks.map(network => (
            <li key={network.id}>
              <p>{network.location.country}</p>
              <p>{network.location.city}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
