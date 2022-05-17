import { astroActionType } from "../actionTypes/astroActionType";


const initialState = {
    loading: false,
    loaded: false,
    success: 0,
    error: '',
    data: {}
  };

export default function astroReducer(state = initialState, action) {
    switch (action.type) {
        case astroActionType.GET_ASTRO_SUCCESS :
            return {
                ...state,
                loading: false,
                loaded: true,
                success:  1,
                data: {
                    astronomy: action.payload,
                }
            }
        case astroActionType.GET_ASTRO_FAIL :
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