import {connect} from 'react-redux'; 
import {fetchReviews, deleteReview} from "../../actions/review_actions"; 
import { requestSpots } from "../../actions/spot_actions";

const mapStateToProps = (state) => ({
    spots: state.entities.spots,
    reviews: Object.values(state.entities.reviews)
})


