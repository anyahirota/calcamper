import React from 'react';
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SpotHeader = (props) => {
    return (
        <div className="spot-header">
            <ul className="spot-header-location">
                <li>United States</li>
                <li className="chevron-right"><FontAwesomeIcon icon={faChevronRight} /></li>
                <li>California</li>
                <li className="chevron-right"><FontAwesomeIcon icon={faChevronRight} /></li>
                <li className="spot-header-park">{props.park}</li>
                <li className="chevron-right"><FontAwesomeIcon icon={faChevronRight} /></li>
            </ul>
            <div className="spot-header-name">
            <h1>{props.name}</h1>
            </div>
            <div className="spot-header-nearby">
                <p>Nearby: </p>
                <p>{props.nearby}</p>
            </div>
        </div>
    )
}

export default SpotHeader; 