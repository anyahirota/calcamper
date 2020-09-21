import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, receiveErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
    return {
        user: { 
            email: "Email", 
            password: "Password"
        },
        errors: state.errors.session,
        formType: 'login',
        navLink: "Sign up!",
        headerMessage: "Welcome back!",
        headerSubMessage: "Let's get you outside.",
        footerMessage: "Don't have a CalCamper account?", 
        buttonMessage: "Log in", 
        currentUser: state.session.id, 
        closeModal: () => ownProps.closeModal(),  
        openModal: () => ownProps.openModal(),
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        receiveErrors: (errors) => dispatch(receiveErrors(errors))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
