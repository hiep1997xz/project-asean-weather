import { getListUsers } from "../../../data/api/apiRequest"
import listUsersAction from "../actions/getListUsersAction";

export const getListUsersRequest = (email,password) => {
    return (dispatch) => {
        getListUsers(email,password).then(resolve => {
         
            dispatch(listUsersAction.getListUsersSuccess(resolve));
        }).catch(err => {
            dispatch(listUsersAction.getListUsersFail(err));
        })
    }
}

