import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Nav.css';
import mapStoreToProps from '../../redux/mapStoreToProps';

//MaterialUI
// import { AppBar } from '@material-ui/core';

const Nav = (props) => {
  let loginLinkData = {
    path: '/login',
    text: 'Login / Register',
  };

  if (props.store.user.id != null) {
    loginLinkData.path = '/admin';
    loginLinkData.text = 'Home';
  }

  return (
    // <AppBar position="static">
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">Retired For Hire</h2>
      </Link>
      <div className="nav-right">
        <Link className="nav-link" to={loginLinkData.path}>
          {/* Show this link if they are logged in or not,
          but call this link 'Home' if they are logged in,
          and call this link 'Login / Register' if they are not */}
          {loginLinkData.text}
        </Link>
        {/* Show the link to the info page and the logout button if the user is logged in */}
        {props.store.user.id && (
          <>
            <Link className="nav-link" to="/info">
              Info Page
            </Link>
            <button
              onClick={() => props.dispatch({ type: 'LOGOUT' })}
              className="nav-link"
            >
              Log Out
            </button>
          </>
        )}
        {/* Always show this link since the about page is not protected */}
        <Link className="nav-link" to="/about">
          About
        </Link>
      </div>
    </div>
    // </AppBar>
  );
};

export default connect(mapStoreToProps)(Nav);
