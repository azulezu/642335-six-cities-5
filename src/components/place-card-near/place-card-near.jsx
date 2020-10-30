import React from "react";
import PropTypes from "prop-types";
import {convertRatingToStyle} from "../../const";

const PlaceCardNear = (props) => {
  const {offer} = props;

  return (
    <article className="near-places__card place-card" >
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={offer.images[0]} width="260" height="200" alt="Place image" />
        </a>
      </div>

      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${offer.isBookmarked ? ` place-card__bookmark-button--active` : ``}`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>

        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span
              style={convertRatingToStyle(offer.rating)}
            ></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>

        <h2 className="place-card__name">
          <a href="#">{offer.name}</a>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
};

PlaceCardNear.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string.isRequired),
    name: PropTypes.string.isRequired,
    isBookmarked: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default PlaceCardNear;
