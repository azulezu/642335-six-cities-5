import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import OfferPropTypes from "../offer-page/offer.prop";
import ReviewPropTypes from "../review/review.prop";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainPage from "../main-page/main-page";
import FavoritesPage from "../favorites-page/favorites-page";
import LoginPage from "../login-page/login-page";
import OfferPage from "../offer-page/offer-page";

const App = (props) => {
  const {city, offers, offersAll, reviewsAll} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage
            offers={offers}
            city={city}
          />
        </Route>

        <Route exact path="/login">
          <LoginPage />
        </Route>

        <Route exact path="/favorites">
          <FavoritesPage
            offers={offersAll}
          />
        </Route>

        <Route exact path="/offer/:id?"
          render={({match}) => (
            <OfferPage
              offer={offers.find((offer) => offer.id === match.params.id) || offers[0]}
              reviews={reviewsAll}
              nearOffers={offers.slice(1, 4)}
            />
          )}
        >
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  city: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(OfferPropTypes).isRequired,
  offersAll: PropTypes.arrayOf(OfferPropTypes).isRequired,
  reviewsAll: PropTypes.arrayOf(ReviewPropTypes).isRequired,
};

const mapStateToProps = (state) => ({
  city: state.city,
  offers: state.offers,
  offersAll: state.offersAll,
  reviewsAll: state.reviewsAll,
});


export {App};
export default connect(mapStateToProps)(App);
