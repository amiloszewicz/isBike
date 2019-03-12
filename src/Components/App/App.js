import React, { Component } from 'react';
import Header from './Header/Header.js';
import SearchBar from './SearchBar/SearchBar.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SearchBar />
      </div>
    );
  }
}

export default App;
