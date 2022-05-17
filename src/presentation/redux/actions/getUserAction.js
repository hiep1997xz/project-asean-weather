import { getUserActionType } from "../actionTypes/getUserActionType"

const getUserSuccess = (payload) => {
    return {
        type: getUserActionType.GET_USER_SUCCESS,
        payload,
    }
}

const getUserFail = (err) => {
    return {
        type: getUserActionType.GET_USER_SUCCESS,
        err,
    }
}

const getUserAction = {
    getUserSuccess,
    getUserFail
}

export default getUserAction;