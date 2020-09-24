import React from "react"; 
import SpotReviewIndex from "./spot_review_index"; 
import ReviewCreateFormContainer from "./review_create_form_container"; 

const SpotReviews =({spot, reviews, currentUser}) => {
    return (
        <div className="spot-reviews">
            <h1>{reviews.length} Written reviews</h1>
            <ReviewCreateFormContainer spot={spot}/>
            <SpotReviewIndex reviews={reviews} currentUser={currentUser}/>
        </div>
    )
}

export default SpotReviews; 