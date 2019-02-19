import React, { Component } from 'react';
import axios from 'axios';

import Header from './Header';
import SearchBar from './SearchBar';

import './style.css';

class App extends Component {
  state = {
    bikeNetworks: [],
    isLoading: false,
    error: false,
    searchQuery: ''
  };

  // componentDidMount() {
  //   this.setState({ isLoading: true });

  //   axios
  //     .get('https://api.citybik.es/v2/networks')
  //     .then(response =>
  //       this.setState({
  //         bikeNetworks: response.data.networks,
  //         isLoading: false
  //       })
  //     )
  //     .catch(error => this.setState({ error, isLoading: false }));
  // }

  handleInputChange = event => {
    const inputText = event.target.value;
    this.setState({
      searchQuery: inputText
    });

    if (inputText.length > 1) {
      this.setState({ isLoading: true });
      axios
        .get('https://api.citybik.es/v2/networks')
        .then(response =>
          this.setState({
            bikeNetworks: response.data.networks,
            isLoading: false
          })
        )
        .catch(error => this.setState({ error, isLoading: false }));
    }
  };

  render() {
    const { bikeNetworks, isLoading, error } = this.state;
    console.log(bikeNetworks);

    return (
      <>
        {error ? (
          <p>{error.message}</p>
        ) : isLoading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <Header />
            <SearchBar handleOnChange={this.handleInputChange} />
            <ul>
              {bikeNetworks.map(network => (
                <li key={network.id}>
                  <p>{network.location.country}</p>
                  <p>{network.location.city}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </>
    );
  }
}

export default App;
