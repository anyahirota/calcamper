import React from 'react';
import EditBookingForm from './edit_booking_form'; 

class EditBookingPreForm extends React.Component {

    componentDidMount() {

        this.props.fetchBookings()
            .then(() => this.props.requestSpots())
                .then(() => this.props.receiveErrors([]))
    }

    render() {
       
        if (!this.props.booking ) return null;
    
        return (
            <EditBookingForm
                action={this.props.action}
                booking={this.props.booking}
                spot={this.props.spot}
                errors={this.props.errors}
                history={this.props.history}
                />
        );
    }
}

export default EditBookingPreForm; 