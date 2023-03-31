import { FETCH_USERS_ERROR, FETCH_USERS_INPROGRESS, FETCH_USERS_SUCCESS, SEARCH_USER_SUCCESS } from "./actionsTypes";

export const fetchUsersInProgress = () =>{
    return {
        type: FETCH_USERS_INPROGRESS
        };
};

export const fetchUsersSuccess = usersArray =>{
    return {
        type: FETCH_USERS_SUCCESS,
        users: usersArray
        };
};

export const searchUserSuccess = searchUser =>{
    return {
        type: SEARCH_USER_SUCCESS,
        user: searchUser
        };
};

export const fetchUsersError = error =>{
    return {
        type: FETCH_USERS_ERROR,
        usersError: error
        };
};


