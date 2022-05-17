import { convertCity, getAstronomyByCity } from "../../../data/api/apiRequest"
import astroAction from "../actions/astroAction";

export const getAstroRequest = q => {
    return (dispatch) => {
        q = convertCity(q);
        getAstronomyByCity(q).then(resolve => {
            dispatch(astroAction.getAstroSuccess(resolve));
        }).catch(err => {
            dispatch(astroAction.getAstroFail(err));
        })
    }
}

