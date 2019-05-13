import React, { Component, createRef } from 'react';

import style from './SearchBar.css';

class SearchBar extends Component {
  inputElement = createRef();

  render() {
    return (
      <form className="SearchBar">
        <input
          placeholder='City...'
          ref={this.inputElement}
          onChange={this.props.onChange}
          type='text'
          value={this.props.query}
        />
      </form>
    );
  }
}

export default SearchBar;
