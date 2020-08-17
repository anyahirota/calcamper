import * as sessionAPIUtil from '../util/session_api_util'; 

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"; 
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"; 
export const RECEIVE_SESSION_ERRORS = "RECEIVE_ERRORS"; 

const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER, 
    currentUser
})

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
})

const receiveErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const signup = (user) => dispatch => (
    sessionAPIUtil.signup(user).then(currentUser => (
        dispatch(receiveCurrentUser(currentUser))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
); 


export const login = (user) => dispatch => (
    sessionAPIUtil.login(user).then(currentUser => (
        dispatch(receiveCurrentUser(currentUser))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
); 

export const logout = () => dispatch => (
    sessionAPIUtil.logout().then(currentUser => (
        dispatch(logoutCurrentUser())
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);

