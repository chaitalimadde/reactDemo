import React, { Component } from 'react'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
 

const mapStyles = {
    width: '100%',
    height: '400px'
  }

export class MapContainer extends Component {
  render() {

    return (
      <>
      {
        this.props.lat?
      
      <Map google={this.props.google} 
        zoom={5}
        style={mapStyles}
        initialCenter={{ lat: this.props.lat, lng: this.props.long}}
        className="mapContainerWrapper"
        >
 
        <Marker position={{ lat: this.props.lat, lng: this.props.long}} />

      <style jsx>{`
        .mapContainerWrapper{
          position:relative !important;
        }

        .mapContainerWrapper div:first-child{
          position:relative !important;
        }
    `}</style>
      </Map> :<p></p> }
      </>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyBnTRmQXztSeWopg1lnN-jdWBko2N3Tftw")
})(MapContainer)