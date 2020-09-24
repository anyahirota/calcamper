import React from 'react'; 
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.user;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.openOtherModal = this.openOtherModal.bind(this); 
    }

    componentDidMount() {
        this.props.receiveErrors([]); 
    }

    terms() {
        if (this.props.formType === 'signup') {
            return (
                <div className="t-cs">
                    <p className="terms-and-conditions">By signing up, I agree to CalCamper's terms and privacy policy.</p>
                </div>
            )
        }
    }
    
    names() {
        if (this.props.formType === 'signup') {
            return (
                <div className="first-last-names-inputs">
                    <input type="text" 
                        value={this.state.first_name} 
                        onChange={this.update("first_name")}
                        className="login-input-name"
                        onClick={this.clearInput("first_name")}
                    />
                    <input type="text"
                        value={this.state.last_name}
                        onChange={this.update("last_name")}
                        className="login-input-name"
                        onClick={this.clearInput("last_name")}
                    />
                </div>
            )
        }
    }

    clearInput(field) {
        if (this.state[field] === this.props.user[field]) {
            return () => this.setState({
                [field]: ""
            });
        }
    }

    update(field) {
        
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    goBack() {
        return (e) => this.props.history.goBack(); 
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
            .then(() => this.props.receiveErrors([]))
            .then(() => this.props.receiveBookingErrors([]))
            .then(() => this.props.closeModal())
             
        
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

    openOtherModal() {
        this.props.closeModal()
        this.props.openModal(); 
    }

    render() {
        let passwordType; 
        if (this.state.password === this.props.user.password) {
            passwordType = "text"
        } else {
            passwordType = "password"
        }; 

        if (this.props.currentUser !== null) {
            return (
                <div>
                    {this.props.history.goBack()}
                </div>
            )
        } else {
        return (
            <form onSubmit={this.handleSubmit} className="login-form-box">
                <div className="form-messages">
                    <p className="form-header-message">{this.props.headerMessage}</p>
                    <p className="form-header-submessage">{this.props.headerSubMessage}</p>
                </div>
                {this.renderErrors()}
                
                <div className="login-form">
                    {this.names()}
                    <input type="text"
                        value={this.state.email}
                        onChange={this.update("email")}
                        className="login-input"
                        onClick={this.clearInput("email")}
                    />
                    <br/>
                    <input type={passwordType}
                        value={this.state.password}
                        onChange={this.update("password")}
                        className="login-input"
                        onClick={this.clearInput("password")}
                    />
                    <br/>
                    <input className="login-button" type="submit" value={this.props.buttonMessage}/>
                </div>
                {this.terms()}
                <div className="alternative-login-link">
                    <p>{this.props.footerMessage}</p>
                    <div onClick={this.openOtherModal}><p>{this.props.navLink}</p></div>
                </div>
            </form>
        )}
    }

}

export default SessionForm;