import React from 'react';
import { Link } from 'react-router-dom';


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
                <li className="nav-buttons"><Link to="/bookings">Trips</Link></li>
                <li className="nav-buttons">Saves</li>
                <li className="bear-dropdown-button">
                    <div className="bear-icon">
                        <img src={window.reddishBear} alt="Logo" />
                    </div>
                    <div className="bear-dropdown hidden" >
                        <div className="dropdown-area"></div>
                        <div className="arrow"></div>
                        <div className="empty-arrow"></div>
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
            <div>
                <nav className="nav-bar">
                    <div className="logo">
                        <Link to="/">
                            <div className="logo-placeholder">
                                <img src={window.logoURL} alt="Logo"/>
                            </div>
                        </Link>
                    </div>
                    {this.navButtons()}
                    
                    
                </nav>
            </div>
        )
    }
}

export default NavBar; 