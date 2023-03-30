import routes from "../../api";
import { loginActions } from "../../actions/loginActions";
import { messageBagActions } from "../../actions/messageBagActions";

const login = (dispatch,values) => {

        dispatch(loginActions.loginRequest());

        fetch(routes.server + routes.route.api.users.login,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body:JSON.stringify(values)
        })
            .then(res => res.text())
            .then( data => {
                sessionStorage.setItem('token', data);
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
                    dispatch(loginActions.loginSuccess(user));
                    dispatch(messageBagActions.success('LoggedIn'));
                })
                .catch(error => {
                    dispatch(loginActions.loginFailure(error));
                    dispatch(messageBagActions.error('Bad username or password'));
            })
            });
};

const logout = () => {
    sessionStorage.removeItem('token');
    window.location.reload();
};

export const loginService = {
    login,
    logout
}