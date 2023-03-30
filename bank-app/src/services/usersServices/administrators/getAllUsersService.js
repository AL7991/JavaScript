import { fetchUsersInProgress,fetchUsersSuccess,fetchUsersError } from "../../../actions/usersActions";
import routes from "../../../api";

const GetAllUsersService =  (page) =>{
    return async dispatch =>{
        const token = sessionStorage.getItem('token');
        dispatch(fetchUsersInProgress());
        await fetch(routes.server + routes.route.api.users.admin.allUsersPages + page,{
            method: "GET",
            headers: {"Authorization": "Bearer " + token}
        })
        .then(res => {
            if(res.ok){
                return res.json();
            }else{
                throw new Error('error');
            }})
            .then(users => {
                dispatch(fetchUsersSuccess(users));
            })
            .catch( error => {
                dispatch(fetchUsersError(error));
            });
    }
    }


export default GetAllUsersService;