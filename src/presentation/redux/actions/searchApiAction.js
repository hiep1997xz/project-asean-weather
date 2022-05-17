import { searchApiActionType } from "../actionTypes/searchApiActionType";

const getSearchApiE1Success = payload => {
    return {
        type: searchApiActionType.GET_SEARCHAPI_E1_SUCCESS,
        payload,
    }
}

const getSearchApiE1Fail = payload => {
    return {
        type: searchApiActionType.GET_SEARCHAPI_E1_FAIL,
        error: payload,
    }
}

const getSearchApiE2Success = payload => {
    return {
        type: searchApiActionType.GET_SEARCHAPI_E2_SUCCESS,
        payload,
    }
}

const getSearchApiE2Fail = payload => {
    return {
        type: searchApiActionType.GET_SEARCHAPI_E2_FAIL,
        error: payload,
    }
}

const getSearchApiE3Success = payload => {
    return {
        type: searchApiActionType.GET_SEARCHAPI_E3_SUCCESS,
        payload,
    }
}

const getSearchApiE3Fail = payload => {
    return {
        type: searchApiActionType.GET_SEARCHAPI_E3_FAIL,
        error: payload,
    }
}

const searchApiAction = {
    getSearchApiE1Success,
    getSearchApiE1Fail,
    getSearchApiE2Success,
    getSearchApiE2Fail,
    getSearchApiE3Success,
    getSearchApiE3Fail
};
export default searchApiAction;