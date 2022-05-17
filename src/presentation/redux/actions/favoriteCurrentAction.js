import { favoriteCurrentActionType } from "../actionTypes/favoriteCurrentActionType"

const getFavoriteCurrentSuccess = payload => {
    return {
        type: favoriteCurrentActionType.GET_FAVORITE_CURRENT_SUCCESS,
        payload,
    }
}

const getFavoriteCurrentFail = payload => {
    return {
        type: favoriteCurrentActionType.GET_FAVORITE_CURRENT_FAIL,
        error: payload,
    }
}

const favoriteCurrentAction = {
    getFavoriteCurrentSuccess,
    getFavoriteCurrentFail,
}

export default favoriteCurrentAction;

