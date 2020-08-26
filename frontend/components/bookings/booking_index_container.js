import { connect } from 'react-redux';
import BookingIndex from './booking_index'; 
import { fetchBookings, deleteBooking } from '../../actions/booking_actions';
import { requestSpots } from '../../actions/spot_actions'; 

const mapStateToProps = (state) => ({
    spots: state.entities.spots, 
    bookings: Object.values(state.entities.bookings)
})

const mapDispatchToProps = (dispatch) => ({
    requestSpots: () => dispatch(requestSpots()),
    fetchBookings: () => dispatch(fetchBookings()), 
    deleteBooking: (bookingId) => dispatch(deleteBooking(bookingId))
})

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(BookingIndex); 
