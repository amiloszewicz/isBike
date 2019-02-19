import React, { Component } from 'react';

import './style.css';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <form>
          <input
            placeholder='Search...'
            ref={this.props.inputElement}
            onChange={this.props.handleOnChange}
            type='text'
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
