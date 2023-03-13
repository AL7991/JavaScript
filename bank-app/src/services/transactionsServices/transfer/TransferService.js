import routes from "../../../api";
import { messageBagActions } from "../../../actions/messageBagActions";

const Transfer =  transferInfo =>{
    return dispatch =>{
        fetch(routes.server + routes.route.api.transactions.transfer,{
            method: "POST",
            headers: {
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


export default Transfer;