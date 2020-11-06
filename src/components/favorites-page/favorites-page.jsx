import React from "react";
import PropTypes from "prop-types";
import {OfferPropTypes} from "../app/app-prop-types";
import PlacesList from "../places-list/places-list";
import Header from "../header/header";
import {sitePages} from "../../const";

const FavoritesPage = (props) => {
  const {offers} = props;

  return (
    <div className="page">

      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <PlacesList
                  offers={offers.slice(0, 2)}
                  sitePage={sitePages.FAVORITES}
                />
              </li>

              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <PlacesList
                  offers={offers.slice(0, 1)}
                  sitePage={sitePages.FAVORITES}
                />
              </li>
            </ul>
          </section>
        </div>
      </main>

      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
};

FavoritesPage.propTypes = {
  offers: PropTypes.arrayOf(OfferPropTypes).isRequired,
};

export default FavoritesPage;
