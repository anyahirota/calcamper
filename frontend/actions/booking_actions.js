import * as bookingAPIUtil from '../util/booking_api_util';

export const RECEIVE_BOOKINGS = "RECEIVE_BOOKINGS"; 
export const REMOVE_BOOKING = "REMOVE_BOOKING"; 
export const RECEIVE_BOOKING_ERRORS ="RECEIVE_BOOKING_ERRORS";

const receiveBookings = (bookings) => ({
    type: RECEIVE_BOOKINGS, 
    bookings
})

const removeBooking = (bookingId) => ({
    type: REMOVE_BOOKING, 
    bookingId
})

const receiveBookingErrors = (errors) => ({
    type: RECEIVE_BOOKING_ERRORS,
    errors
})

export const fetchBookings = () => dispatch => (
    bookingAPIUtil.fetchBookings().then(bookings => (
        dispatch(receiveBookings(bookings))
    ), err => (
        dispatch(receiveBookingErrors(err.responseJSON))
    ))
); 

export const createBooking = (booking) => dispatch => (
    bookingAPIUtil.createBooking(booking).then(bookings => (
        dispatch(receiveBookings(bookings))
    ), err => (
        dispatch(receiveBookingErrors(err.responseJSON))
    )) 
); 

export const updateBooking = (booking) => dispatch => (
    bookingAPIUtil.updateBooking(booking).then(bookings => (
        dispatch(receiveBookings(bookings))
    ), err => (
        dispatch(receiveBookingErrors(err.responseJSON))
    ))
); 

export const deleteBooking = (bookingId) => dispatch => (bookingAPIUtil.deleteBooking(bookingId)
    .then(() => dispatch(removeBooking(bookingId)))
); 


