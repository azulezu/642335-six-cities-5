import {ActionType} from "./action";
import {CitiesNames, SortOrders} from "../const";
import getOffers from '../mocks/offers';
import getReviews from '../mocks/reviews';

const offersAll = getOffers();
const reviewsAll = getReviews();

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
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SELECT_OFFERS:
      return Object.assign({}, state, {offers: offersAll
        .filter((offer) => state.city === offer.city)});

    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {city: action.payload});

    case ActionType.SORT_OFFERS:
      return Object.assign({}, state, {offers: sort(state.offers.slice(), action.payload)});

    default: return state;
  }
};

export {reducer};
