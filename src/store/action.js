export const ActionType = {
  SELECT_OFFERS: `SELECT_OFFERS`,
  CHANGE_CITY: `CHANGE_CITY`,
  SORT_OFFERS: `SORT_OFFERS`,
};

export const ActionCreator = {
  selectOffers: () => ({
    type: ActionType.SELECT_OFFERS,
  }),
  changeCity: (cityName) => ({
    type: ActionType.CHANGE_CITY,
    payload: cityName,
  }),
  sortOffers: (order) => ({
    type: ActionType.SORT_OFFERS,
    payload: order,
  }),
};
