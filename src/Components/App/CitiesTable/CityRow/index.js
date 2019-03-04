import React from 'react';

class CityRow extends React.Component {
  render() {
    const name = this.props.name;

    return (
      <p>{name}</p>
    )
  }
}

export default CityRow;
