import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "../actions/actionsTypes";

const initState={
    isLogged:false,
    loginLoading:false,
    user:null
}

const loginReducer = (state = initState,action) => {
    switch (action.type){
        case LOGIN_REQUEST:
            return{
                loginLoading: true,
                isLogged: false
            };
        case LOGIN_SUCCESS:
            return {
                loginLoading: false,
                isLogged: true,
                user: action.user
            };
        case LOGIN_FAILURE:
            return {
                loginLoading:false,
                isLogged: false
            }
        case LOGOUT:
            return{
                isLogged: false,
                user: null
            }
        default:
            return state;
    }
};

export default loginReducer;