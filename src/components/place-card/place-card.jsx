import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {OfferPropTypes} from "../app/app-prop-types";
import {convertRatingToStyle} from "../../utils";
import {PlaceTypes, PlaceCardImageSizes} from "../../const";
import {cardModificators} from "../../const";

const getArticleClassName = (modificator) => {
  switch (modificator) {
    case cardModificators.CITIES:
      return `${modificator}__place-card`;
    case cardModificators.NEAR:
    case cardModificators.FAVORITES:
      return `${modificator}__card`;
  }
  return ``;
};

const getImageClassName = (modificator) =>
  (modificator) ? `${modificator}__image-wrapper` : ``;


const PlaceCard = (props) => {
  const {offer, modificator} = props;
  const {onEvent} = props;

  return (
    <article
      onMouseEnter={onEvent ? () => onEvent(offer.id) : null}
      onMouseLeave={onEvent ? () => onEvent(null) : null}
      className={`place-card ${getArticleClassName(modificator)}`}
    >

      <div className={`place-card__image-wrapper ${getImageClassName(modificator)}`}>
        <Link to={`/offer/${offer.id}`}>
          <img className="place-card__image" alt="Place image"
            src={offer.images[0]}
            width={modificator === cardModificators.FAVORITES
              ? PlaceCardImageSizes.SMALL.width
              : PlaceCardImageSizes.BIG.width}
            height={modificator === cardModificators.FAVORITES
              ? PlaceCardImageSizes.SMALL.height
              : PlaceCardImageSizes.BIG.height}
          />
        </Link>
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
          <Link to={`/offer/${offer.id}`}>
            {offer.name}
          </Link>
        </h2>
        <p className="place-card__type">{PlaceTypes[offer.type]}</p>
      </div>
    </article>
  );
};


PlaceCard.propTypes = {
  onEvent: PropTypes.func,
  offer: OfferPropTypes.isRequired,
  modificator: PropTypes.string,
};

export default PlaceCard;
