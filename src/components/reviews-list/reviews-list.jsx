import React from "react";
import PropTypes from "prop-types";
import Review from "../review/review";

const ReviewsList = (props) => {
  const {reviews} = props;

  return (
    <ul className="reviews__list">
      {reviews.map((review) =>
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
  reviews: PropTypes.array.isRequired,
};

export default ReviewsList;
