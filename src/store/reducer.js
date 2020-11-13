import {ActionType} from "./action";
import {CitiesNames, SortOrders} from "../const";
import getOffers from '../mocks/offers';
import getReviews from '../mocks/reviews';

const offersAll = getOffers();
const reviewsAll = getReviews();
const DEFAULT_ORDER = SortOrders.POPULAR;

const sort = (offersList, order) => {
  switch (order) {
    case SortOrders.PRICE_ASC:
      return offersList.sort((a, b) => a.price - b.price);

    case SortOrders.PRICE_DESC:
      return offersList.sort((a, b) => b.price - a.price);

    case SortOrders.RATING:
      return offersList.sort((a, b) => b.rating - a.rating);

    default: return offersList;
  }
};

const initialState = {
  offersAll,
  reviewsAll,
  city: CitiesNames[0],
  offers: offersAll.filter((item) => item.city === CitiesNames[0]),
  order: DEFAULT_ORDER,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SELECT_OFFERS:
      return Object.assign({}, state, {offers: offersAll
        .filter((offer) => state.city === offer.city)});

    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {
        city: action.payload,
        order: DEFAULT_ORDER
      });

    case ActionType.CHANGE_ORDER:
      if (action.payload === DEFAULT_ORDER) {
        return Object.assign({}, state, {
          order: action.payload,
          offers: offersAll
            .filter((offer) => state.city === offer.city),
        });
      }
      return Object.assign({}, state, {
        order: action.payload,
        offers: sort(state.offers.slice(), action.payload),
      });

    default: return state;
  }
};

export {reducer};
