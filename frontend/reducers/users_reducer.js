import { RECEIVE_CURRENT_USER } from "../actions/session_actions"; 
import { RECEIVE_SPOT } from '../actions/spot_actions'; 

const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, oldState, { [action.currentUser.id]: action.currentUser });
        case RECEIVE_SPOT:
            return Object.assign({}, oldState, { [action.payload.host.id]: action.payload.host });
        default:
            return oldState;
    }
}

export default usersReducer; 