import React, { Component } from 'react';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

import './Map.css';

class Map extends Component {
  render() {
    return (
      <LeafletMap
        center={this.props.position}
        zoom={6}
        maxZoom={10}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >
        <TileLayer url='http://{s}.tile.osm.org/{z}/{x}/{y}.png' />
        <Marker position={this.props.position}>
          <Popup>Popup for any custom information.</Popup>
        </Marker>
      </LeafletMap>
    );
  }
}

export default Map;
