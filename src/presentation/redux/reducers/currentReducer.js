import { currentActionType } from "../actionTypes/currentActionType";


const initialState = {
    loading: false,
    loaded: false,
    success: 0,
    error: '',
    data: {}
  };

export default function currentReducer(state = initialState, action) {
    switch (action.type) {
        case currentActionType.GET_CURRENT_SUCCESS :
            return {
                ...state,
                loading: false,
                loaded: true,
                success:  1,
                data: {
                    current: action.payload,
                }
            }
        case currentActionType.GET_CURRENT_FAIL :
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