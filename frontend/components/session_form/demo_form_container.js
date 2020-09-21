import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, receiveErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
    return {
        user: {
            email: "jimdoe@gmail.com",
            password: "password"
        },
        errors: state.errors.session,
        formType: 'login',
        navLink: "Sign up!",
        headerMessage: "Welcome!", 
        headerSubMessage: "Try out CalCamper as a demo user.", 
        footerMessage: "To create your own CalCamper account:", 
        buttonMessage: "Start Demo", 
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