import {connect} from "react-redux"; 
import { withRouter } from "react-router-dom";
import ReviewCreateForm from "./review_create_form"; 
import { createReview, receiveReviewErrors } from "../../actions/review_actions"; 

const mapStateToProps = (state, ownProps) => {
    return {
        review: {
            author_id: state.session.id,
            spot_id: ownProps.spot.id,
            title: "Title", 
            body: "Tell us about your experience!",
        },
        currentUser: state.session.id,
        errors: state.errors.reviews
    }
}

const mapDispatchToProps = (dispatch) => ({
    action: (review) => dispatch(createReview(review)),
    receiveErrors: (errors) => dispatch(receiveReviewErrors(errors)),
});

export default withRouter (connect(
    mapStateToProps, 
    mapDispatchToProps
)(ReviewCreateForm))
