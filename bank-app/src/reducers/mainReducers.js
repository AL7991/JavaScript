import {combineReducers} from "redux";
import usersReducer from "./usersReducer";
import messageBagReducer from "./messageBagReducer";

export default combineReducers({
    usersReducer,
    messageBagReducer
});