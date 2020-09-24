import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { selectReviewSpot } from "../../reducers/selectors"; 
import {
  updateReview,
  fetchReviews,
  receiveReviewErrors,
  deleteReview,
} from "../../actions/review_actions"; 
import { requestSpots } from '../../actions/spot_actions';
import EditReviewPreForm from "./edit_review_pre_form"; 

const mapStateToProps = (state, ownProps) => {

    const review = state.entities.reviews[ownProps.match.params.id]; 
    return {
        review, 
        spot: selectReviewSpot(state, review), 
        errors: state.errors.reviews, 
    }
}

const mapDispatchToProps = (dispatch) => ({
    action: (review) => dispatch(updateReview(review)),
    requestSpots: () => dispatch(requestSpots()),
    fetchReviews: () => dispatch(fetchReviews()),
    receiveErrors: (errors) => dispatch(receiveReviewErrors(errors)),
    deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
})

export default withRouter (connect(
    mapStateToProps, 
    mapDispatchToProps
)(EditReviewPreForm))

