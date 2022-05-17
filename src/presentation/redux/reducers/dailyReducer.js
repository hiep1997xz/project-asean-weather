import { dailyActionType } from "../actionTypes/dailyActionType";


const initialState = {
    loading: false,
    loaded: false,
    success: 0,
    error: '',
    data: {}
};

export default function dailyReducer(state = initialState, action) {
    switch (action.type) {
        case dailyActionType.GET_DAILY_SUCCESS:
            // Em đang làm gì ở đây
            return {
                ...state,
                loading: false,
                loaded: true,
                success: 1,
                data: {
                    daily: action.payload,
                }
            }
        case dailyActionType.GET_DAILY_FAIL:
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
