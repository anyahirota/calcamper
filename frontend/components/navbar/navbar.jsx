import React from 'react';
import { Link } from 'react-router-dom';
import Search from './search'; 
import DemoFormContainer from "../session_form/demo_form_container"; 
import LoginFormContainer from "../session_form/login_form_container"; 
import SignupFormContainer from "../session_form/signup_form_container"; 

class NavBar extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            showLogin: false,
            showSignup: false,
            showDemo: false, 
        };
        this.openLogin = this.openLogin.bind(this); 
        this.closeLogin = this.closeLogin.bind(this); 
        this.openSignup = this.openSignup.bind(this);
        this.closeSignup = this.closeSignup.bind(this); 
        this.openDemo = this.openDemo.bind(this);
        this.closeDemo = this.closeDemo.bind(this); 
    }

    openLogin() {
        this.setState({ showLogin: true }, () => {
            const modalBackground = document.querySelector(
                ".login-form-background"
            );
            modalBackground.addEventListener("click", this.closeLogin);
        });
    }

    closeLogin() {
        const modalBackground = document.querySelector(
            ".login-form-background"
        );
        if (modalBackground) modalBackground.removeEventListener("click", this.closeLogin);
        this.setState({ showLogin: false });
    }

    openSignup() {
        this.setState({ showSignup: true }, () => {
            const modalBackground = document.querySelector(
                ".signup-form-background"
            );
            modalBackground.addEventListener("click", this.closeSignup);
        });
    }

    closeSignup() {
        const modalBackground = document.querySelector(
            ".signup-form-background"
        );
        if (modalBackground) modalBackground.removeEventListener("click", this.closeSignup);
        this.setState({ showSignup: false });
    }

    openDemo() {
        this.setState({ showDemo: true }, () => {
            const modalBackground = document.querySelector(
                ".demo-form-background"
            );
            modalBackground.addEventListener("click", this.closeDemo);
        });
    }

    closeDemo() {
        const modalBackground = document.querySelector(
            ".demo-form-background"
        );
        if (modalBackground) modalBackground.removeEventListener("click", this.closeDemo);
        this.setState({ showDemo: false });
    }
    // openModal(flag, qSelector) {
    //     return () => {
    //         this.setState({ [flag]: true }, () => {
    //             const modalBackground = document.querySelector(
    //                 qSelector
    //             );
    //             modalBackground.addEventListener("click", this.closeModal);
    //         });
    //     }
    // }

    // closeModal(flag, qSelector) {  
    //     return () => {
    //         const modalBackground = document.querySelector(
    //             qSelector
    //             );
    //             modalBackground.removeEventListener("click", this.closeModal);
    //         this.setState({ [flag]: false });
    //     }
    // }


    navButtons() {
        const notLoggedIn = () => (
            <div>
                <ul className="nav-button-list">
                    <li className="nav-buttons" onClick={this.openLogin}>Log in</li>
                    <li className="nav-buttons" onClick={this.openSignup}>Sign up</li>
                    <li className="demo-button" onClick={this.openDemo}>Demo Login</li>
                </ul> 
                {this.state.showLogin ? 
                    <div className="login-form-container">
                        <LoginFormContainer closeModal={() => this.closeLogin()} openModal={() => this.openSignup()}/>
                        <div 
                            onClick={this.closeLogin} 
                            className="login-form-background">
                        </div>
                    </div> : null
                }
               
                {this.state.showSignup ? 
                    <div className="login-form-container">
                        <SignupFormContainer closeModal={() => this.closeSignup()} openModal={() => this.openLogin()}/>
                        <div 
                            onClick={this.closeSignup} 
                            className="signup-form-background">
                        </div>
                    </div> : null
                }

                {this.state.showDemo ?
                    <div className="login-form-container">
                        <DemoFormContainer closeModal={() => this.closeDemo()} openModal={() => this.openSignup()}/>
                        <div 
                            onClick={this.closeDemo} 
                            className="demo-form-background">
                        </div>
                    </div> : null
                }
            </div>
        );
        const loggedIn = () => (
          <ul className="nav-button-list-logged">
            <li className="nav-buttons">
              <Link to="/bookings">Trips</Link>
            </li>
            <li className="nav-buttons">Saves</li>
            <li className="bear-dropdown-button">
              <div className="bear-icon">
                <img src={window.reddishBear} alt="Logo" />
              </div>
              <div className="bear-dropdown hidden">
                <div className="dropdown-area"></div>
                <div className="arrow"></div>
                <div className="empty-arrow"></div>
                <ul className="bear-dropdown-ul">
                  <li>
                    <Link to="/reviews">
                      <div
                        id="first-dropdown-button"
                        className="dropdown-button"
                      >
                        Your Reviews
                      </div>
                    </Link>
                  </li>
                  <li>
                    <button
                      className="dropdown-button"
                      onClick={this.props.logout}
                    >
                      Log Out
                    </button>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        );
        return this.props.currentUser ? loggedIn() : notLoggedIn();
    }

    renderSearchBar() {
        if (this.props.history.location.pathname === "/") {
            return (
                <div></div>
            )
        } else {
            return (
                <Search history={this.props.history} />
            )
        }
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
                        {this.renderSearchBar()}
                    </div>
                   
                    {this.navButtons()}
                    
                    
                </nav>
            </div>
        )
    }
}

export default NavBar; 