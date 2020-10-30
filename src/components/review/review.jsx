import React from "react";
import PropTypes from "prop-types";
import {convertRatingToStyle} from "../../const";

const Review = (props) => {
  const {review} = props;

  return (
    <React.Fragment>
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.avatar} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {review.userName}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span
              style={convertRatingToStyle(review.rating)}
            ></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.text}
        </p>
        <time className="reviews__time" dateTime={review.time.toISOString().slice(0, 10)}>
          {new Intl.DateTimeFormat(`en-US`, {month: `long`}).format(review.time)} {review.time.getFullYear()}
        </time>
      </div>

    </React.Fragment>
  );
};

Review.propTypes = {
  review: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    time: PropTypes.instanceOf(Date).isRequired,
  }).isRequired,
};

export default Review;
