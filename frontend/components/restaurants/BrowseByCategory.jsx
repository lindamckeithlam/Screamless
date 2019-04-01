import React from "react";
import GoogleMap from "../GoogleMap";
import NavBar from "../NavBar";
import BrowseByCuisine from "../BrowseByCuisine";
import RestaurantBrowseRowsContainer from "../RestaurantBrowseRowsContainer";
import Footer from "../footer";
class BrowseByCategory extends React.Component {
  //   toggleShow(e) {
  //     if (e.target.matches(".feature")) {
  //       // toggle class .show
  //     }
  //   }

  render() {
    return (
      <>
        <NavBar />

        <div className="category-container">
          <div className="category-left">
            <h1>Filters</h1>
            <span>
              <a href="#">Clear All</a>
            </span>
            <br />
            <h2>Restaurants</h2>
            <h2>Catering</h2>
            <br />
            <button>Delivery</button>
            <button>Pickup</button>
            <br />
            <span className="today-asap">
              Deliver my food -<a href="#">Today, ASAP</a>
            </span>

            <div>
              <div className="feature-container">
                {/* onClick={toggleShow} */}
                <div id="flip">
                  <h3>Feature</h3>
                  {/* have both angle up/down, show one or the other onClick (toggle)*/}
                  <i className="fas fa-angle-down" id="down" />
                </div>
                <div id="panel">
                  <i className="fas fa-angle-up" />
                  <form className="feature-dropdown">
                    <input type="checkbox" />
                    Free Delivery
                    <br />
                    <input type="checkbox" />
                    Coupons
                    <br />
                    <input type="checkbox" />
                    Open Now
                    <br />
                  </form>
                </div>
              </div>

              <div className="rating-container">
                {/* onClick={toggleShow} */}
                <h3>Rating</h3>

                <div className="rating-box">
                  <div className="star-container">
                    <i className="fas fa-star" />
                  </div>
                  <div className="vl" />

                  <div className="star-container">
                    <i className="fas fa-star" />
                  </div>
                  <div className="vl" />

                  <div className="star-container">
                    <i className="fas fa-star" />
                  </div>
                  <div className="vl" />

                  <div className="star-container">
                    <i className="fas fa-star" />
                  </div>
                  <div className="vl" />

                  <div className="star-container">
                    <i className="fas fa-star" />
                  </div>
                </div>
              </div>
              <h3>Price</h3>

              <div className="rating-box">
                {/* <div className="dollar1 dollar"> */}
                <i className="fas fa-dollar-sign" />
                {/* </div> */}
                <div className="vl" />
                {/* <div className="dollar2 dollar"> */}
                <i className="fas fa-dollar-sign" />
                <i className="fas fa-dollar-sign" />
                {/* </div> */}
                <div className="vl" />
                {/* <div className="dollar3 dollar"> */}
                <i className="fas fa-dollar-sign" />
                <i className="fas fa-dollar-sign" />
                <i className="fas fa-dollar-sign" />
                {/* </div> */}
                <div className="vl" />
                {/* <div className="dollar4 dollar"> */}
                <i className="fas fa-dollar-sign" />
                <i className="fas fa-dollar-sign" />
                <i className="fas fa-dollar-sign" />
                <i className="fas fa-dollar-sign" />
                {/* </div> */}
                <div className="vl" />
                {/* <div className="dollar5 dollar"> */}
                <i className="fas fa-dollar-sign" />
                <i className="fas fa-dollar-sign" />
                <i className="fas fa-dollar-sign" />
                <i className="fas fa-dollar-sign" />
                <i className="fas fa-dollar-sign" />
                {/* </div> */}
              </div>
            </div>
          </div>
          <div className="category-right">
            <BrowseByCuisine />
            <GoogleMap />
            <RestaurantBrowseRowsContainer />
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default BrowseByCategory;
