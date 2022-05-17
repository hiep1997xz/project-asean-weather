import { loginAdminActionType } from "../actionTypes/loginAdminActionType ";


const initialState = {
    loading: false,
    loaded: false,
    success: 0,
    error: '',
    data: {}
  };
export default function loginAdminReducer(state = initialState, action) {
    switch (action.type) {
        case loginAdminActionType.GET_lOGINADMIN_SUCCESS :
            localStorage.setItem("loginAdmin",JSON.stringify(action.payload.content));
            // const loginAdmin = JSON.parse( localStorage.getItem("loginAdmin"));
            return {
                ...state,
                loading: false,
                loaded: true,
                success:  1,
                data: {
                    loginAdmin: action.payload.content,
                }
            }
        case loginAdminActionType.GET_lOGINADMIN_FAIL :
            debugger
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