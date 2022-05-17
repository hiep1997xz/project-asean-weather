import { searchV3ActionType } from "../actionTypes/searchV3ActionType";

const getSearchV3 = payload => {
    return {
        type: searchV3ActionType.GET_SEARCHV3_SUCCESS,
        payload,
    }
}

export default getSearchV3;