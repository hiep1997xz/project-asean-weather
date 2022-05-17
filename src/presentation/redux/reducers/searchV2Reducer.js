import { searchV2ActionType } from "../actionTypes/searchV2ActionType";

const initialState = {
    loading: false,
    loaded: false,
    success: 0,
    error: '',
    data: {}
};

const searchV2Reducer = (state = initialState, action) =>
{
    switch (action.type) {
        case searchV2ActionType.GET_SEARCHV2_SUCCESS:
        // kiểm tra xem payload có dữ liệu k, nếu có cho success=1, nếu k cho success=0
            if (action.payload) {
                return {
                    ...state,
                    loading: false,
                    loaded: true,
                    success: 1,
                    data: {
                        search: action.payload,
                    }
                }

            } else {
                return {
                    ...state,
                    loading: false,
                    loaded: true,
                    success: 0,
                    data: {
                        ...state.data,
                    }
                }
            }
        case searchV2ActionType.GET_SEARCHV2_FAIL:

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

export default searchV2Reducer;