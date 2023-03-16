import routes from "../../../api";
import { messageBagActions } from "../../../actions/messageBagActions";

const TransferService =  transferInfo =>{
    return dispatch =>{
        if(parseInt(transferInfo.amount) < 0 ){
            dispatch(messageBagActions.error('Transfer failure.'));
            return;
        }
        const token = sessionStorage.getItem('token');
        fetch(routes.server + routes.route.api.transactions.transfer,{
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
              },
            body:JSON.stringify(transferInfo)
        })
        .then(res => {
            if(res.ok){
                return res;
            }else{
                throw new Error('error');
            }
        })
        .then(() =>{
            dispatch(messageBagActions.success('Transfer success.'));
        })
        .catch( () => {
            dispatch(messageBagActions.error('Transfer failure.'));
        });
    }
    }


export default TransferService;