import React from "react";
import { Row, Col } from "react-flexbox-grid";

class RestaurantBrowseRow extends React.Component {
  clickRestaurantRow() {
    // this.props.history.push(`/restaurants/${this.props.restaurant.id}`);
  }
  render() {
    return (
      <Row
        style={{ padding: "10px", cursor: "pointer" }}
        onClick={this.clickRestaurantRow}
      >
        <Col xs={12} sm={3} md={2} lg={1}>
          {/* Image of Restaurant */}
          <img
            style={{ height: 90, width: 90 }}
            src="https://images.happycow.net/venues/1024/14/27/hcmp142747_497146.jpeg"
          />
        </Col>
        <Col xs>
          <Row>
            {/* Name */}
            <div>Quantum Leap</div>
          </Row>
          <Row>
            {/* Category */}
            <div>Vegan</div>
          </Row>
        </Col>
        <Col xs>
          <Row>
            {/* Rating Stars */}
            <div>5 stars</div>
          </Row>
          <Row>
            {/* # of Ratings */}
            <div>3,000 ratings</div>
          </Row>
        </Col>
        <Col xs>
          {/* Price */}
          <div>$$$</div>
        </Col>
      </Row>
    );
  }
}

export default RestaurantBrowseRow;
