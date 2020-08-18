import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../../../app/assets/images/nav_bar_imgs/logo.png'; 

class NavBar extends React.Component {

    navButtons() {
        const notLoggedIn = () => (
            <ul className="nav-button-list">
                <li className="nav-buttons"><Link to="/login">Log in</Link></li>
                <li className="nav-buttons"><Link to="/signup">Sign up</Link></li>
                <li className="demo-button"><Link to="/demo">Demo Login</Link></li>
            </ul>
        );
        const loggedIn = () => (
            <ul className="nav-button-list-logged">
                <li className="nav-buttons">Trips</li>
                <li className="nav-buttons">Saves</li>
                <li className="bear-dropdown-button">
                    <p>icon</p>
                    <div className="bear-dropdown hidden" >
                        <div className="arrow"></div>
                        <ul className="bear-dropdown-ul">
                            <li>
                                <button className="dropdown-button" onClick={this.props.logout}>Log Out</button>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        );
        return this.props.currentUser ? loggedIn() : notLoggedIn();
    }

    render() {
        return (
            <nav className="nav-bar">
                <div className="logo">
                    <Link to="/">
                        <div className="logo-placeholder">
                            LOGO
                            {/* <img src={logo} alt="Logo" /> */}
                        </div>
                    </Link>
                </div>
                {this.navButtons()}
            </nav>
        )
    }
}

export default NavBar; 