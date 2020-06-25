import {
    LOGIN_USER, REGISTER_USER, AUTH_USER
} from '../_actions/types'

export default function(state = {}, action) {
    switch (action.type) {
        // ... state의 값을 그대로 가져x옴
        case LOGIN_USER:
            return { ...state, loginSuccess: action.payload}
        case REGISTER_USER:    
            return { ...state, register: action.payload}
        case AUTH_USER:    
            return { ...state, userData: action.payload}

        default:
            return state
    }
}