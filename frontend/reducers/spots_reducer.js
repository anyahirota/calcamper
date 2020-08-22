import { RECEIVE_SPOTS, RECEIVE_SPOT, FILTER_SPOT_BY_TYPE, FILTER_SPOT_BY_PARK } from "../actions/spot_actions";

const spotsReducer = (oldState = {}, action) => {
    Object.freeze(oldState); 
    let newState = { ...oldState }; 
    switch (action.type) {
        case RECEIVE_SPOTS:
            return action.spots;

        case RECEIVE_SPOT:
            return Object.assign({}, oldState, { [action.payload.spot.id]: action.payload.spot });
        
        case FILTER_SPOT_BY_TYPE:
            let newStateArray = Object.values(newState); 
            for (let i = 0; i < newStateArray.length; i++) {
                let spot = newStateArray[i];
                if (spot.spot_type !== action.spot_type) {
                    delete newState[spot.id]; 
                }
            }
            return newState; 
        
        case FILTER_SPOT_BY_PARK:
            let spotArray = Object.values(newState);
            for (let i = 0; i < spotArray.length; i++) {
                let spot = spotArray[i]; 
                if (spot.park !== action.park) {
                    delete newState[spot.id];
                }
            }
            return newState; 

        default:
            return oldState;
    }
}

export default spotsReducer;
