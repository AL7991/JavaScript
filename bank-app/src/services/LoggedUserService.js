import routes from "../api"
import { fetchLoggedUserInProgress, fetchLoggedUserSuccess, fetchLoggedUserError} from "../actions/usersActions";
import { messageBagActions } from "../actions/messageBagActions";

const loggedUser = (uName,pass) => {
    return dispatch =>{
        dispatch(fetchLoggedUserInProgress());
        fetch(routes.server + routes.route.api.users.login,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body:JSON.stringify({userName: uName, password: pass})
        })
        .then(res => res.text())
        .then(data => {
            sessionStorage.setItem('token',data);
            return fetch(routes.server + routes.route.api.users.loggedUser,{
                method: "GET",
                headers:{"Authorization": "Bearer " + data}
            })
            .then(response => {
                if(response.ok){
                    return response.json();
                }else{
                    throw new Error('error');
                }
            })
            .then(user => {
                dispatch(fetchLoggedUserSuccess(user));
                dispatch(messageBagActions.success('LoggedIn'));
            })
            .catch(error => {
                dispatch(fetchLoggedUserError(error));
                dispatch(messageBagActions.error('Bad username or password'));
            })
        })
        .catch(error => {
            dispatch(fetchLoggedUserError(error));
        })
        }
};

export default loggedUser;