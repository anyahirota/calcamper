import React from "react"; 
import SpotReviewIndex from "./spot_review_index"; 

const SpotReviews =({spot, reviews}) => {
    return (
        <div className="spot-reviews">
            <h1>{reviews.length} Written reviews</h1>
            {/* review form */}
            <SpotReviewIndex spot={spot} reviews={reviews}/>
        </div>
    )
}

export default SpotReviews; 