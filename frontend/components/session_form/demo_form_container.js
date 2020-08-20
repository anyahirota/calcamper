import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, receiveErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
    return {
        user: {
            email: "jimdoe@gmail.com",
            password: "password"
        },
        errors: errors.session,
        formType: 'login',
        navLink: <Link to="/signup">Sign up!</Link>,
        headerMessage: "Welcome!", 
        headerSubMessage: "Try out CalCamper as a demo user.", 
        footerMessage: "To create your own CalCamper account:", 
        buttonMessage: "Start Demo" 
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        receiveErrors: (errors) => dispatch(receiveErrors(errors))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);