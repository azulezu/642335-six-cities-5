import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainPage from "../main-page/main-page";
import FavoritesPage from "../favorites-page/favorites-page";
import LoginPage from "../login-page/login-page";
import OfferPage from "../offer-page/offer-page";


const App = (props) => {
  const {placesCount, offers, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"
          render={({history}) => (
            <MainPage
              placesCount={placesCount}
              offers={offers}
              onCardClick={(cardId) => history.push(`/offer/${cardId}`)}
            />
          )}
        ></Route>

        <Route exact path="/login">
          <LoginPage />
        </Route>

        <Route exact path="/favorites">
          <FavoritesPage
            offers={offers}
          />
        </Route>

        <Route exact path="/offer/:id?">
          <OfferPage
            offer={offers[0]}
            reviews={reviews}
            offers={offers}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  placesCount: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired,
};

export default App;
