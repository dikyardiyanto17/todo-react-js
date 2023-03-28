import { FetchingAccountDetail } from "../action/actionType"

const initialState = {
    account: {
        name: "",
        slug: "",
        description: "",
        price: "",
        mainImg: "",
        categoryId: "",
        authorId: "",
        createdAt: "",
        updatedAt: ""
    }
}

function accountDetailReducer(state = initialState, action) {
    switch (action.type) {
        case FetchingAccountDetail:
            return { ...state, account: action.payload}
        default:
            return state
    }
}


export default accountDetailReducer