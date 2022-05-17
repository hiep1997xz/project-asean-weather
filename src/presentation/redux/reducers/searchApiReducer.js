import { searchApiActionType } from "../actionTypes/searchApiActionType";


const initialState = {
    loading: false,
    loaded: false,
    success: {
        E1: 0,
        E2: 0,
        E3: 0,
    },
    error: {
        E1: '',
        E2: '',
        E3: '',
    },
    data: {}
};

export default function searchApiReducer(state = initialState, action)
{
    switch (action.type) {
        case searchApiActionType.GET_SEARCHAPI_E1_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                success: {
                    ...state.success,
                    E1: 1,
                },
                data: {
                    ...state.data,
                    E1: action.payload,
                }
            }
        case searchApiActionType.GET_SEARCHAPI_E1_FAIL:
            return {
                ...state,
                loading: false,
                loaded: true,
                success: {
                    ...state.success,
                },
                error: {
                    ...state.error,
                    E1: action.error,
                },
            }

        case searchApiActionType.GET_SEARCHAPI_E2_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                success: {
                    ...state.success,
                    E2: 1,
                },
                data: {
                    ...state.data,
                    E2: action.payload,
                }
            }
        case searchApiActionType.GET_SEARCHAPI_E2_FAIL:
            return {
                ...state,
                loading: false,
                loaded: true,
                success: {
                    ...state.success,
                },
                error: {
                    ...state.error,
                    E2: action.error,
                },
            }

        case searchApiActionType.GET_SEARCHAPI_E3_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                success: {
                    ...state.success,
                    E3: 1,
                },
                data: {
                    ...state.data,
                    E3: action.payload,
                }
            }
        case searchApiActionType.GET_SEARCHAPI_E3_FAIL:
            return {
                ...state,
                loading: false,
                loaded: true,
                success: {
                    ...state.success,
                },
                error: {
                    ...state.error,
                    GET_SEARCHAPI_E3_FAIL: action.error,
                },
            }

        default:
            return state;
    }
}