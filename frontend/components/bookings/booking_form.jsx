import React from 'react'; 

class BookingForm extends React.Component {
    constructor(props) {
        super(props); 
        this.state = this.props.booking; 
    }

    render() {
        return (
            <div className="booking-form-container">
                <div className="booking-form-sticky-container">
                    <p>Don't worry, you won't be charged.</p>
            
                </div>
                
            </div>
        )
    }

}

export default BookingForm; 