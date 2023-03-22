import routes from "../../../../api";
import { messageBagActions } from "../../../../actions/messageBagActions";

const RepaymentPartOfCredit =  amount =>{
    return dispatch =>{
        const token = sessionStorage.getItem('token');
        fetch(routes.server + routes.route.api.transactions.credit.repaymentPartOfCredit,{
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
              },
            body:JSON.stringify(amount)
        })
        .then(res => {
            if(res.ok){
                dispatch(messageBagActions.success('Payment accepted.'));
                return res;
            }else if(res.status === 400){
                dispatch(messageBagActions.error('The amount exceeds the balance of the account.'));
                return res;
            }
            else{
                throw new Error('error');
            }
        })
        .catch( () => {
            dispatch(messageBagActions.error('Something went wrong.'));
        });
    }
    }


export default RepaymentPartOfCredit;