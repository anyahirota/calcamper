import React from 'react'; 
import ReviewIndexItem from "./review_index_item"; 

class ReviewIndex extends React.Component {

    componentDidMount() {
        this.props.fetchReviews()
            .then(() => this.props.requestSpots())
    }

    render() {
        if (Object.values(this.props.spots).length < 23) return null; 

        const newToOld = this.props.reviews.reverse();
        return (
          <div className="booking-index">
            <h1>Your Reviews</h1>
            <ul className="your-review-index-list">
              {newToOld.map((review) => (
                <ReviewIndexItem
                  key={review.id}
                  review={review}
                  spot={this.props.spots[review.spot_id]}
                  deleteReview={this.props.deleteReview}
                />
              ))}
            </ul>
          </div>
        ); 

    }
}

export default ReviewIndex; 