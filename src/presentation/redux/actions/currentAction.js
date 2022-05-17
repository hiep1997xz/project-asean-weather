import { currentActionType } from "../actionTypes/currentActionType"

const getCurrentSuccess = payload => {
    return {
        type: currentActionType.GET_CURRENT_SUCCESS,
        payload,
    }
}

const getCurrentFail = payload => {
    return {
        type: currentActionType.GET_CURRENT_FAIL,
        error: payload,
    }
}

const currentActions = {
    getCurrentSuccess,
    getCurrentFail,
}

export default currentActions;

