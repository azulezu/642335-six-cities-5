import {ActionType} from "./action";
import Adapter from "../services/adapter";
import {DEFAULT_ORDER} from "../const";
import {updateOfferBookmark} from "../core";

const initialState = {
  offers: [],
  reviews: [],
  cities: [],
  offer: null,
  city: ``,
  order: DEFAULT_ORDER,
  email: ``,
  isAuthorized: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_OFFERS:
      return Object.assign({}, state, {
        offers: Adapter.convertOffers(action.payload),
        order: DEFAULT_ORDER,
      });

    case ActionType.SET_CITIES:
      const allCities = Adapter.selectCities(action.payload);
      return Object.assign({}, state, {
        cities: allCities,
        city: allCities[0].name,
      });

    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {
        offer: null,
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
        isAuthorized: true,
      });

    default: return state;
  }
};

export {reducer};
