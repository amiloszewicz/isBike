import React from 'react';

class CityRow extends React.Component {
  render() {
    const location = this.network.location;
    const cityName = location.stocked ? 
    location.city : 
    <p>{
      location.cityName}
    </p>

    return (
      <p>{cityName}</p>
    )
  }
}
