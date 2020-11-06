import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {OfferPropTypes, ReviewPropTypes} from "../app/app-prop-types";
import {convertRatingToStyle} from "../../utils";
import ReviewsList from "../reviews-list/reviews-list";
import CommentForm from "../comment-form/comment-form";
import PlacesList from "../places-list/places-list";
import Map from "../map/map";
import {sitePages} from "../../const";

class OfferPage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeOfferId: null,
    };
    this._handlerSetActiveOffer = this._handlerSetActiveOffer.bind(this);
  }

  _handlerSetActiveOffer(id) {
    this.setState({activeOfferId: id});
  }

  render() {
    const {activeOfferId} = this.state;
    const {offer: currentOffer, offers, reviews} = this.props;

    return (
      <div className="page">

        <header className="header">
          <div className="container">
            <div className="header__wrapper">

              <div className="header__left">
                <a className="header__logo-link" href="main.html">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
                </a>
              </div>

              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </nav>

            </div>
          </div>
        </header>

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

                <section className="property__reviews reviews">
                  <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>

                  <ReviewsList reviews={reviews} />

                  <CommentForm />

                </section>
              </div>
            </div>

            <section className="property__map map">
              <Map
                offers={offers}
                activeOfferId={activeOfferId}
              />
            </section>
          </section>

          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <PlacesList
                offers={offers}
                onChangeActiveOffer={this._handlerSetActiveOffer}
                sitePage={sitePages.OFFER}
              />
            </section>
          </div>
        </main>
      </div>
    );
  }
}

OfferPage.propTypes = {
  offer: OfferPropTypes.isRequired,
  offers: PropTypes.arrayOf(OfferPropTypes).isRequired,
  reviews: PropTypes.arrayOf(ReviewPropTypes).isRequired,
};

export default OfferPage;
