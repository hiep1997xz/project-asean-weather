
import {convertCity, getHourlyByCity } from "../../../data/api/apiRequest"
import hourlyAction from "../actions/hourlyAction";

export const getHourlyRequest = q => {
    return (dispatch) => {
        q = convertCity(q);
        getHourlyByCity(q).then(resolve => {
            dispatch(hourlyAction.getHourlySuccess(resolve));    
        }).catch(err => {
            dispatch(hourlyAction.getHourlyFail(err));
        })
    }
}


