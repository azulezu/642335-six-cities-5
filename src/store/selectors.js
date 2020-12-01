import {NameSpace} from "../const";

const getBookmarkedOffers = (offersList) => offersList.filter((offer) => offer.isBookmarked);

const getOffersByCity = (cityName, offersList) =>
  offersList.filter((offer) => cityName === offer.city);

const getOffersByCities = (cities, offersList) => {
  const result = {};
  cities.forEach((city) => {
    result[city.name] = getOffersByCity(city.name, offersList);
  });
  return result;
};


export const selectBookmarkedOffers = (state) => getBookmarkedOffers(state[NameSpace.DATA].offers);

export const selectOffersByCity = (state) => getOffersByCity(state[NameSpace.APP].city, state[NameSpace.DATA].offers);

export const selectOffersListByCities = (state, offersList) => getOffersByCities(state[NameSpace.DATA].cities, offersList);
