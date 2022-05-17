import {convertCity, getDailyByCity } from "../../../data/api/apiRequest"
import dailyAction from "../actions/dailyAction";

export const getDailyRequest = q => {
    return (dispatch) => {
        q = convertCity(q);
        getDailyByCity(q).then(resolve =>
        {
            dispatch(dailyAction.getDailySuccess(resolve));    
        }).catch(err => {
            dispatch(dailyAction.getDailyFail(err));
        })
    }
}
