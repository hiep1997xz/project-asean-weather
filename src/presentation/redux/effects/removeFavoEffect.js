import { removeFavoBE } from "../../../data/api/apiRequest"
import removeFavoAction from "../actions/removeFavoAction"

export const removeFavoRequest = (fbId, cityName) => {
    return (dispatch) => {
        removeFavoBE(fbId,cityName).then(resolve => {
            
            dispatch(removeFavoAction.removeFavoSuccess(resolve));
        }).catch(err => {
            dispatch(removeFavoAction.removeFavoFail(err));
        })
    }
}