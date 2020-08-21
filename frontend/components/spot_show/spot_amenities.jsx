import React from 'react';
import { faCampground } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SpotAmenities extends React.Component {
    
    booleanEntries(attributeName) {
        if (this.props.spot[attributeName] === true) {
            return "amenity-true"
        } else {
            return "amenity-false"
        }
    }
    
    
    renderCorrectSpotType() {
        const byot = this.props.spot.bring_your_own_tents ? "Bring your own tents" : "Tents provided";
        const pat = this.props.spot.park_at_listing ? "Park at listing" : "No"; 


        if (this.props.spot.spot_type === "RV") {
            return (
                <ul className="amenity-box">
                    <h1>RV camping area</h1>
                    <li className={this.booleanEntries("bring_your_own_tents")}>
                        <div><FontAwesomeIcon icon={faCampground} /></div>
                        <p>{byot}</p>
                    </li>
                    <li>
                        <div><FontAwesomeIcon icon={faMapMarkerAlt} /></div>
                        <p>{this.props.spot.sites} sites</p>
                    </li>
                    <li>
                        <div><FontAwesomeIcon icon={faUser} /></div>
                        <p>Up to {this.props.spot.guests_per_site} guests per sites</p>
                    </li>
                    <li className={this.booleanEntries("park_at_listing")}>
                        <div><FontAwesomeIcon icon={faCampground} /></div>
                        <p>{pat}</p>
                    </li>
                </ul>
            )
        } else if (this.props.spot.spot_type === "camping") {
            return (
                <ul className="amenity-box">
                    <h1>Campsite area</h1>
                    <li className={this.booleanEntries("bring_your_own_tents")}>
                        <div><FontAwesomeIcon icon={faCampground} /></div>
                        <p>{byot}</p>
                    </li>
                    <li>
                        <div><FontAwesomeIcon icon={faMapMarkerAlt} /></div>
                        <p>{this.props.spot.sites} sites</p>
                    </li>
                </ul> 
            )
        } else {
            return (
                <ul className="amenity-box">
                    <h1>Lodging provided</h1>
                </ul>
            )
        }

    }
    
    renderVehicleDetails() {
        if (this.props.spot.spot_type === "RV") {
            return (
                <div className="vehicle-details">
                    <h1>Camping vehicle details</h1>
                </div>
            )
        }

    }
    
    render () {
        return (
            <div className="spot-amenities">
                <div className="spot-amenitities-card">
                    {this.renderCorrectSpotType()}
                </div>
                {this.renderVehicleDetails()}
            </div>
        )
    }
}

export default SpotAmenities; 