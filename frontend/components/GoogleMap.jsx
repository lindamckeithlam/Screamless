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
    if (!this.props.restaurants) return;
    this.updateMarkers(this.props.restaurants);
  }

  componentDidUpdate() {
    const oneMarkerLabel = {
      text: `${this.renderPrice(this.props.price)}`,
      fontWeight: "800",
      fontSize: "12px",
      color: "white"
    };
    if (!this.props.restaurants) {
      const currentAddress = this.props.address;

      const options = {
        componentRestrictions: { country: "usa" }
      };

      this.geocoder.geocode({ address: currentAddress }, (results, status) => {
        if (status == "OK") {
          this.map.setCenter(results[0].geometry.location);
          this.marker = new google.maps.Marker({
            map: this.map,
            position: results[0].geometry.location,
            label: oneMarkerLabel
          });
        }
      });
    } else {
      this.updateMarkers(this.props.restaurants);
    }
  }

  updateMarkers(restaurants) {
    restaurants.forEach(restaurant =>
      this.createMarkersFromAddress(restaurant)
    );
  }

  createMarkersFromAddress(input) {
    const markerLabel = {
      text: `${this.renderPrice(input.price)}`,
      fontWeight: "800",
      fontSize: "12px",
      color: "white"
    };

    this.geocoder.geocode({ address: input.address }, (r, s) => {
      if (s == "OK") {
        this.map.setCenter(r[0].geometry.location);
        let mark = new google.maps.Marker({
          map: this.map,
          addressId: input,
          position: r[0].geometry.location,
          label: markerLabel
        });

        this.markers[input.address] = mark;
      }
    });
  }

  renderPrice(num) {
    let price = "";
    for (let i = 0; i < num; i++) price += "$";
    return price;
  }
  render() {
    return <div className="map" id="map" />;
  }
}

export default GoogleMap;
