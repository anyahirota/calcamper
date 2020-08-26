import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCampground, faCaravan } from "@fortawesome/free-solid-svg-icons";


const BookingIndexItem = ({ booking, spot, deleteBooking }) => {

    const nights = booking.total_nights > 1 ? "nights" : "night" ; 
   
    let icon;
    if (spot.spot_type === "camping") {
        icon = faCampground;
    } else if (spot.spot_type === "glamping") {
        icon = faHome;
    } else {
        icon = faCaravan
    }

    return(
        <li className="booking-index-item">
            <div className="booking-index-item-photo">
                <Link to={`/spot/${spot.id}`}><img className="booking-index-item-photo" src={spot.spotProfilePic} alt="" /></Link>
            </div>
            
            <div className="booking-index-item-info">
                <div className="booking-index-item-info-top-row">
                    <h1 className="booking-index-spot-name"><Link to={`/spot/${spot.id}`}>{spot.name}</Link></h1>
                    <FontAwesomeIcon icon={icon} />
                </div>
                <h2 className="booking-index-item-park">{spot.park}</h2>
                <div className="booking-index-item-trip-length">
                    <p>{booking.total_nights} {nights} stay.</p>
                </div>
                <div className="booking-index-item-check-in">
                    <div className="booking-index-item-dates">
                        <p>Check in:</p>
                        <p>{booking.check_in_date}</p>
                    </div>
                    <div className="booking-index-item-dates">
                        <p>Check out:</p>
                        <p>{booking.check_out_date}</p>
                    </div>
                </div>
                <div className="booking-index-item-check-in">
                    <div className="booking-index-item-dates">
                        <p>Number of guests:</p>
                        <p>{booking.guests}</p>
                    </div>
                    <div className="booking-index-item-dates">
                        <p>Total:</p>
                        <p>${booking.total_price}.00</p>
                    </div>
                </div>
                <div className="booking-index-item-buttons">
                    <div className="booking-index-item-button-pink" >Update Booking</div>
                    <div className="booking-index-item-button" onClick={() => deleteBooking(booking.id)}>Cancel Booking</div>
                    
                </div>
            </div>
        </li>
    )
}

export default BookingIndexItem; 