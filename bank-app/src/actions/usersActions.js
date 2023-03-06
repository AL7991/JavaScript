import { FETCH_LOGGED_USER_ERROR, FETCH_LOGGED_USER_INPROGRESS, FETCH_LOGGED_USER_SUCCESS } from "./actionsTypes";

export const fetchLoggedUserInProgress = () =>{
return {
    type: FETCH_LOGGED_USER_INPROGRESS
    };
};

export const fetchLoggedUserSuccess = LoggedUser =>{
    return {
        type: FETCH_LOGGED_USER_SUCCESS,
        user: LoggedUser
        };
};

export const fetchLoggedUserError = error =>{
    return {
        type: FETCH_LOGGED_USER_ERROR,
        loggedUserError: error
        };
};

