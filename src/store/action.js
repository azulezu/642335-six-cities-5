export const ActionType = {
  SET_OFFERS: `SET_OFFERS`,
  SET_CITIES: `SET_CITIES`,
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_OFFER: `CHANGE_OFFER`,
  CHANGE_ORDER: `CHANGE_ORDER`,
  TOGGLE_BOOKMARK: `TOGGLE_BOOKMARK`,
  SIGN_IN: `SIGN_IN`,
};

export const ActionCreator = {
  setOffers: (offers) => ({
    type: ActionType.SET_OFFERS,
    payload: offers,
  }),
  setCities: (cities) => ({
    type: ActionType.SET_CITIES,
    payload: cities,
  }),
  changeCity: (cityName) => ({
    type: ActionType.CHANGE_CITY,
    payload: cityName,
  }),
  changeOffer: (offer) => ({
    type: ActionType.CHANGE_OFFER,
    payload: offer,
  }),
  changeOrder: (order) => ({
    type: ActionType.CHANGE_ORDER,
    payload: order,
  }),
  toggleBookmark: (offer) => ({
    type: ActionType.TOGGLE_BOOKMARK,
    payload: offer,
  }),
  signIn: (email) => ({
    type: ActionType.SIGN_IN,
    payload: email,
  }),
};
