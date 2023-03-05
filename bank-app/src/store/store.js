import { createStore } from "redux";
import combineReducers from "../reducers/mainReducers";

const store = createStore(combineReducers);

export default store ;
