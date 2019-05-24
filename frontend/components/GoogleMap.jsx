import React from "react";

class GoogleMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 40.7638,
      lng: -73.9918181
    };
    this.markers = {};
    this.geocoder = new google.maps.Geocoder();
  }

  componentDidMount() {
    this.map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: this.state
    });
    if (this.props.addresses) {
      this.updateMarkers(this.props.addresses);
    }
  }

  componentDidUpdate() {
    if (!this.props.addresses) {
      const currentAddress = this.props.address;

      const options = {
        componentRestrictions: { country: "usa" }
      };

      this.geocoder.geocode(
        { address: currentAddress },
        function(results, status) {
          if (status == "OK") {
            this.map.setCenter(results[0].geometry.location);
            this.marker = new google.maps.Marker({
              map: this.map,
              position: results[0].geometry.location
            });
          }
        }.bind(this)
      );
    } else {
      this.updateMarkers(this.props.restaurants);
    }
  }

  updateMarkers(restaurants) {
    restaurants.forEach(restaurant =>
      this.createMarkersFromAddress(restaurant)
    );
  }

  renderPrice(num) {
    let price = "";

    for (let i = 0; i < num; i++) price += "$";

    return price;
  }

  createMarkersFromAddress(input) {
    const markerIcon = {
      path: "M22-48h-45v28h16l6 5 6-5h16z",
      fillColor: "white",
      fillOpacity: 1,
      scale: 0.85,
      labelOrigin: new google.maps.Point(-1, -33),
      strokeColor: "gray"
    };

    const markerLabel = {
      text: `${this.renderPrice(input.price)}`,
      fontWeight: "800",
      fontSize: "12px",
      color: "white"
    };

    this.geocoder.geocode(
      { address: input.address },
      function(r, s) {
        if (s == "OK") {
          this.map.setCenter(r[0].geometry.location);
          let mark = new google.maps.Marker({
            map: this.map,
            addressId: input,
            position: r[0].geometry.location,

            label: markerLabel
          });

          this.markers[input] = mark;
        }
      }.bind(this)
    );
  }

  render() {
    return <div className="map" id="map" />;
  }
}

export default GoogleMap;
