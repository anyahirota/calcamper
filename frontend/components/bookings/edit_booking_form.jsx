import React from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './react_dates_overrides.css';
import { DateRangePicker } from 'react-dates';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { faHome, faCampground, faCaravan } from "@fortawesome/free-solid-svg-icons";
import * as moment from 'moment';

class EditBookingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.booking.id, 
            spot_id: this.props.booking.spot_id,
            booker_id: this.props.booking.booker_id,
            total_nights: this.props.booking.total_nights,
            total_price: this.props.booking.total_price,
            guests: this.props.booking.guests,
            check_in_date: moment(this.props.booking.check_in_date),
            check_out_date: moment(this.props.booking.check_out_date),}
        this.handleSubmit = this.handleSubmit.bind(this);
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
        return (e) => this.setState({ guests: guestCount })
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
        } else if (this.state.guests === 1) {
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
            id: this.state.id, 
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
        
        if (this.props.spot !== undefined ) {

            const nights = this.state.total_nights > 1 ? "nights" : "night"; 
    
            let icon;
            if (this.props.spot.spot_type === "camping") {
                icon = faCampground;
            } else if (this.props.spot.spot_type === "glamping") {
                icon = faHome;
            } else {
                icon = faCaravan; 
            }
    
            const updateDate = ({ startDate, endDate }) => {
                this.setState({ check_in_date: startDate, check_out_date: endDate },
                    () => this.numNights());
                }

            return (
                <div className="booking-edit-form-container">
                    <div className="booking-form-static-container">
                        <form className="booking-form-box">
                            <div className="booking-edit-form-spot-pic">
                                <img className="booking-edit-form-photo" src={this.props.spot.spotProfilePic} alt="" />   
                                <FontAwesomeIcon className="booking-edit-form-icon" icon={icon} /> 
                            </div>
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
                                        onDatesChange={updateDate} // PropTypes.func.isRequired,
                                        focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                                        onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                                        minimumNights={this.props.spot.minimum_nights}
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
                            <div className="booking-edit-form-nights-stayed">
                                <p>{this.state.total_nights} {nights} stay.</p>
                            </div>
                            {this.renderPrice()}
                            {this.renderMinNights()}
                            {this.renderErrors()}
                            <div className="booking-button-container">
                                <input onClick={this.handleSubmit} className="booking-button" type="submit" value="Update booking" />
                            </div>
                        </form>

                    </div>
                        <p className="booking-psa">Don't worry, you won't be charged.</p>

                </div>
            )
        } else {
            return (
                <div></div>
            )
        }

    }

}

export default EditBookingForm; 