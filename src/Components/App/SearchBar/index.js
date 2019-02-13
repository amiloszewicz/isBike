import React, { Component } from 'react';
import './style.css';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <input type='text' className='input' placeholder='Search...' />
      </div>
    );
  }
}

export default SearchBar;
