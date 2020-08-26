import { connect } from 'react-redux';
import { updateBooking, receiveBookingErrors } from '../../actions/booking_actions';
import EditBookingPreForm from './edit_booking_pre_form'; 
import {selectBookingSpot} from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
    
    const booking = state.entities.bookings[ownProps.match.params.id]; 
    return {
        booking,  
        spot: selectBookingSpot(state, booking),  
        errors: state.errors.bookings, 
        
    }
}

const mapDispatchToProps = (dispatch) => ({
    action: (booking) => dispatch(updateBooking(booking)),
    receiveErrors: (errors) => dispatch(receiveBookingErrors(errors)), 
    requestSpots: () => dispatch(requestSpots()),
    fetchBookings: () => dispatch(fetchBookings()), 
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditBookingPreForm)
