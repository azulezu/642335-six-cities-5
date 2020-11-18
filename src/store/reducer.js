import {ActionType} from "./action";
import {CitiesNames, DEFAULT_ORDER} from "../const";
import {updateOfferBookmark} from "../core";
import getOffers from '../mocks/offers';
import getReviews from '../mocks/reviews';

const initialState = {
  offers: getOffers(),
  reviews: getReviews(),
  offer: null,
  city: CitiesNames[0],
  order: DEFAULT_ORDER,
  email: ``,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {
        activeOffer: null,
        city: action.payload,
        order: DEFAULT_ORDER,
      });

    case ActionType.CHANGE_OFFER:
      return Object.assign({}, state, {
        offer: action.payload,
        city: action.payload.city,
        order: DEFAULT_ORDER,
      });

    case ActionType.CHANGE_ORDER:
      return Object.assign({}, state, {
        order: action.payload,
      });

    case ActionType.TOGGLE_BOOKMARK:
      return Object.assign({}, state, {
        offers: updateOfferBookmark(action.payload, state.offers),
      });

    case ActionType.SIGN_IN:
      return Object.assign({}, state, {
        email: action.payload,
      });

    default: return state;
  }
};

export {reducer};
