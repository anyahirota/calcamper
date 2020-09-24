import React from "react";
import EditReviewForm from "./edit_review_form"; 

class EditReviewPreForm extends React.Component {
    componentDidMount() {
        this.props
            .fetchReviews()
            .then(() => this.props.requestSpots())
            .then(() => this.props.receiveErrors([]));
    }

    render() {
        if (!this.props.review) return null;

        return (
            <EditReviewForm 
                action={this.props.action}
                review={this.props.review}
                spot={this.props.spot}
                errors={this.props.errors}
                history={this.props.history}
                receiveErrors={this.props.receiveErrors}
                deleteReview={this.props.deleteReview}
            />
        )
    }
}

export default EditReviewPreForm; 