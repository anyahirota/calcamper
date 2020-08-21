import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBicycle, faHiking, faAnchor, faFish, faWater, faSwimmer, faSkiing, faBinoculars, faTruckMonster, faHatCowboy } from "@fortawesome/free-solid-svg-icons";
import { faHandRock } from "@fortawesome/free-regular-svg-icons";

const SpotActivities = ({ spot }) => {
    const bikingFa = faBicycle;
    const hikingFa = faHiking;
    const boatingFa = faAnchor; 
    const fishingFa = faFish; 
    const paddlingFa = faWater; 
    const swimmingFa = faSwimmer; 
    const snowSportsFa = faSkiing; 
    const wildlifeWatchingFa = faBinoculars; 
    const climbingFa = faHandRock; 
    const offRoadingFa = faTruckMonster;
    const horsebackRidingFa = faHatCowboy;

    const biking = "Biking";
    const hiking = "Hiking";
    const boating = "Boating";
    const fishing = "Fishing";
    const paddling = "Paddling";
    const swimming = "Swimming";
    const snowSports = "Snow sports";
    const wildlifeWatching = "Wildlife watching";
    const climbing = "Rock climbing";
    const offRoading = "Off-roading";
    const horsebackRiding = "Horseback riding";

    const activity = (activity_type, fa, title) => {
        if (spot[activity_type] === true) {
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
            <h1>Activities</h1>
            <p>Offered on the Host's property or nearby.</p>
            <ul className="spot-activities-boxes">
                {activity("biking", bikingFa, biking)}
                {activity("hiking", hikingFa, hiking)}
                {activity("boating", boatingFa, boating)}
                {activity("fishing", fishingFa, fishing)}
                {activity("paddling", paddlingFa, paddling)}
                {activity("swimming", swimmingFa, swimming)}
                {activity("snow_sports", snowSportsFa, snowSports)}
                {activity("wildlife_watching", wildlifeWatchingFa, wildlifeWatching)}
                {activity("climbing", climbingFa, climbing)}
                {activity("off_roading", offRoadingFa, offRoading)}
                {activity("horseback_riding", horsebackRidingFa, horsebackRiding)}
            </ul>
        </div>
    )
}

export default SpotActivities; 