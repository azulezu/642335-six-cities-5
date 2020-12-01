import {ActionType} from "../action";
import Adapter from "../../services/adapter";
import {updateOfferBookmark} from "../../core";

const initialState = {
  offers: [],
  reviews: [],
  cities: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_OFFERS:
      return Object.assign({}, state, {
        offers: Adapter.convertOffers(action.payload),
        // order: DEFAULT_ORDER,
      });

    case ActionType.SET_CITIES:
      const allCities = Adapter.selectCities(action.payload);
      return Object.assign({}, state, {
        cities: allCities,
      });

    case ActionType.TOGGLE_BOOKMARK:
      return Object.assign({}, state, {
        offers: updateOfferBookmark(action.payload, state.offers),
      });

    default: return state;
  }
};

export default reducer;
