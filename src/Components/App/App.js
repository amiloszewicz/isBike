import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header/Header.js';
import SearchBar from '../SearchBar/SearchBar.js';
import CitiesTable from '../CitiesTable/CitiesTable.js';

class App extends Component {
  state = {
    query: '',
    results: []
  };

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
    return (
      <>
        <Header />
        <SearchBar onChange={this.handleInputChange} />
        <CitiesTable results={this.state.results} query={this.state.query} />
      </>
    );
  }
}

export default App;
