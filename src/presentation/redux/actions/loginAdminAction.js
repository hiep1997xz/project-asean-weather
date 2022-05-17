import { loginAdminActionType } from "../actionTypes/loginAdminActionType "

const getLoginAdminSuccess = payload => {
    return {
        type: loginAdminActionType.GET_lOGINADMIN_SUCCESS,
        payload,
    }
}

const getLoginAdminFail= payload => {
    return {
        type: loginAdminActionType.GET_lOGINADMIN_FAIL,
        err: payload,
    }
}

const loginAdminAction = {getLoginAdminSuccess, getLoginAdminFail};

export default loginAdminAction;