import { MESSAGE_ERROR, MESSAGE_SUCCESS } from "../actions/actionsTypes";

const initState={
    message:"",
    type:""
};


const messageBagReducer = (state=initState,action) =>{
    if(action.type === MESSAGE_SUCCESS){
        return {
            ...state,
            type: "alert alert-success",
            message:action.message
        };
    }else if(action.type === MESSAGE_ERROR){
        return {
            ...state,
            type: "alert alert-danger",
            message:action.message
        };
    }else {
        return{
            ...state,
            type: "",
            message:""
        };
    }
};

export default messageBagReducer;
