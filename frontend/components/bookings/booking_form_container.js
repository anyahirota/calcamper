import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createBooking, receiveBookingErrors } from '../../actions/booking_actions'; 
import BookingForm from './booking_form'; 


const mapStateToProps = (state, ownProps) => {
    return {
    booking: {
        spot_id: ownProps.spot.id, 
        booker_id: state.session.id,
        total_nights: "", 
        total_price: "", 
        guests: ownProps.spot.guests_per_site, 
        check_in_date: null, 
        check_out_date: null, 
    },
    errors: state.errors.bookings, 
    spot: ownProps.spot, 
    formType: 'Create Booking'
}}

const mapDispatchToProps = (dispatch) => ({
    action: (booking) => dispatch(createBooking(booking)), 
    receiveErrors: (errors) => dispatch(receiveBookingErrors(errors))
})

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(BookingForm)