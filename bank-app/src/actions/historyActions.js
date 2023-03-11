import { HISTORY_SUCCESS,HISTORY_FAILURE,HISTORY_REQUEST } from "./actionsTypes";

export const historyRequest = () => {
    return{
        type:HISTORY_REQUEST,
    };
}

export const historySuccess = history => {
    return{
        type:HISTORY_SUCCESS,
        historyTransaction: history
    };
}

export const historyFailure = error => {
    return{
        type:HISTORY_FAILURE,
        error
    };
}




