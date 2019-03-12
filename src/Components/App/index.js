import React, { Component } from 'react';
// import axios from 'axios';

import Header from './Header';
import SearchBar from './SearchBar';

import './style.css';

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
