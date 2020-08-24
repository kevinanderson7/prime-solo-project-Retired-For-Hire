import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import ReactPlayer from 'react-player/youtube';
import './LandingPage.css';

//MaterialUI
import {
  Typography,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from '@material-ui/core';

// CUSTOM COMPONENTS
// import RegisterForm from '../RegisterForm/RegisterForm';

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
          {/* <div className="grid">
            <div className="grid-col grid-col_8"> */}
          <Grid item xs={8}>
            <Card>
              <CardContent>
                <Typography gutterBottom component="h2" variant="h4">
                  {this.state.heading}
                </Typography>
                <Typography gutterBottom component="h3" variant="h5">
                  Who are we?
                </Typography>
                <Typography component="p" variant="body1">
                  We are a company that connects highly skilled retired
                  professionals with private individuals. Whether you're looking
                  to hire highly skilled professionals, or you're retired and
                  looking to market your skills, this is the place for you!
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Box mt={12}>
          <Grid container spacing={6} justify="flex-start" alignItems="center">
            <Grid item xs={4}>
              <Card elevation={3}>
                <CardMedia
                  title="image of a couple"
                  component="img"
                  src="/images/landing-page-private-individuals.jpg"
                />
              </Card>
            </Grid>
            <Grid item xs={4}>
              {/* <Box ml={15}> */}
              <img
                alt="arrow"
                className="arrow"
                component="img"
                src="/images/arrow.png"
              ></img>
              {/* </Box> */}
            </Grid>
            {/* </div> */}
            <Grid item xs={4}>
              <Card elevation={3}>
                <CardMedia
                  title="image of a skilled worker"
                  component="img"
                  src="/images/landing-page-2.jpg"
                />
              </Card>
            </Grid>
          </Grid>
          <Box m={30}>
            <Grid container justify="center">
              <Grid item>
                <Card elevation={10}>
                  <CardContent>
                    <Grid container justify="center">
                      <Grid item>
                        <Typography gutterBottom justify="center" variant="h5">
                          Is Retirement Actually Bad For You?
                        </Typography>
                      </Grid>
                    </Grid>
                    <ReactPlayer url="https://www.youtube.com/watch?v=3-9WYO_MQ20" />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <div className="grid-col grid-col_4"> */}
        {/* <Grid item>
          {/* <RegisterForm /> */}
        {/* <center>
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
          </center> */}
        {/* </Grid> */}
        {/* </div> */}
        {/* </div> */}
      </Box>
    );
  }
}

export default connect(mapStoreToProps)(LandingPage);
