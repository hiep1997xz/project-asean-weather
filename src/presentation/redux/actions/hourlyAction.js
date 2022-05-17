import { hourlyActionType } from "../actionTypes/hourlyActionType"

const getHourlySuccess = payload => {
    return {
        type: hourlyActionType.GET_HOURLY_SUCCESS,
        payload,
    }
}

const getHourlyFail = payload => {
    return {
        type: hourlyActionType.GET_HOURLY_FAIL,
        error: payload,
    }
}
const hourlyAction = {getHourlyFail,getHourlySuccess};
export default hourlyAction;