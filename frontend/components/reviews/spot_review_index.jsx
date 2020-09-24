import React from 'react'; 
import SpotReviewIndexItem from "./spot_review_index_item"; 

const SpotReviewIndex =({reviews, currentUser}) => {
    const newFirst = reviews.reverse(); 
    return (
        <div className="spot-review-index-container">
            <ul className="spot-review-index-list">
                {newFirst.map(review => (
                    <SpotReviewIndexItem key={review.id} review={review} currentUser={currentUser}/>
                ))}
            </ul>
        </div>
    );
}

export default SpotReviewIndex; 