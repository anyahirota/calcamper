import React from "react"; 

class ReviewCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.review;
    this.handleSubmit = this.handleSubmit.bind(this); 
  }

  componentDidMount() {
    this.props.receiveErrors([]);
  }

  clearInput(field) {
    if (this.state[field] === this.props.review[field]) {
      return () =>
        this.setState({
          [field]: "",
        });
    }
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  renderErrors() {
    return (
      <ul className="errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    const review = {
      author_id: this.props.review.author_id, 
      spot_id: this.state.spot_id, 
      title: this.state.title,
      body: this.state.body,
    }
    this.props.action(review)
        .then(() => this.props.receiveErrors([]))
        .then(() => {
            this.setState({
              title: this.props.review.title,
              body: this.props.review.body,
            });
        })
  }

  render() {
        if (this.props.currentUser === null) return null; 
        return (
          <div className="review-form-container">
            <form className="review-form" onSubmit={this.handleSubmit}>
              <h1>Add a review</h1>
              {this.renderErrors()}
              <input
                className="review-form-title-input"
                type="text"
                value={this.state.title}
                onClick={this.clearInput("title")}
                onChange={this.update("title")}
              />
              <textarea
                className="review-form-body-input"
                cols="30"
                rows="5"
                value={this.state.body}
                onClick={this.clearInput("body")}
                onChange={this.update("body")}
              ></textarea>
              <input
                className="review-create-submit-button"
                type="submit"
                value="Submit review"
              />
            </form>
          </div>
        );
    }
}

export default ReviewCreateForm; 