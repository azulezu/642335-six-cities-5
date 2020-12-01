import {ActionType} from "../action";
import {DEFAULT_ORDER, DEFAULT_CITY_NAME} from "../../const";

const initialState = {
  offer: null,
  city: DEFAULT_CITY_NAME,
  order: DEFAULT_ORDER,
  email: ``,
  isAuthorized: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {
        offer: null,
        city: action.payload,
        order: DEFAULT_ORDER,
      });

    case ActionType.CHANGE_OFFER:
      return Object.assign({}, state, {
        offer: action.payload,
        city: action.payload.city,
        order: DEFAULT_ORDER,
      });

    case ActionType.CHANGE_ORDER:
      return Object.assign({}, state, {
        order: action.payload,
      });

    case ActionType.SIGN_IN:
      return Object.assign({}, state, {
        email: action.payload,
        isAuthorized: true,
      });

    default: return state;
  }
};

export default reducer;
