import { combineReducers } from "redux";
import accountDetailReducer from "./accountDetail";
import accountsReducer from "./accounts";
import categoriesReducer from "./categories";

const rootReducer = combineReducers({
    accounts: accountsReducer,
    accountDetail: accountDetailReducer,
    categories: categoriesReducer
})

export default rootReducer