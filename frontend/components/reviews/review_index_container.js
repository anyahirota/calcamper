import {connect} from 'react-redux'; 
import {fetchReviews, deleteReview} from "../../actions/review_actions"; 
import { requestSpots } from "../../actions/spot_actions";
import ReviewIndex from "./review_index"; 

const mapStateToProps = (state) => ({
    spots: state.entities.spots,
    reviews: Object.values(state.entities.reviews)
})

const mapDispatchToProps = (dispatch) => ({
  requestSpots: () => dispatch(requestSpots()),
  fetchReviews: () => dispatch(fetchReviews()),
  deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
});

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(ReviewIndex); 

