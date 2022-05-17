import { addFavoBE } from "../../../data/api/apiRequest"
import addFavoAction from "../actions/addFavoAction"

export const addFavoRequest = (fbId, cityName) => {
    return (dispatch) => {
        addFavoBE(fbId,cityName).then(resolve => {
            
            dispatch(addFavoAction.addFavoSuccess(resolve));
        }).catch(err => {
            dispatch(addFavoAction.addFavoFail(err));
        })
    }
}