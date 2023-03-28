import { FetchingActivites, FetchingActivity, FetchingToDo } from "./actionType"

const baseUrl = 'https://challenge1.dikyardiyanto.site'

export const fetchActivities = (payload) => {
    return {type: FetchingActivites, payload}
}

export const fetchActivity = (payload) => {
    return {type: FetchingActivity, payload}
}

export const fetchToDo = (payload) => {
    return {type: FetchingToDo, payload}
}

export const getActivity = () => {
    return (dispatch) => {
        fetch(baseUrl, {
            method: "get",
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(resp => resp.json())
            .then(data => dispatch(fetchActivities(data)))
            .catch(error => console.log(error))
    }
}