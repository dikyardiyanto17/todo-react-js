import { combineReducers } from "redux";
import activitiesReducers from "./activities";

const rootReducer = combineReducers({
    activities: activitiesReducers,
})

export default rootReducer