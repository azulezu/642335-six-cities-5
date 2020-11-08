import React from "react";
import PropTypes from "prop-types";
import {ReviewPropTypes} from "../app/app-prop-types";
import Review from "../review/review";
import {MAX_DISPLAYED_REVIEWS} from "../../const";


const ReviewsList = (props) => {
  const {reviews, offerId} = props;

  const getFilteredReviews = (id, reviewsList) =>
    reviewsList
      .filter((review) => id === review.offerId)
      .sort((a, b) => b.time - a.time);


  const filteredReview = getFilteredReviews(offerId, reviews.slice());

  return (
    <React.Fragment>
      <h2 className="reviews__title">Reviews &middot;
        <span className="reviews__amount">{filteredReview.length}</span>
      </h2>
      <ul className="reviews__list">
        {filteredReview
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
  offerId: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(ReviewPropTypes).isRequired,
};

export default ReviewsList;
