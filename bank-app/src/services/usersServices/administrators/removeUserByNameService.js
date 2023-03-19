import routes from "../../../api";
import { messageBagActions } from "../../../actions/messageBagActions";

const RemoveUserByNameService =  name =>{
    return dispatch =>{
        const token = sessionStorage.getItem('token');
        dispatch(fetchUsersInProgress());
        fetch(routes.server + routes.route.api.users.admin.getUser + name,{
            method: "DELETE",
            headers: {"Authorization": "Bearer " + token}
        })
        .then(res => {
            if(res.ok){
                dispatch(messageBagActions.success('User deleted.'));
                return res;
            }else{
                throw new Error('error');
            }})
            .catch( () => {
                dispatch(messageBagActions.error('Remove user failure.'));
            });
    }
    }

export default RemoveUserByNameService;