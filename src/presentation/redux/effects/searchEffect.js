import { getSearch } from "../../../data/api/apiRequest";
import searchAction from "../actions/searchAction";

export const getSearchRequest = searchValue => {
    return (dispatch) => {
        getSearch(searchValue).then(resolve =>
        {
            
            dispatch(searchAction.getSearchSuccess(resolve));    
        }).catch(err =>
        {
            dispatch(searchAction.getSearchFail(err));
        })
    }
}
