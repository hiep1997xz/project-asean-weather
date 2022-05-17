import { getUserActionType } from "../actionTypes/getUserActionType";

const initialState = {
    loading: false,
    loaded: false,
    success: 0,
    error: '',
    data: {}
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case getUserActionType.GET_USER_SUCCESS:
            const user = action.payload;    
            // user = {
            //     ...action.payload,
            //     favouriteCities: [
            //         ...action.payload.favouriteCities,
            //         {id: 1, name: "Ha Noi"},
            //         {id: 2, name: "Da Nang"},
            //         {id: 3, name: "Singapore"},
            //         {id: 4, name: "Kampot"},
            //     ],
            // };
            localStorage.setItem('user', JSON.stringify(user))
            return {
                ...state,
                loading: false,
                loaded: true,
                success: 1,
                data: {
                    user: action.payload,
                }
            }
        case getUserActionType.GET_USER_FAIL:
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

export default userReducer;