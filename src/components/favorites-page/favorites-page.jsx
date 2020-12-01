import React from "react";
import PropTypes from "prop-types";
import {Link, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import OfferPropTypes from "../offer-page/offer.prop";
import CardsList from "../cards-list/cards-list";
import Header from "../header/header";
import FavoritesEmpty from "../favorites-empty/favorites-empty";
import FavoritesContainer from "../favorites-container/favorites-container";
import {SitePages} from "../../const";
import {selectOffersListByCities, selectBookmarkedOffers} from "../../store/selectors";

const FavoritesPage = (props) => {
  const {offersByCities, isAuthorized, cityNames} = props;

  if (!isAuthorized) {
    return <Redirect to="/login" />;
  }

  const isEmpty = Object.values(offersByCities)
    .every((offersByCity) => offersByCity.length === 0);

  const pageClassName = `page ${!isEmpty ? `` : `page--favorites-empty`}`;
  const mainClassName = `page__main page__main--favorites ${!isEmpty ? ``
    : `page__main--favorites-empty`}`;

  return (
    <div className={pageClassName}>

      <Header />

      <main className={mainClassName}>
        <div className="page__favorites-container container">
          {isEmpty ? <FavoritesEmpty />
            : (
              <section className="favorites">
                <h1 className="favorites__title">Saved listing</h1>
                <ul className="favorites__list">
                  {
                    cityNames.map((cityName) => {
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
            )
          }
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
  isAuthorized: PropTypes.bool.isRequired,
  cityNames: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  offersByCities: selectOffersListByCities(state,
      selectBookmarkedOffers(state)),
  isAuthorized: state.APP.isAuthorized,
  cityNames: state.DATA.cities.map((item) => item.name),
});

export {FavoritesPage};
export default connect(mapStateToProps)(FavoritesPage);
