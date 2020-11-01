import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import offers from './mocks/offers';
import reviews from './mocks/reviews';

const Settings = {
  PLACES_COUNT: 312,
  OFFERS_COUNT: 4,
  REVIEWS_COUNT: 2,
};

ReactDOM.render(
    <App
      placesCount={Settings.PLACES_COUNT}
      offers={offers(Settings.OFFERS_COUNT)}
      reviews={reviews(Settings.REVIEWS_COUNT)}
    />,
    document.querySelector(`#root`)
);
