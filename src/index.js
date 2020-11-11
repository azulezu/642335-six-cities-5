import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import getOffers from './mocks/offers';
import getReviews from './mocks/reviews';

const offers = getOffers();
const reviews = getReviews(offers);

ReactDOM.render(
    <App
      offers={offers}
      reviews={reviews}
    />,
    document.querySelector(`#root`)
);
