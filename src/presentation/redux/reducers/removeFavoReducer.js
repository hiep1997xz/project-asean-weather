import { removeFavoActionType } from "../actionTypes/removeFavoActionType";


const initialState = {
    loading: false,
    loaded: false,
    success: 0,
    error: '',
    data: {}
  };

const removeFavoReducer = (state = initialState, action) => {
    switch (action.type) {
        case removeFavoActionType.REMOVE_FAVO_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                success:  1,
                data: {
                    removeFavo: action.payload,
                }
            }
            case removeFavoActionType.REMOVE_FAVO_FAIL:
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

export default removeFavoReducer;