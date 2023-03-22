import routes from "../../../../api";
import { messageBagActions } from "../../../../actions/messageBagActions";

const RepaymentAllOfCredit =  () =>{
    return dispatch =>{
        const token = sessionStorage.getItem('token');
        fetch(routes.server + routes.route.api.transactions.credit.repaymentAllOfCredit,{
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + token}
        })
        .then(res => {
            if(res.ok){
                dispatch(messageBagActions.success('The loan has been repaid.'));
                return res;
            }
            else{
                throw new Error('error');
            }
        })
        .catch( () => {
            dispatch(messageBagActions.error('The amount exceeds the balance of the account.'));
        });
    }
    }


export default RepaymentAllOfCredit;