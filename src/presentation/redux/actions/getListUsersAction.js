import { listUsersActionType } from "../actionTypes/listUsersActionType "

const getListUsersSuccess = payload => {
    return {
        type: listUsersActionType.GET_LISTUSERS_SUCCESS,
        payload,
    }
}

const getListUsersFail = (payload) => {
    return {
        type: listUsersActionType.GET_LISTUSERS_FAIL,
        err: payload,
    }
}

const listUsersAction = {getListUsersSuccess, getListUsersFail};

export default listUsersAction;