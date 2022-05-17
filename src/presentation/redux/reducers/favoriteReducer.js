import { favoriteCurrentActionType } from "../actionTypes/favoriteCurrentActionType";


const initialState = {
    loading: false,
    loaded: false,
    success: 0,
    error: '',
    data: {}
  };

export default function favoriteReducer(state = initialState, action) {
    switch (action.type) {
        case favoriteCurrentActionType.GET_FAVORITE_CURRENT_SUCCESS :
            return {
                ...state,
                loading: false,
                loaded: true,
                success:  1,
                data: {
                    favorite: action.payload,
                }
            }
        case favoriteCurrentActionType.GET_FAVORITE_CURRENT_FAIL :
            return {
                ...state,
                loading: false,
                loaded: true,
                success: 0,
                error: action.error,
            }
        default:
            return state;
    }
}