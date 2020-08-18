import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
    return {
        user: {
            first_name: "First name",
            last_name: "Last name",
            email: "Email address",
            password: "Create a password"
        },
        errors: errors.session,
        formType: 'signup',
        navLink: <Link to="/login">Sign in</Link>,
        headerMessage: "Join CalCamper",
        headerSubMessage: "Discover California's great outdoors",
        footerMessage: "Have an account?", 
        buttonMessage: "Join CalCamper" 
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
