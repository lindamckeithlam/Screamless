import React from "react";

class GoogleMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: this.props.lat || 40.755408,
      lng: this.props.lng || -73.34831
    };
  }

  componentDidMount() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: this.state
    });
  }

  componentDidUpdate() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: this.state
    });

    const geocoder = new google.maps.Geocoder();
    const currentAddress =
      document.getElementById("location_search").value || this.props.address;

    const options = {
      types: ["(cities)"]
    };

    const autocomplete = new google.maps.places.Autocomplete(
      document.getElementById("location_search", options)
    );

    geocoder.geocode({ address: currentAddress }, function(results, status) {
      if (status == "OK") {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
        });
      }
    });
  }

  render() {
    return <div id="map" />;
  }
}

export default GoogleMap;
