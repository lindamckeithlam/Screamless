import React from "react";

class Reviews extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {Object.values(this.props.reviews).map(review => (
          <div className="review-container" key={review.id}>
            <div className="review-top">
              <div className="review-name">
                <span>
                  <p className="avatar">{review.first_name.charAt(0)}</p>
                  <h6> {review.first_name} </h6>
                </span>
              </div>
              <div className="star-ratings-css">
                <div
                  className="star-ratings-css-top"
                  style={{ width: `${(review.rating / 5) * 100}%` }}
                >
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
                <div className="star-ratings-css-bottom">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
              </div>
            </div>
            <div>{review.body}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default Reviews;
