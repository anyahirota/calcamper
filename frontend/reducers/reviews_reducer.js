import {RECEIVE_REVIEWS, REMOVE_REVIEW} from "../actions/review_actions"; 

const reviewsReducer = (oldState = {}, action) => {
    Object.freeze(oldState); 
    switch(action.type) {
        case RECEIVE_REVIEWS:
            return action.reviews; 
        
        case REMOVE_REVIEW: 
            let newState = {...oldState}; 
            delete newState[actions.reviewId]; 
            return newState; 

        default:
            return oldState; 
    }
}

export default reviewsReducer; 