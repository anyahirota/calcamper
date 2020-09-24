import React from 'react'; 

class EditReviewForm extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            id: this.props.review.id, 
            spot_id: this.props.review.spot_id, 
            author_id: this.props.review.author_id, 
            title: this.props.review.title, 
            body: this.props.review.body
        }; 
        this.handleSubmit = this.handleSubmit.bind(this); 
        this.deleteEditReview = this.deleteEditReview.bind(this); 
    }

    renderErrors() {
        return (
            <ul className="errors">
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    update(field) {
        return (e) =>
            this.setState({
                [field]: e.currentTarget.value,
        });
    }

    deleteEditReview(e) {
        e.preventDefault(); 
        this.props
            .deleteReview(this.state.id)
            .then(() => this.props.history.goBack());
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props
            .action(this.state)
            .then(() => this.props.receiveErrors([]))
            .then(() => this.props.history.goBack());
    }

    render() {
        return (
          <div className="review-edit-form-container">
            <form className="review-edit-form" >
              <h1>Edit Review</h1>
              {this.renderErrors()}
              <input
                className="review-form-title-input"
                type="text"
                value={this.state.title}
                onChange={this.update("title")}
              />
              <textarea
                className="review-form-body-input"
                cols="30"
                rows="5"
                value={this.state.body}
                onChange={this.update("body")}
              ></textarea>
              <input
                className="review-create-submit-button"
                type="submit"
                value="Save edits"
                onClick={this.handleSubmit}
              />
              <button className="review-edit-delete-button" onClick={this.deleteEditReview}>
                Delete review
              </button>
            </form>
          </div>
        );
    }
}

export default EditReviewForm; 