import React from "react";
import PropTypes from "prop-types";
import {ReviewPropTypes} from "../app/app-prop-types";
import Review from "../review/review";
import {MAX_DISPLAYED_REVIEWS} from "../../const";


const ReviewsList = (props) => {
  const {reviews, offerId} = props;

  const selectReviews = (id, reviewsList) =>
    reviewsList
      .filter((review) => id === review.offerId)
      .sort((a, b) => b.time - a.time)
      .slice(0, MAX_DISPLAYED_REVIEWS);

  return (
    <ul className="reviews__list">
      {selectReviews(offerId, reviews.slice())
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
  );
};

ReviewsList.propTypes = {
  offerId: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(ReviewPropTypes).isRequired,
};

export default ReviewsList;
