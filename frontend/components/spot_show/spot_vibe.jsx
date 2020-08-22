import React from 'react'

const SpotVibe = ({ spot }) => {
    
    return (
        <div className="spot-vibe">
            <h1>The vibe at {spot.name} and {spot.park}</h1>
            <ul className="vibe-box-list">
                <li className="vibe-box">
                    <p>{spot.elevation}</p>
                    <p>Elevation</p>
                </li>
                <li className="vibe-box">
                    <p>{spot.weather}</p>
                    <p>But up for debate</p>
                </li>
                <li className="vibe-box">
                    <p>{spot.distance}</p>
                    <p>Definitely not</p>
                </li>
                    {spot.vibePhotoUrls.map((photo, idx) => (
                        <li className="vibe-box-pic" key={idx}><img src={photo} alt="" /></li>
                    ))}
            </ul>

        </div>
    )
}

export default SpotVibe; 