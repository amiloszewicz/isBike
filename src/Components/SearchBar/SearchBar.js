import React, { Component, createRef } from "react";

class SearchBar extends Component {
  inputElement = createRef();

  render() {
    return (
      <form>
        <input
          placeholder="City..."
          ref={this.inputElement}
          onChange={this.props.onChange}
          type="text"
          value={this.props.query}
        />
      </form>
    );
  }
}

export default SearchBar;