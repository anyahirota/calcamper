import React from 'react';
import BookingIndexItem from './booking_index_item';

class BookingIndex extends React.Component {
    componentDidMount() {
        this.props.fetchBookings()
            .then(() => this.props.requestSpots())
    }

    render() {
        if (Object.values(this.props.spots).length >= 23) {
            return (
                <div className="booking-index">
                    <h1>Your Trips</h1>
                    <ul className="booking-index-list">
                        {this.props.bookings.map((booking, idx) => (
                            <BookingIndexItem key={idx} booking={booking} spot={this.props.spots[booking.spot_id]} deleteBooking={this.props.deleteBooking} />
                        ))}
                    </ul>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
}

export default BookingIndex; 