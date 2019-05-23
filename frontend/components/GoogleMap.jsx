import React from "react";
import MarkerManager from "./markerManager";
class GoogleMap extends React.Component {
  constructor(props) {
    super(props);
    // this.markerManager = null;

    this.state = {
      lat: this.props.lat || 40.7638,
      lng: this.props.lng || -73.9918181
    };
  }

  componentDidMount() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: this.state
    });

    // this.markerManager = new MarkerManager(map);

    // Add some markers to the map.
    // Note: The code uses the JavaScript Array.prototype.map() method to
    // create an array of markers based on a given "locations" array.
    // The map() method here has nothing to do with the Google Maps API.
  }

  componentDidUpdate() {
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: this.state
    });

    const geocoder = new google.maps.Geocoder();
    const currentAddress = this.props.address;

    const options = {
      componentRestrictions: { country: "usa" }
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

    // if (this.props.addresses) {
    //   var markers = [];
    //   this.props.addresses.forEach((address, i) => {
    //     geocoder.geocode({ address: address }, function(r, s) {
    //       if (s == "OK") {
    //         let marker = new google.maps.Marker({
    //           position: r[0].geometry.location,
    //           label: labels[i % labels.length]
    //         });
    //         markers.push(marker);
    //       }
    //     });
    //   });
    //   var markerCluster = new MarkerClusterer(map, markers, {
    //     imagePath:
    //       "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"
    //   });
    // }
  }

  render() {
    return <div className="map" id="map" />;
  }
}

export default GoogleMap;
