import { getSearchV2 } from "../../../data/api/apiRequest";
import searchV2Action from "../actions/searchV2Action";

export const getSearchV2Request = searchValue => {
    return (dispatch) => {
        getSearchV2(searchValue).then(resolve =>
        {
            const data = resolve.content;
            dispatch(searchV2Action.getSearchV2Success(data));    
        }).catch(err =>
        {
            dispatch(searchV2Action.getSearchV2Fail(err));
        })
    }
}
