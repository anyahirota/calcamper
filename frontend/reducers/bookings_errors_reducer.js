import { RECEIVE_BOOKING_ERRORS } from '../actions/booking_actions'

const bookingsErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_BOOKING_ERRORS:
            return action.errors;
        default:
            return oldState;
    }
}

export default bookingsErrorsReducer; 