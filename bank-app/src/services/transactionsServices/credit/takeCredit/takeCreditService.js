import routes from "../../../../api";
import { messageBagActions } from "../../../../actions/messageBagActions";

const takeCredit =  amount =>{
    return dispatch =>{
        const token = sessionStorage.getItem('token');
        fetch(routes.server + routes.route.api.transactions.credit.takeCredit,{
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
              },
            body:JSON.stringify(amount)
        })
        .then(res => {
            if(res.ok){
                dispatch(messageBagActions.success('Credit granted success.'));
                return res;
            }else if(res.status === 400){
                dispatch(messageBagActions.error('The sum is too large. The maximum loan amount is 5000.'));
                return res;
            }
            else{
                throw new Error('error');
            }
        })
        .catch( () => {
            dispatch(messageBagActions.error('Credit failure.'));
        });
    }
    }


export default takeCredit;