import React from "react";

class GoogleMap extends React.Component {
  componentDidMount() {
    const location = { lat: 40.74928, lng: -73.98656 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: location
    });
    const marker = new google.maps.Marker({ position: location, map: map });
  }

  render() {
    return <div id="map" />;
  }
}

export default GoogleMap;
