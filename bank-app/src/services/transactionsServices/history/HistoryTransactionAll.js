import routes from "../../../api";
import {historyRequest,historySuccess,historyFailure} from "../../../actions/historyActions";


const historyTransactionAll =  page =>{
    return dispatch =>{
        const token = sessionStorage.getItem('token');
        dispatch(historyRequest());
        fetch(routes.server + routes.route.api.transactions.history.allPages + page,{
            method: "GET",
            headers: { 'Authorization': 'Bearer ' + token}
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


export default historyTransactionAll;