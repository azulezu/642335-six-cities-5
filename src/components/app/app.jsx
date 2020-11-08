import React from "react";
import PropTypes from "prop-types";
import {OfferPropTypes, ReviewPropTypes} from "./app-prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainPage from "../main-page/main-page";
import FavoritesPage from "../favorites-page/favorites-page";
import LoginPage from "../login-page/login-page";
import OfferPage from "../offer-page/offer-page";

const App = (props) => {
  const {offers, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage
            offers={offers.filter((item) =>
              item.city === offers[0].city
            )}
            city={offers[0].city}
          />
        </Route>

        <Route exact path="/login">
          <LoginPage />
        </Route>

        <Route exact path="/favorites">
          <FavoritesPage
            offers={offers}
          />
        </Route>

        <Route exact path="/offer/:id?"
          render={({match}) => (
            <OfferPage
              offer={offers.find((offer) => offer.id === match.params.id) || offers[0]}
              reviews={reviews}
              offers={offers.filter((item, index, array) =>
                item.city === array[0].city
              ).slice(1, 4)}
            />
          )
          }
        >
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(OfferPropTypes).isRequired,
  reviews: PropTypes.arrayOf(ReviewPropTypes).isRequired,
};

export default App;
