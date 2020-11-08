import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {OfferPropTypes} from "../app/app-prop-types";
import CardsList from "../cards-list/cards-list";
import Header from "../header/header";
import FavoritesContainer from "../favorites-container/favorites-container";
import {SitePages, CitiesNames} from "../../const";

const FavoritesPage = (props) => {
  const {offers} = props;

  const getFavoritesOffers = (offersList) => offersList
    .filter((offer) => offer.isBookmarked);

  const getFilteredOffers = (cityName, offersList) => offersList
    .filter((offer) => offer.city.name === cityName);

  return (
    <div className="page">

      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {
                CitiesNames.map((cityName) => {
                  const filteredOffers = getFilteredOffers(cityName, getFavoritesOffers(offers));

                  if (!filteredOffers.length) {
                    return ``;
                  }
                  return (
                    <FavoritesContainer
                      key={cityName}
                      city={cityName}
                    >
                      <CardsList
                        offers={filteredOffers}
                        sitePage={SitePages.FAVORITES}
                      />
                    </FavoritesContainer>
                  );
                })
              }
            </ul>
          </section>
        </div>
      </main>

      <footer className="footer container">
        <Link className="footer__logo-link"
          to={`/`}
        >
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
};

FavoritesPage.propTypes = {
  offers: PropTypes.arrayOf(OfferPropTypes).isRequired,
};

export default FavoritesPage;
