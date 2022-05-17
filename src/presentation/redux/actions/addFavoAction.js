import { addFavoActionType } from "../actionTypes/addFavoActionType"

const addFavoSuccess = (payload) => {
    return {
        type: addFavoActionType.ADD_FAVO_SUCCESS,
        payload,
    }
}

const addFavoFail = (err) => {
    return {
        type: addFavoActionType.ADD_FAVO_FAIL,
        err,
    }
}

const addFavoAction = {
    addFavoSuccess,
    addFavoFail,
}

export default addFavoAction;