import React from 'react'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountain, faTree, faSun, faUmbrellaBeach } from "@fortawesome/free-solid-svg-icons";

const SpotTerrain = ({ spot }) => {
    const mountainousFa = faMountain;
    const forestFa = faTree;
    const desertFa = faSun;
    const coastalFa = faUmbrellaBeach;

    const mountainous = "Mountainous";
    const forest = "Forest";
    const desert = "Desert";
    const coastal = "Coastal";

    const terrain = (terrain_type, fa, title) => {
        if (spot[terrain_type] === true) {
            return (
                <li className="activity">
                    <div className="activity-icon-box"><FontAwesomeIcon icon={fa} /></div>
                    <p>{title}</p>
                </li>
            )
        }
    }

    return (
        <div className="spot-activities">
            <h1>Terrain</h1>
            <p>Natural features you'll find at {spot.name} in California.</p>
            <ul className="spot-activities-boxes">
                {terrain("mountainous", mountainousFa, mountainous)}
                {terrain("forest", forestFa, forest)}
                {terrain("desert", desertFa, desert)}
                {terrain("coastal", coastalFa, coastal)}
            </ul>
        </div>
    )
}

export default SpotTerrain; 