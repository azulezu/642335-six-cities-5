import {ActionType} from "./action";
import {CitiesNames} from "../const";
import getOffers from '../mocks/offers';
import getReviews from '../mocks/reviews';

const offersAll = getOffers();
const reviewsAll = getReviews();

const initialState = {
  offersAll,
  reviewsAll,
  city: CitiesNames[0],
  offers: offersAll.filter((item) => item.city === CitiesNames[0]),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SELECT_OFFERS:
      return Object.assign({}, state, {offers: offersAll
        .filter((offer) => state.city === offer.city)});

    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {city: action.payload});

    default: return state;
  }
};

export {reducer};
