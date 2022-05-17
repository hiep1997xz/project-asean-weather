import { dailyActionType } from "../actionTypes/dailyActionType"

const getDailySuccess = payload => {
    return {
        type: dailyActionType.GET_DAILY_SUCCESS,
        payload,
    }
}

const getDailyFail = payload => {
    return {
        type: dailyActionType.GET_DAILY_FAIL,
        error: payload,
    }
}
const dailyAction = {getDailySuccess,getDailyFail};
export default dailyAction;