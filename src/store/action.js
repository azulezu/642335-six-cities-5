export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_OFFER: `CHANGE_OFFER`,
  CHANGE_ORDER: `CHANGE_ORDER`,
  TOGGLE_BOOKMARK: `TOGGLE_BOOKMARK`,
  SIGN_IN: `SIGN_IN`,
};

export const ActionCreator = {
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
