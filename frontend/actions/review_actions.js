import * as reviewAPIUtil from '../util/review_api_util'; 

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS"; 
export const REMOVE_REVIEW = "REMOVE_REVIEW"; 
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS"; 

const receiveReviews = (reviews) => ({
    type: RECEIVE_REVIEWS, 
    reviews
})

const removeReview = (reviewId) => ({
    type: REMOVE_REVIEW, 
    reviewId
})

export const receiveReviewErrors = (errors) => ({
    type: RECEIVE_REVIEW_ERRORS, 
    errors
})

export const fetchReviews = () => (dispatch) =>
    reviewAPIUtil.fetchReviews().then(
        (reviews) => dispatch(receiveReviews(reviews)),
        (err) => dispatch(receiveReviewErrors(err.responseJSON))
    ); 

export const createReview = (review) => dispatch => (
    reviewAPIUtil.createReview(review).then(spot => (
        dispatch(receiveReviews(spot.reviews))
    ), err => (
        dispatch(receiveReviewErrors(err.responseJSON))
    ))
); 

export const updateReview = (review) => (dispatch) =>
    reviewAPIUtil.updateReview(review).then(
        (reviews) => dispatch(receiveReviews(reviews)),
        (err) => dispatch(receiveReviewErrors(err.responseJSON))
    ); 

export const deleteReview = (reviewId) => (dispatch) => 
    reviewAPIUtil.deleteReview(reviewId).then(
        () => dispatch(removeReview(reviewId))
    );

