import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './navbar'; 
import { Route, Redirect, withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
        currentUser: state.entities.users[state.session.id]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
}

export default withRouter (connect(
    mapStateToProps, 
    mapDispatchToProps
)(NavBar))