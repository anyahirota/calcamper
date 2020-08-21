import React from 'react';
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SpotDescriptionAndHost = ({description, host}) => {
    const lastInitial = host.last_name[0]; 

    return (
        <div className="spot-description-host">
            <div className="host-area">
                <p><FontAwesomeIcon icon={faUserCircle} /></p>
                <div className="hosted-by">
                    <p>Hosted by</p>
                    <p>{host.first_name} {lastInitial}.</p>
                </div>
            </div>
            <div className="description-area">
                <p><FontAwesomeIcon icon={faCheck} /> {host.first_name} has self-certified that CalCamper’s COVID-19 Safety Standards have been implemented at this listing.</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default SpotDescriptionAndHost; 