import {combineReducers} from "redux";
import {NameSpace} from "../const";
import dataReducer from "./data/data-reducer";
import appReducer from "./app/app-reducer";

const reducer = combineReducers({
  [NameSpace.APP]: appReducer,
  [NameSpace.DATA]: dataReducer,
});

export default reducer;
