import routes from "../../../../api";
import { messageBagActions } from "../../../../actions/messageBagActions";
import updateLoggedUser from "../../../usersServices/updateLoggedUserService";

const RepaymentAllOfCredit =  () =>{
    return dispatch =>{
        const token = sessionStorage.getItem('token');
        fetch(routes.server + routes.route.api.transactions.credit.repaymentAllOfCredit,{
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + token}
        })
        .then(res => {
            if(res.ok){
                return res;
            }
            else{
                throw new Error('error');
            }
        })
        .then(async ()=>{
            await dispatch(updateLoggedUser());
            dispatch(messageBagActions.success('The loan has been repaid.'));
        })
        .catch( () => {
            dispatch(messageBagActions.error('The amount exceeds the balance of the account.'));
        });
    }
    }


export default RepaymentAllOfCredit;