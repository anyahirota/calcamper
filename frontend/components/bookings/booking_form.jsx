import React from 'react'; 
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './react_dates_overrides.css';
import { DateRangePicker } from 'react-dates';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { Route, Redirect, withRouter } from 'react-router-dom';


class BookingForm extends React.Component {
    constructor(props) {
        super(props); 
        this.state = this.props.booking; 
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.receiveErrors([]);
    }

    renderErrors() {
        return (
            <ul className="errors">
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    countGuests(num) {
        let guests = this.state.guests;
        let guestCount = guests + num;
        return (e) => this.setState({ guests: guestCount})
    }

    guests() {
        if (this.state.guests === this.props.spot.guests_per_site) {
            return (
                <div className="guest-inputs">
                    <div onClick={this.countGuests(-1)}><FontAwesomeIcon icon={faMinus} /></div>
                    <p className="guest-num">{this.state.guests}</p>
                    <p className="guest-max-min">max</p>
                </div>
            )
        } else if (this.state.guests === 0) {
            return (
                <div className="guest-inputs">
                    <p className="guest-max-min">min</p>
                    <p className="guest-num">{this.state.guests}</p>
                    <div onClick={this.countGuests(1)}><FontAwesomeIcon icon={faPlus} /></div>
                </div>
            )
        } else {
            return (
                <div className="guest-inputs">
                    <div onClick={this.countGuests(-1)}><FontAwesomeIcon icon={faMinus} /></div>
                    <p className="guest-num">{this.state.guests}</p>
                    <div onClick={this.countGuests(1)}><FontAwesomeIcon icon={faPlus} /></div>
                </div>
            )
        }
    }
    numNights() {
        if (this.state.check_out_date !== null) {
            const date1 = this.state.check_in_date["_d"];
            const date2 = this.state.check_out_date["_d"]; 
            const timeDiff = Math.abs(date2.getTime() - date1.getTime());
            const numberOfNights = Math.ceil(timeDiff / (1000 * 3600 * 24));
            this.setState({ total_nights: numberOfNights }, () => this.setPrice());
        }
    }

    setPrice() {
        let numberOfNights = this.state.total_nights;
        let totalPrice = numberOfNights * this.props.spot.price_per_night;
        this.setState({ total_price: totalPrice }); 
    }

    renderPrice() {
        if (this.state.total_price !== "") {
            return (
                <div className="booking_total_price">
                    <p>Total</p>
                    <p>${this.state.total_price}.00</p>
                </div>
            )
        }
    }

    renderMinNights() {
        if (this.state.total_price === "" && this.props.spot.minimum_nights > 1) {
            return (
                <p className="min-night-stay">{this.props.spot.minimum_nights} nights minimum stay.</p>
            )
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const booking = {
            spot_id: this.state.spot_id,
            booker_id: this.state.booker_id,
            total_nights: this.state.total_nights,
            total_price: this.state.total_price,
            guests: this.state.guests,
            check_in_date: this.state.check_in_date["_d"],
            check_out_date: this.state.check_out_date["_d"],
        }

        this.props.action(booking)
            .then(() => this.props.history.push('/bookings'))
    }


    render() {

        const updateDate = ({ startDate, endDate }) => {
            this.setState({ check_in_date: startDate, check_out_date: endDate }, 
                () => this.numNights()); 
        }

        return (
            
            <div className="booking-form-container">
                <div className="booking-form-sticky-container">
                    <form onSubmit={this.handleSubmit} className="booking-form-box">
                        <div className="booking-form-box-price">
                            <h1>${this.props.spot.price_per_night}</h1>
                            <h2>per night</h2>
                        </div>
                        <div className="booking-form-box-dates-guests">
                            <div className="calendar">
                                <div className="calendar-titles">
                                    <p>Check in</p>
                                    <p>Check out</p>
                                </div>
                                <DateRangePicker
                                    startDate={this.state.check_in_date} // momentPropTypes.momentObj or null,
                                    startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                                    endDate={this.state.check_out_date} // momentPropTypes.momentObj or null,
                                    endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                                    onDatesChange={updateDate}
                                    //     , () => {this.numNights();
                                    // })} // PropTypes.func.isRequired,
                                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                                    onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                                    minimumNights={this.props.spot.minimum_nights}
                                    startDatePlaceholderText="Select Date"
                                    endDatePlaceholderText="Select Date"
                                    numberOfMonths={1}
                                    noBorder
                                    small
                                />
                            </div>
                            <div className="guests">
                                <h1>Guests</h1>
                                {this.guests()}
                            </div>
                        </div>
                        {this.renderPrice()}
                        {this.renderMinNights()}
                        {this.renderErrors()}
                        <div className="booking-button-container">
                            <input className="booking-button" type="submit" value="Create booking" />
                        </div>
                    </form>
                    <p className="booking-psa">Don't worry, you won't be charged.</p>
            
                </div>
                
            </div>
        )
    }

}

export default BookingForm; 