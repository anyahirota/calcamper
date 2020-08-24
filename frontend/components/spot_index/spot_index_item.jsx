import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCampground, faCaravan } from "@fortawesome/free-solid-svg-icons";

const SpotIndexItem = ({ spot }) => {
    let icon; 
    if (spot.spot_type === "camping") {
        icon = faCampground; 
    } else if (spot.spot_type === "glamping") {
        icon = faHome; 
    } else {
        icon = faCaravan
    }

    return (
        <li className="spot-index-item">
            {<Link to={`/spot/${spot.id}`}>
                <div className="spot-profile-pic">
                    <img src={spot.spotProfilePic} alt="" />
                </div>
                <div className="spot-index-item-info">
                    <h1 className="spot-index-item-name">{spot.name}</h1>
                    <h2 className="spot-index-item-park">{spot.park}</h2>
                    <div className="spot-index-item-info-bottom-row">
                        <FontAwesomeIcon icon={icon} />
                        <p className="spot-index-item-price">${spot.price_per_night}/night</p>
                    </div>
                </div>
            </Link>}
        </li>
    )
}

export default SpotIndexItem; 