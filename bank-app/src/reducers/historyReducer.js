import { HISTORY_SUCCESS,HISTORY_FAILURE,HISTORY_REQUEST } from "../actions/actionsTypes";

const initState={
    historyLoading:false,
    history:[]
}

const historyReducer = (state = initState,action) => {
    switch (action.type){
        case HISTORY_REQUEST:
            return{
                historyLoading: true
            };
        case HISTORY_SUCCESS:
            return {
                historyLoading: false,
                history: action.historyTransaction
            };
        case HISTORY_FAILURE:
            return {
                historyLoading:false
            }
        default:
            return state;
    }
};

export default historyReducer;