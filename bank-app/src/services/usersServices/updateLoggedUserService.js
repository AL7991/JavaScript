import routes from "../../api";
import { loginActions } from "../../actions/loginActions";

const updateLoggedUser = () => {
    return async dispatch =>{
        dispatch(loginActions.loginRequest());
        const token = sessionStorage.getItem('token');
        await fetch(routes.server + routes.route.api.users.loggedUser,{
            method: "GET",
            headers:{"Authorization": "Bearer " + token}
        })
        .then(response => {
            if(response.ok){
                return response.json();
            }else{
                throw new Error('error');
            }
        })
        .then( user => {
            dispatch(loginActions.loginSuccess(user));
        })
        .catch(error => {
            dispatch(loginActions.loginFailure(error));
    })
    }   
};

export default updateLoggedUser;