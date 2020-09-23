export const createReview = (review) => {
    return $.ajax({
        method: "POST",
        url: "/api/reviews",
        data: { review },
    });
};

export const updateReview = (review) => {
    return $.ajax({
        method: "PATCH", 
        url: `/api/reviews/${review.id}`, 
        data: { review }
    }); 
}; 

export const deleteReview = (reviewId) => {
    return $.ajax({
        url: `/api/reviews/${reviewId}`,
        method: "DELETE",
        data: { reviewId },
    });
};

//only when signed in: gets the users reviews 

export const fetchReviews = () => {
    return $.ajax({
        url: `/api/reviews`,
        method: "GET",
    });
}; 
