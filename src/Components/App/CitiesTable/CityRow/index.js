import React from 'react';
import StationsTable from './StationsTable';

class CityRow extends React.Component {
  render() {
    return (
      <>
        <StationsTable
          cityName={this.props.cityName}
          network={this.props.network}
        />
      </>
    );
  }
}

export default CityRow;
