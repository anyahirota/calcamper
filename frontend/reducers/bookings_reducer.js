import { RECEIVE_BOOKINGS, REMOVE_BOOKING } from '../actions/booking_actions'; 

const bookingsReducer = (oldState = {}, action) => {
    Object.freeze(oldState); 
    switch (action.type) {
        case RECEIVE_BOOKINGS: 
            return action.bookings; 
        
        case REMOVE_BOOKING:
            let newState = {...oldState}; 
            delete newState[action.bookingId]; 
            return newState; 

        default:
            return oldState; 
    }
}

export default bookingsReducer; 