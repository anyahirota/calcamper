import * as spotAPIUtil from '../util/spot_api_util'; 

export const RECEIVE_SPOTS = "RECEIVE_SPOTS"; 
export const RECEIVE_SPOT = "RECEIVE_SPOT";

const receiveSpots = (spots) => ({
    type: RECEIVE_SPOTS, 
    spots
})

const receiveSpot = (payload) => ({
    type: RECEIVE_SPOT, 
    payload
})

export const requestSpots = () => dispatch => (spotAPIUtil.fetchSpots()
    .then(spots => dispatch(receiveSpots(spots)))
)

export const requestSpot = (spotId) => dispatch => (spotAPIUtil.fetchSpot(spotId)
    .then(spot => dispatch(receiveSpot(spot)))
)
