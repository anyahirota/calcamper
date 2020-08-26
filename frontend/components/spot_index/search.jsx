import React from 'react';
import SpotIndex from './spot_index'; 
import SpotMap from '../spot_map/spot_map'; 

const Search = ({ spots, park, spot_type, requestSpots, filterSpotByType, filterSpotByPark}) => {
    return (
        <div className="map-and-index">
            <SpotIndex 
                spots={spots} 
                requestSpots={requestSpots}
                filterSpotByType={filterSpotByType}
                filterSpotByPark={filterSpotByPark}
                park={park}
                spot_type={spot_type}
            />
            <SpotMap />
        </div>
    )
}

export default Search; 