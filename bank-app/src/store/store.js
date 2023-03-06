import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import combineReducers from "../reducers/mainReducers";

const middlewares = [thunk];
const store = createStore(combineReducers, applyMiddleware(...middlewares));

export default store ;
