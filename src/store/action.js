export const ActionType = {
  SELECT_OFFERS: `SELECT_OFFERS`,
  CHANGE_CITY: `CHANGE_CITY`,
  SORT_OFFERS: `SORT_OFFERS`,
  CHANGE_ORDER: `CHANGE_ORDER`,
};

export const ActionCreator = {
  selectOffers: () => ({
    type: ActionType.SELECT_OFFERS,
  }),
  changeCity: (cityName) => ({
    type: ActionType.CHANGE_CITY,
    payload: cityName,
  }),
  sortOffers: () => ({
    type: ActionType.SORT_OFFERS,
  }),
  changeOrder: (order) => ({
    type: ActionType.CHANGE_ORDER,
    payload: order,
  }),
};
