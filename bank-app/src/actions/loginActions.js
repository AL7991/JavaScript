import { LOGIN_SUCCESS,LOGIN_FAILURE,LOGIN_REQUEST,LOGOUT } from "./actionsTypes";
import { loginService } from "../services/loginService";

const loginSuccess = user => {
    return{
        type:LOGIN_SUCCESS,
        user
    };
}

const loginFailure = error => {
    return{
        type:LOGIN_FAILURE,
        error
    };
}

const loginRequest = () => {
    return{
        type:LOGIN_REQUEST
    }
}

const login = (username, password) => {
    return  dispatch => {
        dispatch(loginRequest);
         loginService.login(dispatch,username, password);
            }
};

const logout = () =>{
    loginService.logout();
    return {type: LOGOUT};
}

export const loginActions = {
    loginSuccess,
    loginFailure,
    loginRequest,
    login,
    logout
};

