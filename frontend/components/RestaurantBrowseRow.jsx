import React from "react";
import { Row, Col } from "react-flexbox-grid";
import { Link } from "react-router-dom";
class RestaurantBrowseRow extends React.Component {
  clickRestaurantRow() {
    // this.props.history.push(`/restaurants/${this.props.restaurant.id}`);
  }

  renderPrice(num) {
    let price = "";

    for (let i = 0; i < num; i++) price += "$";

    return price;
  }
  render() {
    let restaurantIndex = <div />;
    if (this.props.restaurants !== undefined) {
      restaurantIndex = this.props.restaurants.map((r, idx) => (
        <Row
          key={r.name + idx.toString()}
          style={{ padding: "10px", cursor: "pointer" }}
          onClick={this.clickRestaurantRow}
        >
          <Col xs={2}>
            {/* Image of Restaurant */}
            <Link to={`menu/${r.id}`}>
              <img className="restaurant-row-img" src={r.img_url} />
            </Link>
          </Col>
          <Col xs>
            <Row>
              {/* Name */}
              <div>{r.name}</div>
            </Row>
            <Row>
              {/* Category */}
              <div>{r.cuisine_name}</div>
            </Row>
          </Col>
          <Col xs>
            <Row>
              {/* Rating Stars */}
              <div>{`${r.rating.toFixed(2)} stars`}</div>
            </Row>
            <Row>
              {/* # of Ratings */}
              <div> {r.review_count} ratings</div>
            </Row>
          </Col>
          <Col xs>
            {/* Price */}
            <div>{this.renderPrice(r.price)}</div>
          </Col>
        </Row>
      ));
    }

    return <div>{restaurantIndex}</div>;
  }
}

export default RestaurantBrowseRow;
