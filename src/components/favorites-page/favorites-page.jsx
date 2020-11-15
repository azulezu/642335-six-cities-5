import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import OfferPropTypes from "../offer-page/offer.prop";
import CardsList from "../cards-list/cards-list";
import Header from "../header/header";
import FavoritesContainer from "../favorites-container/favorites-container";
import {SitePages, CitiesNames} from "../../const";
import {selectBookmarkedOffers, selectOffersByCities} from "../../core";

const FavoritesPage = (props) => {
  const {offersByCities} = props;

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
                  return offersByCities[cityName].length > 0 && (
                    <FavoritesContainer
                      key={cityName}
                      city={cityName}
                    >
                      <CardsList
                        offers={offersByCities[cityName]}
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
  offersByCities: PropTypes.objectOf(
      PropTypes.arrayOf(OfferPropTypes)
  ).isRequired,
};

const mapStateToProps = (state) => ({
  offersByCities: selectOffersByCities(
      selectBookmarkedOffers(state.offers)),
});

export {FavoritesPage};
export default connect(mapStateToProps)(FavoritesPage);
