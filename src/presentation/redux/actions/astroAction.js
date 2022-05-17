import { astroActionType } from "../actionTypes/astroActionType"

const getAstroSuccess = payload => {
    return {
        type: astroActionType.GET_ASTRO_SUCCESS,
        payload,
    }
}

const getAstroFail = payload => {
    return {
        type: astroActionType.GET_ASTRO_FAIL,
        err: payload,
    }
}

const astroAction = {getAstroSuccess, getAstroFail};

export default astroAction;