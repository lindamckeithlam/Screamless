import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Grid, Row, Col } from "react-flexbox-grid";
import Sticky from "react-stickynode";
import { withStyles } from "@material-ui/core/styles";
import * as Scroll from "react-scroll";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import NavBar from "../NavBar";
import {
  fetchRestaurant,
  fetchRestaurants
} from "../../actions/restaurant_actions";
import { createReview } from "../../actions/review_actions";
import { connect } from "react-redux";
import InitMap from "../GoogleMap";
import Footer from "../footer";
import Reviews from "../restaurant_subcomponents/Reviews";
import MenuItems from "../restaurant_subcomponents/MenuItems";
import SweetAlert from "react-bootstrap-sweetalert";
const msp = state => {
  debugger;
  return {
    restaurants: state.restaurants,
    currentRestaurant: state.restaurants.currentRestaurant,
    user: state.currentUser
  };
};

const mdp = dispatch => ({
  onFetchRestaurants: () => dispatch(fetchRestaurants()),
  onFetchRestaurant: id => dispatch(fetchRestaurant(id)),
  onPostReview: review => dispatch(createReview(review))
});

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    padding: 30,
    margin: "30px auto",
    height: 1000,
    width: 800
  },
  badge: {
    width: "150px",
    top: "50%",
    backgroundColor: "#ff9100",
    border: "2px solid #ff9100",
    color: "white"
  },
  list: {
    width: 380
  },
  drawer: {
    top: "60px"
  },
  dialog: {
    width: 1000,
    height: 600,
    margin: "20px auto"
  }
});
class RestaurantShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      showModal: false,
      body: "",
      rating: null,
      restaurant_id: this.props.currentRestaurant.id,
      alert: null
    };
  }

  componentDidMount() {
    this.props
      .onFetchRestaurants()
      .then(
        this.props.onFetchRestaurant(this.props.match.params.restaurant_id)
      );
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.match.params.restaurant_id !=
      this.props.match.params.restaurant_id
    ) {
      this.props.onFetchRestaurant(this.props.match.params.restaurant_id);
    }
  }

  handleCloseModal = () => {
    this.setState({ showModal: false, alert: null });
  };

  handleShowModal = () => {
    this.setState({ showModal: true });
  };

  onCreateReview = (restaurant_id, reviewer_id) => {
    this.props.onPostReview({
      body: this.state.body,
      rating: this.state.rating,
      restaurant_id: restaurant_id,
      reviewer_id: reviewer_id
    });
  };

  ratingClick(e) {
    this.setState({ rating: Number(e.target.value) });
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({ body: e.target.value });
  };

  renderModal = () => {
    const { classes } = this.props;

    return (
      <Dialog
        className={classes.dialog}
        open={this.state.showModal}
        onClose={this.handleCloseModal}
        aria-labelledby="form-dialog-title"
      >
        <i className="fa fa-close" onClick={this.handleCloseModal} />

        <DialogTitle id="form-dialog-title">
          Rate and Review {this.props.currentRestaurant.name}
        </DialogTitle>

        <DialogContent>
          <DialogContentText>
            <div className="order-rating" />
            <div className="star-rating">
              <input
                type="radio"
                id="5-stars"
                name="rating"
                value="5"
                onClick={this.ratingClick.bind(this)}
                required
              />
              <label htmlFor="5-stars" className="star">
                &#9733;
              </label>
              <input
                type="radio"
                id="4-stars"
                name="rating"
                value="4"
                onClick={this.ratingClick.bind(this)}
              />
              <label htmlFor="4-stars" className="star">
                &#9733;
              </label>
              <input
                type="radio"
                id="3-stars"
                name="rating"
                value="3"
                onClick={this.ratingClick.bind(this)}
              />
              <label htmlFor="3-stars" className="star">
                &#9733;
              </label>
              <input
                type="radio"
                id="2-stars"
                name="rating"
                value="2"
                onClick={this.ratingClick.bind(this)}
              />
              <label htmlFor="2-stars" className="star">
                &#9733;
              </label>
              <input
                type="radio"
                id="1-star"
                name="rating"
                value="1"
                onClick={this.ratingClick.bind(this)}
              />
              <label htmlFor="1-star" className="star">
                &#9733;
              </label>
            </div>
            {/* Review address, payments, and tip to complete your purchase */}
          </DialogContentText>
          <div className="review-modal">
            <label>Write a Review</label>
            <textarea
              wrap="hard"
              type="text"
              value={this.state.body}
              onChange={this.handleChange}
              placeholder="Writing a review gets you one step closer to earning Top Reviewer status. 
              Tell us what you loved about this order"
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            className="review-button-modal"
            onClick={() => {
              this.onCreateReview(
                this.props.currentRestaurant.id,
                this.props.user.id
              );
              this.handleCloseModal();
            }}
            color="primary"
          >
            Submit your Rating & Review
          </Button>
        </DialogActions>
        <DialogContent />
      </Dialog>
    );
  };

  render() {
    debugger;
    let reviews = <div />;
    let count = <p>{count}</p>;
    let menu = <div />;

    if (this.props.currentRestaurant.reviews) {
      reviews = (
        <Reviews
          restaurant={this.props.currentRestaurant}
          reviews={this.props.currentRestaurant.reviews}
        />
      );
      count = Object.values(this.props.currentRestaurant.reviews).length;
    }

    if (this.props.currentRestaurant.menu_items) {
      menu = (
        <MenuItems
          restaurantId={this.props.currentRestaurant.id}
          restaurantName={this.props.currentRestaurant.name}
          menuItems={this.props.currentRestaurant.menu_items}
        />
      );
    }

    return (
      <div className="restaurant-showpage-container">
        <NavBar />
        <div id="restaurant-banner" className="restaurant-banner">
          <div className="restaurant-banner-img">
            <img src={this.props.currentRestaurant.img_url} />
          </div>
          <div className="restaurant-info">
            <h1>{this.props.currentRestaurant.name}</h1>
            <span>
              {this.props.currentRestaurant.address}
              {"                 "}
              <i className="fas fa-phone" />
              {"      "}
              {this.props.currentRestaurant.formatted_phone}
            </span>
          </div>
        </div>
        <Sticky innerZ={1000} top="#main-nav">
          <div className="restaurant-links">
            <Scroll.Link smooth duration={500} offset={-125} to="menu-section">
              <span className="green-text">Menu</span>
            </Scroll.Link>
            <Scroll.Link
              smooth
              duration={1000}
              offset={-130}
              to="about-section"
            >
              <span className="green-text">About</span>
            </Scroll.Link>
            <Scroll.Link
              className="green-text"
              smooth
              duration={1000}
              offset={-120}
              to="review-section"
            >
              <span className="green-text">Review</span>
            </Scroll.Link>
          </div>
        </Sticky>
        <div name="menu-section" className="restaurant-line" />
        {menu}
        <Grid fluid className="restaurant-bottom">
          <Row name="about-section">
            <h3 id="about">About {this.props.currentRestaurant.name}</h3>
          </Row>
          <Row>{/* <div>Restaruant description blah lbah</div> */}</Row>
          <Row>
            <div>$$$</div>
          </Row>
          <Row>
            <Col xs>
              <Row>
                <InitMap address={this.props.currentRestaurant.address} />
              </Row>
              <Row>
                <p>{this.props.currentRestaurant.address}</p>
                <div className="restaurant-line" />
              </Row>
              <Row>
                <p>
                  <i className="fas fa-phone" />
                  {"      "}
                  {this.props.currentRestaurant.formatted_phone}
                </p>
                <div className="restaurant-line" />
              </Row>
            </Col>
            <Col xs>
              <Row>
                <h3>Hours</h3>
              </Row>
              <Row>
                <Col xs>Today</Col>
                <Col xs>
                  {`${this.props.currentRestaurant.open_time}:00am - ${this
                    .props.currentRestaurant.close_time - 12}:00pm`}
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <div
              name="review-section"
              className="restaurant-reviews-main-container"
            >
              <div className="restaurant-reviews-main">
                <h3>Reviews for {this.props.currentRestaurant.name}</h3>
                <span>{count} ratings</span>
              </div>

              <Button
                onClick={() =>
                  this.setState({
                    expanded: !this.state.expanded,
                    showModal: true
                  })
                }
                aria-label="shopping-cart"
                className="leave-review-button"
              >
                Leave a Review
              </Button>
              {this.renderModal()}
            </div>
          </Row>
          <Row>{reviews}</Row>
        </Grid>
        <Footer />
      </div>
    );
  }
}

export default withStyles(styles)(
  connect(
    msp,
    mdp
  )(RestaurantShow)
);
