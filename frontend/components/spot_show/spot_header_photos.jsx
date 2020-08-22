import React from 'react'

const SpotHeaderPhotos = ({ photos }) => {
    return (
        <ul className="spot-header-photos">
            {photos.map((photo, idx) =>(
                <li key={ idx }> <img src={photo} alt="" /></li>
            ))}

        </ul>
    )
}

export default SpotHeaderPhotos; 