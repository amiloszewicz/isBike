import React, { Component } from 'react';
// import axios from 'axios';

import Header from './Header';
import SearchBar from './SearchBar';
import CitiesTable from './CitiesTable';

import './style.css';

class App extends Component {
  state = {
    // bikeNetworks: [],
    // isLoading: false,
    // error: false,
    // searchCity: ''
  };

  // handleInputChange = event => {
  //   const inputText = event.target.value;
  //   this.setState({
  //     searchCity: inputText
  //   });

  //   if (inputText.length > 1) {
  //     this.setState({ isLoading: true });
  //     axios
  //       .get('https://api.citybik.es/v2/networks')
  //       .then(response =>
  //         this.setState({
  //           bikeNetworks: response.data.networks,
  //           isLoading: false
  //         })
  //       )
  //       .catch(error => this.setState({ error, isLoading: false }));
  //   }
  // };

  render() {
    // const { bikeNetworks, isLoading, error, searchCity } = this.state;
    // console.log(bikeNetworks, searchCity);

    return (
      <>
        {/* {error ? (
          <p>{error.message}</p>
        ) : isLoading ? (
          <p>Loading...</p>
        ) : ( */}
          <div>
            <Header />
            <SearchBar
              // handleInputChange={this.handleInputChange}
              />
            {/* <CitiesTable 
              // bikeNetworks={this.state.bikeNetworks}
              /> */}
          </div>
        {/* )} */}
      </>
    );
  }
}

export default App;
