import { searchV3ActionType } from "../actionTypes/searchV3ActionType";

const initialState = {
    loading: false,
    loaded: false,
    success: 0,
    error: '',
    data: {}
};

const searchV3Reducer = (state = initialState, action) =>
{
    switch (action.type) {
        case searchV3ActionType.GET_SEARCHV3_SUCCESS:
        // kiểm tra xem payload có dữ liệu k, nếu có cho success=1, nếu k cho success=0
            if (action.payload) {
                const q = action.payload;
                localStorage.setItem("cityName", q);
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
        
        default:
            return state;
    }
}

export default searchV3Reducer;