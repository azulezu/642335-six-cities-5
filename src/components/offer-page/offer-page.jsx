import React from "react";
import PropTypes from "prop-types";
import OfferPropTypes from "./offer.prop";
import ReviewPropTypes from "../review/review.prop";
import {convertRatingToStyle} from "../../utils";
import ReviewsList from "../reviews-list/reviews-list";
import CommentForm from "../comment-form/comment-form";
import CardsList from "../cards-list/cards-list";
import Map from "../map/map";
import Header from "../header/header";
import {SitePages} from "../../const";
import withMapMarkers from "../../hocs/with-map-markers";
import withTransitHandler from "../../hocs/with-transit-handler";

const OfferPage = (props) => {
  const {activeOfferId, onChangeActiveOffer} = props;
  const {offer: currentOffer, offers: nearOffers, reviews} = props;

  const selectedReview = reviews.slice()
    .filter((review) => currentOffer.id === review.offerId);

  const CardsListWrapped = withTransitHandler(CardsList);

  return (
    <div className="page">

      <Header />

      <main className="page__main page__main--property">
        <section className="property">

          <div className="property__gallery-container container">
            <div className="property__gallery">
              {currentOffer.images.map((image, index) =>
                <div key={index}
                  className="property__image-wrapper"
                >
                  <img className="property__image" src={image} alt="Photo studio" />
                </div>
              )};
            </div>
          </div>

          <div className="property__container container">
            <div className="property__wrapper">
              {currentOffer.isMarked &&
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {currentOffer.name}
                </h1>
                <button
                  className={`property__bookmark-button button ${currentOffer.isBookmarked ? ` property__bookmark-button--active` : ``}`}
                  type="button"
                >
                  <svg className="place-card__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>

              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span
                    style={convertRatingToStyle(currentOffer.rating)}
                  ></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{currentOffer.rating.toFixed(1)}</span>
              </div>

              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {currentOffer.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {currentOffer.bedrooms} {currentOffer.bedrooms === 1 ? `Bedroom` : `Bedrooms`}
                </li>
                <li className="property__feature property__feature--adults">
                  Max {currentOffer.adults} {currentOffer.adults === 1 ? `adult` : `adults`}
                </li>
              </ul>

              <div className="property__price">
                <b className="property__price-value">&euro;{currentOffer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>

              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {currentOffer.insideItems.map((item) =>
                    <li key={item}
                      className="property__inside-item"
                    >
                      {item}
                    </li>
                  )}
                </ul>
              </div>

              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={currentOffer.host.avatar} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {currentOffer.host.userName}
                  </span>
                </div>
                <div className="property__description">
                  {currentOffer.description.map((text, index) =>
                    <p key={index}
                      className="property__text"
                    >{text}
                    </p>
                  )}
                </div>
              </div>

              <p className="debug-info"
                style={({backgroundColor: `#ffffcc`})}
              >
                {currentOffer.city} &hellip; {currentOffer.id}
              </p>

              <section className="property__reviews reviews">

                <ReviewsList
                  reviews={selectedReview}
                />

                <CommentForm />

              </section>
            </div>
          </div>

          <section className="property__map map">
            <Map
              offers={nearOffers}
              activeOfferId={activeOfferId}
              city={currentOffer.city}
            />
          </section>
        </section>

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>

            <CardsListWrapped
              offers={nearOffers}
              onEvent={onChangeActiveOffer}
              sitePage={SitePages.OFFER}
            />

          </section>
        </div>
      </main>
    </div>
  );
};


OfferPage.propTypes = {
  offer: OfferPropTypes.isRequired,
  offers: PropTypes.arrayOf(OfferPropTypes).isRequired,
  reviews: PropTypes.arrayOf(ReviewPropTypes).isRequired,
  activeOfferId: PropTypes.string,
  onChangeActiveOffer: PropTypes.func.isRequired,
};

export default withMapMarkers(OfferPage);
