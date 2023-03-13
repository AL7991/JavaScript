import routes from "../../../api";
import {historyRequest,historySuccess,historyFailure} from "../../../actions/historyActions";


const HistoryTransactionPage =  page =>{
    return dispatch =>{
        dispatch(historyRequest());
        fetch(routes.server + routes.route.api.transactions.history.page + page,{
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


export default HistoryTransactionPage;