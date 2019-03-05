import React from 'react';
import axios from 'axios';

class CityRow extends React.Component {
  abc = (e) => {
    console.log(`clicked`);
    console.log(this.props.network);

    axios
      .get(`https://api.citybik.es/v2/networks/${this.props.network.id}`)
      .then(response =>
        console.log(response.data.network.stations)
      )
      .catch(error => this.setState({ error }));
  };

  render() {
    return (
      <p onClick={this.abc}>{this.props.cityName}</p>
    );
  }
}

export default CityRow;
