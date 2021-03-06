import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { connect } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import './App.css';

import { Typography, Box } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Reviews from '../Reviews/Reviews';
import BookingConfirmation from '../BookingConfirmation/BookingConfirmation';
import Checkout from '../Checkout/Checkout';
import ListingsPage from '../ListingsPage/ListingsPage';
import SellerPage from '../SellerPage/SellerPage';
import ProfilePage from '../ProfilePage/ProfilePage';

const customTheme = createMuiTheme({
  palette: {
    type: 'light',
  },
  typography: {
    fontFamily: ['Montserrat'],
  },
});

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' });
  }

  render() {
    return (
      <ThemeProvider theme={customTheme}>
        <Router>
          <Nav />

          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            <Route exact path="/home" component={LandingPage} />
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
          Even though it seems like they are different pages, the user is always on localhost:3000/user */}
            <ProtectedRoute exact path="/admin" component={UserPage} />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            <ProtectedRoute exact path="/info" component={InfoPage} />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will be redirected to the authRedirect path provided. */}
            <ProtectedRoute exact path="/reviews" component={Reviews} />
            <ProtectedRoute exact path="/checkout" component={Checkout} />
            <ProtectedRoute exact path="/listings" component={ListingsPage} />
            <ProtectedRoute exact path="/sellers" component={SellerPage} />
            <ProtectedRoute exact path="/profile" component={ProfilePage} />
            <ProtectedRoute
              exact
              path="/booking-confirmation"
              component={BookingConfirmation}
            />
            <ProtectedRoute
              exact
              path="/login"
              authRedirect="/admin"
              component={LoginPage}
            />
            <ProtectedRoute
              exact
              path="/registration"
              authRedirect="/admin"
              component={RegisterPage}
            />
            <ProtectedRoute
              exact
              path="/home"
              authRedirect="/admin"
              component={LandingPage}
            />

            {/* If none of the other routes matched, we will show a 404. */}
            <Route
              render={() => (
                <Box m={4}>
                  <Typography component="h1" variant="h2">
                    404 Page Not Found
                  </Typography>
                </Box>
              )}
            />
          </Switch>
          <Box mt={3}>
            <Footer />
          </Box>
        </Router>
      </ThemeProvider>
    );
  }
}

export default connect()(App);
