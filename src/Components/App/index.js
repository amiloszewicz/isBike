import React, { Component } from 'react';

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

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch('https://api.citybik.es/v2/networks')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong...');
        }
      })
      .then(response =>
        this.setState({ bikeNetworks: response.networks, isLoading: false })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  handleInputChange = event => {
    const InputText = event.target.value;
    console.log(event.target.value);
    this.setState({
      searchQuery: InputText
    });
  };

  render() {
    const { bikeNetworks, isLoading, error } = this.state;

    return (
      <>
        {error ?
        <p>{error.message}</p> : isLoading
        ?<p>Loading...</p> :
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
        }
      </>
    );
  }
}

export default App;
