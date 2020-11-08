import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import getOffers from './mocks/offers';
import getReviews from './mocks/reviews';

const Settings = {
  MAX_OFFERS_COUNT: 20,
  REVIEWS_COUNT: 50,
};
const offers = getOffers(Settings.MAX_OFFERS_COUNT);
const reviews = getReviews(Settings.REVIEWS_COUNT,
    offers.map((offer) => (
      {offerId: offer.id, cityName: offer.city.name}
    ))
);

ReactDOM.render(
    <App
      offers={offers}
      reviews={reviews}
    />,
    document.querySelector(`#root`)
);
