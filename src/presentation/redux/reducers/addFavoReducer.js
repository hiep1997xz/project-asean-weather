import { addFavoActionType } from "../actionTypes/addFavoActionType";


const initialState = {
    loading: false,
    loaded: false,
    success: 0,
    error: '',
    data: {}
  };

const addFavoReducer = (state = initialState, action) => {
    switch (action.type) {
        case addFavoActionType.ADD_FAVO_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                success:  1,
                data: {
                    addFavo: action.payload,
                }
            }
            case addFavoActionType.ADD_FAVO_FAIL:
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

export default addFavoReducer;