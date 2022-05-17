import { removeFavoActionType } from "../actionTypes/removeFavoActionType"

const removeFavoSuccess = (payload) => {
    return {
        type: removeFavoActionType.REMOVE_FAVO_SUCCESS,
        payload,
    }
}

const removeFavoFail = (err) => {
    return {
        type: removeFavoActionType.REMOVE_FAVO_FAIL,
        err,
    }
}

const removeFavoAction = {
    removeFavoSuccess,
    removeFavoFail,
}

export default removeFavoAction;