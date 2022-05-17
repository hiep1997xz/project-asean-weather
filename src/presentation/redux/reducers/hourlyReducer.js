import { getHourlyList } from "../../../data/configHour";
import { hourlyActionType } from "../actionTypes/hourlyActionType";


const initialState = {
    loading: false,
    loaded: false,
    success: 0,
    error: '',
    data: {}
};

export default function hourlyReducer(state = initialState, action) {
    switch (action.type) {
        case hourlyActionType.GET_HOURLY_SUCCESS:
            // Em đang làm gì ở đây
            const hourlyList = getHourlyList(action.payload.forecast.forecastday[0].hour);
            return {
                ...state,
                loading: false,
                loaded: true,
                success: 1,
                data: {
                    hourly: action.payload,
                    hourlyList,
                }
            }
        case hourlyActionType.GET_HOURLY_FAIL:
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
