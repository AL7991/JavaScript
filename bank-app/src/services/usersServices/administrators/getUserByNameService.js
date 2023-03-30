import { messageBagActions } from "../../../actions/messageBagActions";
import { fetchUsersInProgress,fetchUsersError, searchUserSuccess } from "../../../actions/usersActions";
import routes from "../../../api";

const GetUserByNameService =  name =>{
    return dispatch =>{
        const token = sessionStorage.getItem('token');
        dispatch(fetchUsersInProgress());
        fetch(routes.server + routes.route.api.users.admin.getUser + name,{
            method: "GET",
            headers: {"Authorization": "Bearer " + token}
        })
        .then(res => {
            if(res.ok){
                return res.json();
            }else{
                throw new Error('error');
            }})
            .then(user => {
                dispatch(searchUserSuccess(user));
            })
            .catch( error => {
                dispatch(fetchUsersError(error));
                dispatch(messageBagActions.error("Not Found."))
            });
    }
    }


export default GetUserByNameService;