import { searchActionType } from "../actionTypes/searchActionType";

const getSearchSuccess = payload => {
    return {
        type: searchActionType.GET_SEARCH_SUCCESS,
        payload,
    }
}

const getSearchFail = payload => {
    return {
        type: searchActionType.GET_SEARCH_FAIL,
        error: payload,
    }
}
const searchAction = {getSearchFail,getSearchSuccess};
export default searchAction;