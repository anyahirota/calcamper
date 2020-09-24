import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, receiveErrors } from '../../actions/session_actions';
import { receiveBookingErrors } from "../../actions/booking_actions"; 
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
    return {
        user: {
            first_name: "First name",
            last_name: "Last name",
            email: "Email address",
            password: "Create a password"
        },
        errors: state.errors.session,
        formType: 'signup',
        navLink: "Sign in",
        headerMessage: "Join CalCamper",
        headerSubMessage: "Discover California's great outdoors",
        footerMessage: "Have an account?", 
        buttonMessage: "Join CalCamper", 
        currentUser: state.session.id, 
        closeModal: () => ownProps.closeModal(),  
        openModal: () => ownProps.openModal(),
    };
};

const mapDispatchToProps = dispatch => {
    return {
      processForm: (user) => dispatch(signup(user)),
      receiveErrors: (errors) => dispatch(receiveErrors(errors)),
      receiveBookingErrors: (errors) => dispatch(receiveBookingErrors(errors)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
