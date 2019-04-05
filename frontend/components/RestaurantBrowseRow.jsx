import React from "react";
import { Row, Col } from "react-flexbox-grid";
import { Link } from "react-router-dom";
class RestaurantBrowseRow extends React.Component {
  clickRestaurantRow() {
    // this.props.history.push(`/restaurants/${this.props.restaurant.id}`);
  }
  render() {
    let restaurantIndex = <div />;
    if (this.props.restaurants !== undefined) {
      debugger;
      restaurantIndex = Object.values(this.props.restaurants).map(r => (
        <Row
          style={{ padding: "10px", cursor: "pointer" }}
          onClick={this.clickRestaurantRow}
        >
          <Col xs={12} sm={3} md={2} lg={1}>
            {/* Image of Restaurant */}
            <Link to={`menu/${r.id}`}>
              <img
                style={{ height: 90, width: 90 }}
                src="https://www.mygingergarlickitchen.com/wp-content/uploads/2016/08/recipes-Jaipuri-Aloo-Pyaaz-Ki-Sabzi-anupama-paliwal-my-ginger-garlic-kitchen-2-2.jpg"
              />
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
              <div>5 stars</div>
            </Row>
            <Row>
              {/* # of Ratings */}
              <div> {r.review_count} ratings</div>
            </Row>
          </Col>
          <Col xs>
            {/* Price */}
            <div>$$$</div>
          </Col>
        </Row>
      ));
    }

    return <div>{restaurantIndex}</div>;
  }
}

export default RestaurantBrowseRow;
