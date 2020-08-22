import * as spotAPIUtil from '../util/spot_api_util'; 

export const RECEIVE_SPOTS = "RECEIVE_SPOTS"; 
export const RECEIVE_SPOT = "RECEIVE_SPOT";
export const FILTER_SPOT_BY_TYPE = "FILTER_SPOT_BY_TYPE";
export const FILTER_SPOT_BY_PARK = "FILTER_SPOT_BY_PARK"; 

const receiveSpots = (spots) => ({
    type: RECEIVE_SPOTS, 
    spots
})

const receiveSpot = (payload) => ({
    type: RECEIVE_SPOT, 
    payload
})

export const filterSpotByType = (spot_type) => ({
    type: FILTER_SPOT_BY_TYPE, 
    spot_type
})

export const filterSpotByPark = (park) => ({
    type: FILTER_SPOT_BY_PARK, 
    park
})

export const requestSpots = () => dispatch => (spotAPIUtil.fetchSpots()
    .then(spots => dispatch(receiveSpots(spots)))
)

export const requestSpot = (spotId) => dispatch => (spotAPIUtil.fetchSpot(spotId)
    .then(spot => dispatch(receiveSpot(spot)))
)
