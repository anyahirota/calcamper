import React from 'react';
import { faCampground, faWheelchair, faHome, faFire, faDog, faFaucet, faShower, faToiletPaper, faAppleAlt, faTrash, faTrashAlt, faUtensils, faTshirt, faWifi, faBolt, faPlug, faTint, faSprayCan, faTv, faArrowsAltH, faGripLines } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faParking } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SpotAmenities extends React.Component {
    
    booleanEntries(attributeName) {
        if (this.props.spot[attributeName] !== true) {
            return "amenity-false"
        }
    }
    
    
    renderCorrectSpotType() {
        const byot = this.props.spot.bring_your_own_tents ? "Bring your own tents" : "Tents provided";
        const pat = this.props.spot.park_at_listing ? "Park at listing" : "No parking at listing"; 
        const ada = this.props.spot.ada_access ? "ADA access" : "No ADA access";
        
        let heading;
        if (this.props.spot.spot_type === "RV") {
            heading = "RV camping area"; 
        } else if (this.props.spot.spot_type === "camping") {
            heading = "Campsite area";
        } else {
            heading = "Lodging provided";
        }

        let firstItem; 
        if (this.props.spot.spot_type === "glamping") {
            const name = this.props.spot.lodging_type;
            const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
            firstItem = (
                <li>
                    <div className="box-icons"><FontAwesomeIcon icon={faHome} /></div>
                    <p>{nameCapitalized}</p>
                </li>
            )
        } else {
            firstItem = (
                <li className={this.booleanEntries("bring_your_own_tents")}>
                    <div className="box-icons"><FontAwesomeIcon icon={faCampground} /></div>
                    <p>{byot}</p>
                </li>
            )
        }

        return (
            <ul className="amenity-box">
                <h1>{heading}</h1>
                {firstItem}
                <li>
                    <div className="box-icons"><FontAwesomeIcon icon={faMapMarkerAlt} /></div>
                    <p>{this.props.spot.sites} sites</p>
                </li>
                <li>
                    <div className="box-icons"><FontAwesomeIcon icon={faUser} /></div>
                    <p>Up to {this.props.spot.guests_per_site} guests per sites</p>
                </li>
                <li className={this.booleanEntries("park_at_listing")}>
                    <div className="box-icons"><FontAwesomeIcon icon={faParking} /></div>
                    <p>{pat}</p>
                </li>
                <li className={this.booleanEntries("ada_access")}>
                    <div className="box-icons"><FontAwesomeIcon icon={faWheelchair} /></div>
                    <p>{ada}</p>
                </li>
            </ul>
        )
        
    }
    
    renderVehicleDetails() {
        if (this.props.spot.spot_type === "RV") {
            const surfT = this.props.spot.surface_type.toLowerCase();
            const surfL = this.props.spot.surface_levelness.toLowerCase(); 
            const gen = this.props.spot.generator_allowed ? "Generators allowed" : "No generators allowed";
            const ele = this.props.spot.electrical_hookup ? "Electrical hookup available" : "No electrical hookup";
            const wat = this.props.spot.water_hookup ? "Water hookup available" : "No water hookup";
            const sew = this.props.spot.sewage_hookup ? "Sewage hookup available" : "No sewage hookup";
            const tv = this.props.spot.tv_hookup ? "TV hookup available" : "No TV hookup";
            const pull = this.props.spot.pull_in_site ? "Pull-in site" : "Pull-through site";
            const slide = this.props.spot.slideouts ? "Accommodates slideouts" : "No slideout accommodation";

            return (
                <div className="vehicle-details">
                    <h1>Camping vehicle details</h1>
                    <div className="vehicle-details-lists">
                        <ul className="amenity-box-big">
                            <li className={this.booleanEntries("generator_allowed")}>
                                <div className="box-icons"><FontAwesomeIcon icon={faBolt} /></div>
                                <p>{gen}</p>
                            </li>
                            <li className={this.booleanEntries("electrical_hookup")}>
                                <div className="box-icons"><FontAwesomeIcon icon={faPlug} /></div>
                                <p>{ele}</p>
                            </li>
                            <li className={this.booleanEntries("water_hookup")}>
                                <div className="box-icons"><FontAwesomeIcon icon={faTint} /></div>
                                <p>{wat}</p>
                            </li>
                            <li className={this.booleanEntries("sewage_hookup")}>
                                <div className="box-icons"><FontAwesomeIcon icon={faSprayCan} /></div>
                                <p>{sew}</p>
                            </li>
                            <li className={this.booleanEntries("tv_hookup")}>
                                <div className="box-icons"><FontAwesomeIcon icon={faTv} /></div>
                                <p>{tv}</p>
                            </li>
                        </ul>
                        <ul className="amenity-box-big">
                            <li>
                                <div className="box-icons"><FontAwesomeIcon icon={faArrowsAltH} /></div>
                                <p>{pull}</p>
                            </li>
                            <li>
                                <div className="box-icons"><FontAwesomeIcon icon={faArrowsAltH} /></div>
                                <p>Max length {this.props.spot.max_length}ft</p>
                            </li>
                            <li>
                                <div className="box-icons"><FontAwesomeIcon icon={faArrowsAltH} /></div>
                                <p>{slide}</p>
                            </li>
                            <li>
                                <div className="box-icons"><FontAwesomeIcon icon={faGripLines} /></div>
                                <p>Surface type: {surfT}</p>
                            </li>
                            <li>
                                <div className="box-icons"><FontAwesomeIcon icon={faGripLines} /></div>
                                <p>Surface type: {surfL}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            )
        }

    }
    
    render () {
        const fire = this.props.spot.campfires ? "Campfires allowed" : "No campfires allowed";
        const pets = this.props.spot.pets_allowed ? "Pets allowed" : "No pets allowed";
        const toilet = this.props.spot.toilet_available ? "Toilet available" : "No toilet";
        const pwa = this.props.spot.potable_water ? "Potable water available" : "No potable water";
        const showers = this.props.spot.showers ? "Showers available" : "No showers";
        const pta = this.props.spot.picnic_table_available ? "Picnic table available" : "No picnic table";
        const bins = this.props.spot.bins_available ? "Bins available" : "Pack it out";
        const kitchen = this.props.spot.kitchen ? "Kitchen available" : "No kitchen";
        const laundry = this.props.spot.laundry ? "Laundry available" : "Laundry absent";
        const wifi = this.props.spot.wifi ? "Wifi available" : "No wifi";


        return (
            <div className="spot-amenities">
                <div className="spot-amenitities-card">
                    {this.renderCorrectSpotType()}
                    <ul className="amenity-box">
                        <h1>Essentials</h1>
                        <li className={this.booleanEntries("campfires")}>
                            <div className="box-icons"><FontAwesomeIcon icon={faFire} /></div>
                            {fire}
                        </li>
                        <li className={this.booleanEntries("pets_allowed")}>
                            <div className="box-icons"><FontAwesomeIcon icon={faDog} /></div>
                            {pets}
                        </li>
                        <li className={this.booleanEntries("toilet_available")}>
                            <div className="box-icons"><FontAwesomeIcon icon={faToiletPaper} /></div>
                            {toilet}
                        </li>
                    </ul>
                    <ul className="amenity-box">
                        <h1>Amenities</h1>
                        <li className={this.booleanEntries("potable_water")}>
                            <div className="box-icons"><FontAwesomeIcon icon={faFaucet} /></div>
                            {pwa}
                        </li>
                        <li className={this.booleanEntries("showers")}>
                            <div className="box-icons"><FontAwesomeIcon icon={faShower} /></div>
                            {showers}
                        </li>
                        <li className={this.booleanEntries("picnic_table_available")}>
                            <div className="box-icons"><FontAwesomeIcon icon={faAppleAlt} /></div>
                            {pta}
                        </li>
                        <li className={this.booleanEntries("bins_available")}>
                            <div className="box-icons"><FontAwesomeIcon icon={faTrashAlt} /></div>
                            {bins}
                        </li>
                        <li className={this.booleanEntries("kitchen")}>
                            <div className="box-icons"><FontAwesomeIcon icon={faUtensils} /></div>
                            {kitchen}
                        </li>
                        <li className={this.booleanEntries("laundry")}>
                            <div className="box-icons"><FontAwesomeIcon icon={faTshirt} /></div>
                            {laundry}
                        </li>
                        <li className={this.booleanEntries("wifi")}>
                            <div className="box-icons"><FontAwesomeIcon icon={faWifi} /></div>
                            {wifi}
                        </li>
                    </ul>

                </div>
                {this.renderVehicleDetails()}
            </div>
        )
    }
}

export default SpotAmenities; 