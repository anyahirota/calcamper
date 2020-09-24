import React from "react"; 
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";

const SpotReviewIndexItem = ({review}) => {
    const date = moment(review.created_at).format("MMMM Do[,] YYYY");
    const lastInitial = review.author_lname[0];
    return (
      <li className="spot-review-index-item">
        <div className="spot-review-author">
          <p>
            <FontAwesomeIcon icon={faUserCircle} />
          </p>
          <p>
            {review.author_fname} {lastInitial}.
          </p>
        </div>
        <div className="spot-review-title-body">
          <h1>{review.title}</h1>
          <p className="spot-review-date">{date}</p>
          <p>{review.body}</p>
        </div>
      </li>
    );
}

export default SpotReviewIndexItem; 