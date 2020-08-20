import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, receiveErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
    return {
        user: { 
            email: "Email", 
            password: "Password"
        },
        errors: errors.session,
        formType: 'login',
        navLink: <Link to="/signup">Sign up!</Link>,
        headerMessage: "Welcome back!",
        headerSubMessage: "Let's get you outside.",
        footerMessage: "Don't have a CalCamper account?", 
        buttonMessage: "Log in" 
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        receiveErrors: (errors) => dispatch(receiveErrors(errors))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
