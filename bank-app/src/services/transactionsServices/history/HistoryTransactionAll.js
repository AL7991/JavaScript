import routes from "../../../api";
import {historyRequest,historySuccess,historyFailure} from "../../actions/historyActions";


const HistoryTransactionAll =  () =>{
    return dispatch =>{
        dispatch(historyRequest());
        fetch(routes.server + routes.route.api.transactions.history.all,{
            method: "GET"
        })
        .then(res => {
            return res.json();
        })
        .then(data =>{
            dispatch(historySuccess(data));
        })
        .catch( error => {
            dispatch(historyFailure(error));
        });
    }
    }


export default HistoryTransactionAll;