import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import OfferPropTypes from "../offer-page/offer.prop";
import ReviewPropTypes from "../review/review.prop";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainPage from "../main-page/main-page";
import FavoritesPage from "../favorites-page/favorites-page";
import LoginPage from "../login-page/login-page";
import OfferPage from "../offer-page/offer-page";
import {selectOffersByCity} from "../../core";

const App = (props) => {
  const {offers, city, changeOffer} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>

        <Route exact path="/login">
          <LoginPage />
        </Route>

        <Route exact path="/favorites">
          <FavoritesPage />
        </Route>

        <Route exact path="/offer/:id?"
          render={({match}) => {
            const currentOffer = offers
              .find((offer) => offer.id === match.params.id) || offers[0];
            changeOffer(currentOffer);

            return (
              <OfferPage
                nearOffers={selectOffersByCity(city, offers).slice(1, 4)}
              />
            );
          }}
        >
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(OfferPropTypes).isRequired,
  reviews: PropTypes.arrayOf(ReviewPropTypes).isRequired,
  city: PropTypes.string.isRequired,
  changeOffer: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  reviews: state.reviews,
  offer: state.offer,
  city: state.city,
});

const mapDispatchToProps = (dispatch) => ({
  changeOffer(offer) {
    dispatch(ActionCreator.changeOffer(offer));
  },
});

const memoApp = React.memo(App);

export {App};
export default React.memo(connect(mapStateToProps, mapDispatchToProps)(memoApp));
