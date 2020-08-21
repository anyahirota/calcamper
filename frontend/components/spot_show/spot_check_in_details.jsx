import React from 'react'

const SpotCheckInDetails = ({spot}) => {
    return (
        <div className="spot-check-in">
            <div className="spot-check-in-inner">
                <p>Details</p>
                <ul className="spot-check-in-col">
                    <li><p>Check in: </p>{spot.check_in_details}</li>
                    <li><p>Check out: </p>{spot.check_out_details}</li>
                    <li><p>Cancellation policy: </p>{spot.cancellation_policy}</li>
                </ul>
                <ul className="spot-check-in-col">
                    <li><p>On arrival: </p>{spot.on_arrival}</li>
                    <li><p>Minimum nights: </p>{spot.minimum_nights}</li>
                    <li><p>Accepts bookings: </p>{spot.booking_acceptance}</li>
                </ul>
            </div>
        </div>
    )
}

export default SpotCheckInDetails; 