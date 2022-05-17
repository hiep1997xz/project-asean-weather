import { navBarActionType } from "../actionTypes/navBarActionType";

const initialState = {
    loading: false,
    loaded: false,
    success: 0,
    error: '',
    data: {}
  };

const naviBarReducer = (state = initialState, action) => {
    switch (action.type) {
        case navBarActionType.GET_MENU:
            
            return {
                ...state,
                loading: false,
                loaded: true,
                success:  1,
                data: {
                    menu: action.payload,
                }
            }
        default:
            return state;
    }
}

export default naviBarReducer;