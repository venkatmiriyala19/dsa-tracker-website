import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../pages/auth/AuthContext";
import useSound from "use-sound";
import loud_btn from "../sounds/loud_btn_clk.wav";
import "./style.css";
import Login from "../../pages/auth/Login";
import Signup from "../../pages/auth/Signup";

function Nav() {
  const clientUrl = process.env.CLIENT_URL;
  const { currentUser, logout } = useAuth();
  const [play] = useSound(loud_btn);
  const [showMenu, setShowMenu] = useState(false);
  const [showLoginModel, setShowLoginModel] = useState(false);
  const [showSignupModel, setShowSignupModel] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleLoginModal = () => {
    setShowLoginModel((prevState) => !prevState);
  };

  const toggleSignupModal = () => {
    setShowSignupModel((prevState) => !prevState);
  };

  useEffect(() => {
    const disableBodyScroll = () => {
      document.body.style.overflow = "hidden";
    };

    const enableBodyScroll = () => {
      document.body.style.overflow = "visible";
    };

    if (showLoginModel || showSignupModel) {
      disableBodyScroll();
    } else {
      enableBodyScroll();
    }

    return () => {
      enableBodyScroll();
    };
  }, [showLoginModel, showSignupModel]);

  return (
    <>
      <div className="navbar-container">
        <div className="NavContainer">
          <div className="logo">
            <img src="/images/nav/logo.jpg" alt="Logo" />
            <h4>DSA-Tracker</h4>
          </div>
          <nav className="fill stroke">
            <li>
              <Link to={clientUrl} className="active" onClick={play}>
                Home
              </Link>
            </li>
            <li>
              <Link to={clientUrl} onClick={play}>
                About
              </Link>
            </li>
            <li className="dropdown">
              <Link to={clientUrl} onClick={play}>
                LeaderBoard
              </Link>
            </li>
            <li className="dropdown">
              <Link to={clientUrl} onClick={play}>
                AlgoVisualizer
              </Link>
            </li>
          </nav>
          {currentUser ? (
            <div className="profile" onClick={play}>
              <span className="name">{currentUser.displayName}</span>
              {/* <img src={currentUser.photoURL} alt="User Avatar" /> */}
              <button onClick={() => logout()}>Logout</button>
            </div>
          ) : (
            <div className="login-signup-buttons">
              <button onClick={toggleLoginModal}>Login</button>
              <button onClick={toggleSignupModal}>Signup</button>
            </div>
          )}
        </div>
      </div>

      <nav className="nav-responsive">
        {showMenu && (
          <ul className="responsive-menu">
            <div className="tags show">
              <li>
                <Link to={clientUrl} className="active" onClick={play}>
                  Home
                </Link>
              </li>
              <li>
                <Link to={clientUrl} onClick={play}>
                  About
                </Link>
              </li>
              <li className="dropdown">
                <Link to={clientUrl} onClick={play}>
                  Services
                </Link>
              </li>
              <li className="dropdown">
                <Link to={clientUrl} onClick={play}>
                  CaseStudies
                </Link>
              </li>
              <li>
                <Link to={clientUrl} onClick={play}>
                  Specialities
                </Link>
              </li>
              <li>
                <Link to={clientUrl} onClick={play}>
                  Contact Us
                </Link>
              </li>
            </div>
          </ul>
        )}
      </nav>

      {showLoginModel && (
        <div className="modal-overlay">
          <div className="login-modal">
            <Login toggleLoginModal={toggleLoginModal} />
          </div>
        </div>
      )}

      {showSignupModel && (
        <div className="modal-overlay">
          <div className="signup-modal">
            <Signup toggleSignupModal={toggleSignupModal} />
          </div>
        </div>
      )}
    </>
  );
}

export default Nav;
