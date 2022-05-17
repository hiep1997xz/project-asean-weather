import { convertCity, getCurrentByCity } from "../../../data/api/apiRequest"
import currentActions from "../actions/currentAction";


export const getCurrentRequest = q => {
    return (dispatch) => {
        q = convertCity(q);
        getCurrentByCity(q).then(resolve => {
            //console.log(resolve);
            dispatch(currentActions.getCurrentSuccess(resolve));    
        }).catch(err => {
            dispatch(currentActions.getCurrentFail(err));
        })
    }
}

