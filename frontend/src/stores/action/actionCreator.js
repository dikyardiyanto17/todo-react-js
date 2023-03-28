import { FetchingAccountDetail, FetchingAccounts, FetchingCategories } from "./actionType"
// const baseUrl = 'http://localhost:3001'
const baseUrl = 'https://challenge1.dikyardiyanto.site'

export const fetchAccounts = (payload) => {
    return { type: FetchingAccounts, payload }
}

export const fetchCategories = (payload) => {
    return { type: FetchingCategories, payload }
}

export const fetchAccountDetail = (payload) => {
    return { type: FetchingAccountDetail, payload }
}
export const getAccounts = (query = '') => {
    return (dispatch) => {
        fetch(baseUrl + '/products' + query, {
            method: "get",
            headers: {
                'Content-Type': 'application/json',
                access_token: localStorage.access_token
            },
        })
            .then(resp => resp.json())
            .then(data => dispatch(fetchAccounts(data)))
            .catch(error => console.log(error))
    }
}

export const getAccountDetail = (accountId) => {
    return (dispatch) => {
        fetch(`${baseUrl}/products/${accountId}`, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                access_token: localStorage.access_token
            },
        })
            .then(resp => resp.json())
            .then(data => dispatch(fetchAccountDetail(data)))
            .catch(error => console.log(error))
    }
}


export const login = (formLogin) => {
    return (dispatch) => {
        return fetch(baseUrl + '/login', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formLogin)
        })
            .then(resp => {
                if (resp.ok) {
                    return resp.json()
                } else {
                    throw { message: "error" };
                }
            })
            .then(data => {
                localStorage.setItem("access_token", data.access_token)
            })
            .catch(error => console.log(error))
    }
}

export const getCategories = () => {
    return (dispatch) => {
        fetch(baseUrl + '/categories', {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                access_token: localStorage.access_token
            },
        })
            .then(resp => resp.json())
            .then(data => dispatch(fetchCategories(data)))
            .catch(error => console.log(error))
    }
}

export const register = (formRegister) => {
    return (dispatch) => {
        return fetch(baseUrl + '/register', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formRegister)
        })
            .catch(error => console.log(error))
    }
}