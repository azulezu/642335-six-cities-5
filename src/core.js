import {CitiesNames, SortOrders, DEFAULT_ORDER} from "./const";

export const sort = (offersList, order = DEFAULT_ORDER) => {
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

export const selectOffersByCity = (city, offersList) =>
  offersList.filter((offer) => city === offer.city);

export const selectBookmarkedOffers = (offersList) =>
  offersList.filter((offer) => offer.isBookmarked);

export const selectReviewsByOffer = (offer, reviewList) =>
  reviewList.filter((review) => offer.id === review.offerId);

export const selectOffersByCities = (offersList) => {
  const result = {};
  CitiesNames.forEach((cityName) => {
    result[cityName] = selectOffersByCity(cityName, offersList);
  });
  return result;
};

export const updateOfferBookmark = (offer, offers) => {
  const index = offers.indexOf(offer);
  if (index === -1) {
    return offers;
  }
  const updatedOffer = Object.assign({}, offer, {
    isBookmarked: !offer.isBookmarked
  });
  return [].concat(offers.slice(0, index), updatedOffer, offers.slice(index + 1));
};
