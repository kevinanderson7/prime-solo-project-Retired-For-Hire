import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './LandingPage.css';

//MaterialUI
import {
  Button,
  Typography,
  Box,
  Grid,
  Card,
  CardMedia,
  Paper,
} from '@material-ui/core';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

class LandingPage extends Component {
  state = {
    heading: 'Welcome to Retired For Hire!',
  };

  onLogin = (event) => {
    this.props.history.push('/login');
  };

  render() {
    return (
      <Box m={3}>
        <Grid container>
          <Typography gutterBottom component="h2" variant="h4">
            {this.state.heading}
          </Typography>
          <div className="grid">
            <div className="grid-col grid-col_8">
              <Typography component="h3" variant="h5">
                Who are we?
              </Typography>
              <Typography component="p" variant="body1">
                We are a company that connects highly skilled retired
                professionals with private individuals
              </Typography>
              <Box mt={4}>
                <Grid item xs={6}>
                  <Card elevation={3}>
                    <CardMedia
                      title="image of now hiring sign"
                      component="img"
                      src="/images/landing-page-private-individuals.jpg"
                    />
                  </Card>
                </Grid>
              </Box>
            </div>

            <div className="grid-col grid-col_4">
              <RegisterForm />

              <center>
                <Typography component="h4" variant="h6">
                  Already a Member?
                </Typography>
                <Button
                  variant="contained"
                  className="btn btn_sizeSm"
                  onClick={this.onLogin}
                >
                  Login
                </Button>
              </center>
            </div>
          </div>
        </Grid>
      </Box>
    );
  }
}

export default connect(mapStoreToProps)(LandingPage);
