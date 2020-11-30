import {ActionCreator} from "./action";

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => {
      dispatch(ActionCreator.setOffers(data));
      dispatch(ActionCreator.setCities(data));
    })
);
