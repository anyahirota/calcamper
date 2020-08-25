import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createBooking } from '../../actions/booking_actions'; 
import BookingForm from './booking_form'; 

const mapStateToProps = (state, ownProps) => ({
    booking: {
        spot_id: ownProps.spot.id, 
        booker_id: state.session.id,
        total_nights: "", 
        total_price: "", 
        guests: "", 
        check_in_date: "", 
        check_out_date: ""
    },
    formType: 'Create Booking'
})

const mapDispatchToProps = (dispatch) => ({
    action: (booking) => dispatch(createBooking(booking)), 
})

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(BookingForm)