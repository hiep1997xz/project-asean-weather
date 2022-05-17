import { searchActionType } from "../actionTypes/searchActionType";
import history from "../../pages/searchPage";

const initialState = {
    loading: false,
    loaded: false,
    success: 0,
    error: '',
    data: {}
};

const searchReducer = (state = initialState, action) =>
{
    switch (action.type) {
        case searchActionType.GET_SEARCH_SUCCESS:
        // kiểm tra xem payload có dữ liệu k, nếu có cho success=1, nếu k cho success=0
            if (action.payload) {
                const q = action.payload.name;
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
                        search: action.payload,
                    }
                }
            }
        case searchActionType.GET_SEARCH_FAIL:

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

export default searchReducer;