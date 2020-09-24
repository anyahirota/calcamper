import {RECEIVE_REVIEWS, REMOVE_REVIEW} from "../actions/review_actions"; 
import { RECEIVE_SPOT } from '../actions/spot_actions'; 

const reviewsReducer = (oldState = {}, action) => {
    Object.freeze(oldState); 
    switch(action.type) {
        case RECEIVE_REVIEWS:
            return action.reviews; 
        
        case RECEIVE_SPOT: 
            if (action.payload.reviews) {
                return action.payload.reviews; 
            } else {
                return {}; 
            }; 
        
        case REMOVE_REVIEW: 
            let newState = {...oldState}; 
            delete newState[action.reviewId]; 
            return newState; 

        default:
            return oldState; 
    }
}

export default reviewsReducer; 