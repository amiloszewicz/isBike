import React, { Component } from "react";
import CitiesTable from '../CitiesTable';

import axios from "axios";

import "./style.css";

class SearchBar extends Component {
  state = {
    query: "",
    results: []
  };

  getInfo = () => {
    axios
      .get("https://api.citybik.es/v2/networks")
      .then(response =>
        this.setState({
          results: response.data.networks
        })
      )
      .catch(error => this.setState({ error }));
  };

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        this.getInfo()
      }
    });
  };

  render() {
    return (
      <form>
        <input
          placeholder="Search for city..."
          ref={input => (this.search = input)}
          onChange={this.handleInputChange}
          type="text"
        />
        <CitiesTable results={this.state.results} query={this.state.query}/>
      </form>
    );
  }
}

export default SearchBar;
