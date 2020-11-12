import React from "react";
import PropTypes from "prop-types";
import ReviewPropTypes from "../review/review.prop";
import Review from "../review/review";
import {MAX_DISPLAYED_REVIEWS} from "../../const";


const ReviewsList = (props) => {
  const {reviews} = props;

  const getSortedReviews = (reviewsList) =>
    reviewsList.sort((a, b) => b.time - a.time);

  return (
    <React.Fragment>
      <h2 className="reviews__title">Reviews &middot;
        <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {getSortedReviews(reviews)
          .slice(0, MAX_DISPLAYED_REVIEWS)
          .map((review) =>
            <li className="reviews__item"
              key={review.id}
            >
              <Review
                review={review}
              />
            </li>
          )}
      </ul>
    </React.Fragment>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(ReviewPropTypes).isRequired,
};

export default ReviewsList;
