import React, { Component } from 'react';
import { Map as LeafletMap, TileLayer, Marker, Popup, ZoomControl  } from 'react-leaflet';

import './Map.css';

class Map extends Component {
  render() {
    return (
      <LeafletMap
        center={this.props.userLocation}
        zoom={this.props.zoom}
        maxZoom={10}
        attributionControl={true}
        zoomControl={false}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >
        <ZoomControl position="bottomright" />
        <TileLayer url='http://{s}.tile.osm.org/{z}/{x}/{y}.png' />
        {this.props.haveUserLocation ? (
          <Marker position={this.props.userLocation}>
            <Popup>Popup for any custom information.</Popup>
          </Marker>
        ) : (
            ''
          )}
      </LeafletMap>
    );
  }
}

export default Map;
