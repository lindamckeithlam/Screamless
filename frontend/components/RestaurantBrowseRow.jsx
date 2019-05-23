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
        <div className="restaurant-rows" key={r.name + "-" + idx.toString()}>
          <Link className="restaurant-rows" to={`/menu/${r.id}`}>
            <Row
              key={r.name + idx.toString()}
              style={{
                padding: "2% 0%",
                cursor: "pointer"
              }}
              onClick={this.clickRestaurantRow}
            >
              <Col xs={2}>
                {/* Image of Restaurant */}

                <img className="restaurant-row-img" src={r.img_url} />
              </Col>
              <Col xs>
                <Row key={r.name + "-" + idx.toString()}>
                  {/* Name */}

                  <div className="restaurant-row-name">{r.name}</div>
                </Row>
                <Row key={r.cuisine_name + "-" + idx.toString()}>
                  {/* Category */}
                  <div className="restaurant-row-cuisine-name">
                    {r.cuisine_name}
                  </div>
                </Row>
              </Col>
              <Col xs>
                <Row key={r.rating.toString() + "-" + idx.toString()}>
                  {/* Rating Stars */}
                  <div className="star-ratings">
                    <div
                      className="star-ratings-top"
                      style={{ width: `${(r.rating / 5) * 100}%` }}
                    >
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                    </div>
                    <div className="star-ratings-bottom">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                    </div>
                  </div>
                  {/* <div>{`${r.rating.toFixed(2)} stars`}</div> */}
                </Row>
                <Row key={r.review_count.toString() + "-" + idx.toString()}>
                  {/* # of Ratings */}
                  <div className="restaurant-row-cuisine-name">
                    {" "}
                    {r.review_count} ratings
                  </div>
                </Row>
              </Col>
              <Col xs>
                {/* Price */}
                <div className="restaurant-row-cuisine-name">
                  {this.renderPrice(r.price)}
                </div>
              </Col>
            </Row>
          </Link>
        </div>
      ));
    }

    return <div>{restaurantIndex}</div>;
  }
}

export default RestaurantBrowseRow;
