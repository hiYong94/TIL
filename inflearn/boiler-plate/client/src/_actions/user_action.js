import axios from 'axios'
import {
    LOGIN_USER, REGISTER_USER, AUTH_USER
} from './types'

export function loginUser(dateTosubmit) {
    const request = axios.post('/api/users/login', dateTosubmit)
    .then(response => response.data)

    return {
        type: LOGIN_USER,
        payload: request
    }
}

export function registerUser(dateTosubmit) {
    const request = axios.post('/api/users/register', dateTosubmit)
    .then(response => response.data)

    return {
        type: REGISTER_USER,
        payload: request
    }
}

export function auth(dateTosubmit) {
    const request = axios.get('/api/users/auth')
    .then(response => response.data)

    return {
        type: AUTH_USER,
        payload: request
    }
}