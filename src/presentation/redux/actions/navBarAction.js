import { navBarActionType } from "../actionTypes/navBarActionType"

const getMenuAction = payload => {
    
    return {
        type: navBarActionType.GET_MENU,
        payload,
    }
}

export default getMenuAction;