import { searchV2ActionType } from "../actionTypes/searchV2ActionType";

const getSearchV2Success = payload => {
    return {
        type: searchV2ActionType.GET_SEARCHV2_SUCCESS,
        payload,
    }
}

const getSearchV2Fail = payload => {
    return {
        type: searchV2ActionType.GET_SEARCHV2_FAIL,
        error: payload,
    }
}
const searchV2Action = {getSearchV2Fail,getSearchV2Success};
export default searchV2Action;