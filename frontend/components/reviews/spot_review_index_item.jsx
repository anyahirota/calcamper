import React from "react"; 
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const SpotReviewIndexItem = ({review}) => {
    const lastInitial = review.author_lname[0];
    return (
      <li className="spot-review-index-item">
        <div className="spot-review-author">
            <p><FontAwesomeIcon icon={faUserCircle} /></p>
            <p>{review.author_fname} {lastInitial}.</p>
        </div>
        <div className="spot-review-title-body">
            <h1>{review.title}</h1>
            {/* review date */}
            <p>{review.body}</p>
        </div>
      </li>
    );
}

export default SpotReviewIndexItem; 