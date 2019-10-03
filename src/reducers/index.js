import { combineReducers } from 'redux'

let initState = {
    id: 0,
    username: '', 
    password: ''
}

let authReducer = (state = initState, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return { ...state, id: action.payload.id, username: action.payload.username, password: action.payload.password }

        case "LOGOUT_SUCCESS":
            return { ...state, ...initState}

        default:
            return state
    }
}


// Reducers yang akan diteruskan ke state Redux
let reducers = combineReducers(
    {
        auth: authReducer
    }
)

export default reducers 