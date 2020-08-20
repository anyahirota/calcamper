import * as spotAPIUtil from '../util/spot_api_util'; 

const RECEIVE_SPOTS = "RECEIVE_SPOTS"; 
const RECEIVE_SPOT = "RECEIVE_SPOT";

const receiveSpots = (spots) => ({
    type: RECEIVE_SPOTS, 
    spots
})

const receiveSpot = (spot) => ({
    type: RECEIVE_SPOT, 
    spot
})

export const requestSpots = () => dispatch => (spotAPIUtil.fetchSpots()
    .then(spots => dispatch(receiveSpots(spots)))
)

export const requestSpot = (spotId) => dispatch => (spotAPIUtil.fetchSpot(spotId)
    .then(spot => dispatch(receiveSpot(spot)))
)
