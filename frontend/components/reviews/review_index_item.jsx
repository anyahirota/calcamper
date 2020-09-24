import React from 'react'; 
import { Link } from "react-router-dom";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";

const ReviewIndexItem = ({ review, spot, deleteReview }) => {
    const date = moment(review.created_at).format("MMMM Do[,] YYYY");
    return (
        <li className="your-review-index-item">
            <div className="your-review-index-item-photo">
                <Link to={`/spot/${spot.id}`}>
                    <img
                    className="your-review-index-item-photo"
                    src={spot.spotProfilePic}
                    alt=""
                    />
                </Link>
            </div>
            <div className="your-review-index-item-info">
                <div className="review-index-item-info-top-row">
                    <div className="review-index-spot-name">
                        <p className="review-index-park-name">{spot.park}</p>
                        <div className="review-chevron-right">
                            <FontAwesomeIcon icon={faChevronRight} />
                        </div>
                        <p><Link to={`/spot/${spot.id}`}>{spot.name}</Link></p>
                    </div>
                </div>
                <h1 className="your-review-title">{review.title}</h1>
                <div className="your-review-body">
                    <p>{review.body}</p>
                </div>
                <p className="your-review-date-made">{date}</p>
                <div className="your-review-index-item-buttons">
                    <Link to={`/reviews/${review.id}`}><div className="booking-index-item-button-pink">Edit Review</div></Link>
                    <div className="booking-index-item-button" onClick={() => deleteReview(review.id)}>Delete Review</div>
                </div>
            </div>
        </li>
    );
};

export default ReviewIndexItem