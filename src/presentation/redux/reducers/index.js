import { combineReducers } from "redux";
import currentReducer from "./currentReducer";
import astroReducer from "./astroReducer";
import hourlyReducer from "./hourlyReducer";
import naviBarReducer from "./naviBarReducer";
import searchReducer from "./searchReducer";
import searchV2Reducer from "./searchV2Reducer";
import searchV3Reducer from "./searchV3Reducer";
import dailyReducer from "./dailyReducer";
import searchApiReducer from "./searchApiReducer";
import favoriteReducer from "./favoriteReducer";
import userReducer from "./userReducer";
import addFavoReducer from "./addFavoReducer";
import removeFavoReducer from "./removeFavoReducer";
import loginAdminReducer from "./loginAdminReducer";
import listUsersReducer from "./listUsersReducer"
import { reducer as toastr } from "react-redux-toastr";

export default combineReducers({
    currentReducer,
    astroReducer,
    hourlyReducer,
    naviBarReducer,
    searchReducer,
    searchV2Reducer,
    searchV3Reducer,
    dailyReducer,
    searchApiReducer,
    favoriteReducer,
    userReducer,
    addFavoReducer,
    removeFavoReducer,
    loginAdminReducer,
    listUsersReducer,
    toastr,
})
