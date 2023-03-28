import { FetchingActivites } from "../action/actionType"

const initialState = {
    activities: []
}

function activitiesReducers(state = initialState, action) {
    switch (action.type) {
        case FetchingActivites:
            return { ...state, activities: action.payload}
        default:
            return state
    }
}


export default activitiesReducers