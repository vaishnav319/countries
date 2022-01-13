import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const MapContainer = (props) => {
  return (
    <div className="mr-0">
      <Map
        style={{
          width: "100%",
          height: "50%",
        }}
        google={props.google}
        zoom={6}
        initialCenter={{
          lat: props.lat,
          lng: props.long,
        }}
      />
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.MAP_KEY,
})(MapContainer);
