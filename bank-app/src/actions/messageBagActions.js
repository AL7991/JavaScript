import { MESSAGE_SUCCESS,MESSAGE_ERROR,MESSAGE_CLEAR } from "./actionsTypes";

const success = message =>{
    return {type:MESSAGE_SUCCESS, message};
};

const error = message => {
    return {type:MESSAGE_ERROR, message};
};

const clear = () => {
    return {type:MESSAGE_CLEAR};
};

export const messageBagActions = {
    success,
    error,
    clear
};