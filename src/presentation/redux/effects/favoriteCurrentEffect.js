import { convertCity, getCurrentByCity } from "../../../data/api/apiRequest"
import favoriteActions from "../actions/favoriteCurrentAction";


export const getFavoriteCurrentRequest = listCities => {
    return async (dispatch) => {
        const results = [];
        const errors = [];
        

        for(let i = 0; i < listCities.length; i ++) {
            const q = convertCity(listCities[i]);
            await getCurrentByCity(q).then(resolve => {
                const data = {
                    ... resolve,
                    city: listCities[i],
                }
                results.push(data);
            }).catch(err=> {
                errors.push(err)
            })
        }
        if (results.length > 0 && errors.length < 1) {
            dispatch(favoriteActions.getFavoriteCurrentSuccess(results)); 
        } else if (results < 1 && errors > 0) {
            dispatch(favoriteActions.getFavoriteCurrentFail(errors));
        }
    }
}

