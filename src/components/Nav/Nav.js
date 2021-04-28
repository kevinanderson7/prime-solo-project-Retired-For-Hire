import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Nav.css';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  IconButton,
  Avatar,
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  useScrollTrigger,
  Slide,
  Grid,
  Box,
} from '@material-ui/core';

function HideOnScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,

  window: PropTypes.func,
};

const Nav = (props) => {
  let loginLinkData = {
    path: '/login',
    text: 'Login / Register',
  };

  if (props.store.user.id != null) {
    loginLinkData.path = '/admin';
    loginLinkData.text = 'Home';
  }
  const handleProfileClick = () => {
    console.log('clicking profile pic');
    props.history.push('/profile');
  };

  return (
    <Box mb={3}>
      <React.Fragment>
        <CssBaseline />
        <HideOnScroll {...props}>
          <AppBar>
            <Toolbar>
              <Grid container alignItems="center" justify="space-between">
                <Grid item xs={4}>
                  <Link to="/home">
                    <Typography noWrap variant="h4" className="nav-title">
                      Retired For Hire
                    </Typography>
                  </Link>
                </Grid>
                <Grid item>
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
                        <button
                          onClick={() => props.dispatch({ type: 'LOGOUT' })}
                          className="nav-link"
                        >
                          Log Out
                        </button>
                      </>
                    )}
                    {/* Always show this link since the about page is not protected */}
                    <Link className="nav-link" to="/home">
                      About Us
                    </Link>
                    <IconButton display="inline" onClick={handleProfileClick}>
                      <Avatar alt="avatar" src={props.store.user.avatar} />
                    </IconButton>
                  </div>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <Toolbar />
      </React.Fragment>
    </Box>
  );
};

export default connect(mapStoreToProps)(withRouter(Nav));
