import { listUsersActionType } from "../actionTypes/listUsersActionType ";


const initialState = {
    loading: false,
    loaded: false,
    success: 0,
    error: '',
    data: {}
  };
export default function listUsersReducer(state = initialState, action) {
    switch (action.type) {
        case listUsersActionType.GET_LISTUSERS_SUCCESS :
            localStorage.setItem("listUsers",JSON.stringify(action.payload.content));
            // const loginAdmin = JSON.parse( localStorage.getItem("loginAdmin"));
            return {
                ...state,
                loading: false,
                loaded: true,
                success:  1,
                data: {
                    listUsers: action.payload.content,
                }
            }
        case listUsersActionType.GET_LISTUSERS_FAIL :
            return {
                ...state,
                loading: false,
                loaded: true,
                success: 0,
                error: action.err,
            }
        default:
            return state;
    }
}