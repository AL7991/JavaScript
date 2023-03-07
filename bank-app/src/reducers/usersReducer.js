import { FETCH_LOGGED_USER_ERROR, FETCH_LOGGED_USER_INPROGRESS, FETCH_LOGGED_USER_SUCCESS } from "../actions/actionsTypes";

const initialState = {
        isLogged:false,
        inprogress: false,
        error:null,
        user:null
}

const userReducer = (state = initialState,action) => {
    if(action.type === FETCH_LOGGED_USER_INPROGRESS){
        return{
            ...state,
            inprogress: true
        };
    }
    else if(action.type === FETCH_LOGGED_USER_SUCCESS){
        return{
            ...state,
            isLogged:true,
            inprogress: false,
            user: action.user
        };
    }
    else if(action.type === FETCH_LOGGED_USER_ERROR){
        return{
            ...state,
            inprogress: false,
            error: action.error
        };
    }

return state;

}
export default userReducer;