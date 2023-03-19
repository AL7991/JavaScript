import routes from "../../api";
import { messageBagActions } from "../../actions/messageBagActions";

const RegisterUser =  values =>{
    return dispatch =>{
        fetch(routes.server + routes.route.api.users.register,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body:JSON.stringify(values)
        })
        .then(res => {
            if(res.ok){
                dispatch(messageBagActions.success('Register success.'));
                return res;
            }else{
                throw new Error('error');
            }})
            .catch( error => {
                dispatch(messageBagActions.error('Register failure.'));
                console.log(error);
            });
    }
    }

export default RegisterUser;