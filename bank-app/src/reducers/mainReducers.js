import {combineReducers} from "redux";
import loginReducer from "./loginReducer";
import messageBagReducer from "./messageBagReducer";

export default combineReducers({
    loginReducer,
    messageBagReducer
});