import { convertCity, getCurrentByCity } from "../../../data/api/apiRequest"
import searchApiActions from "../actions/searchApiAction";


export const getSearchApiE1Request = q => {
    return (dispatch) => {
        q = convertCity(q);
        getCurrentByCity(q).then(resolve => {
            //console.log(resolve);
            dispatch(searchApiActions.getSearchApiE1Success(resolve));    
        }).catch(err => {
            dispatch(searchApiActions.getSearchApiE1Fail(err));
        })
    }
}

export const getSearchApiE2Request = q => {
    return (dispatch) => {
        q = convertCity(q);
        getCurrentByCity(q).then(resolve => {
            //console.log(resolve);
            dispatch(searchApiActions.getSearchApiE2Success(resolve));    
        }).catch(err => {
            dispatch(searchApiActions.getSearchApiE2Fail(err));
        })
    }
}


export const getSearchApiE3Request = q => {
    return (dispatch) => {
        q = convertCity(q);
        getCurrentByCity(q).then(resolve => {
            //console.log(resolve);
            dispatch(searchApiActions.getSearchApiE3Success(resolve));    
        }).catch(err => {
            dispatch(searchApiActions.getSearchApiE3Fail(err));
        })
    }
}


