import React from 'react';
import { connect } from 'react-redux';

import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';

import './UserPage.css';
//MaterialUI
import {
  Typography,
  Grid,
  Card,
  Button,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Box,
} from '@material-ui/core';

const UserPage = (props) => {
  const handleHireClick = () => {
    props.history.push('/listings');
  };
  const handleRetiredClick = () => {
    props.history.push('/sellers');
  };

  const handleUserDashboardClick = () => {
    props.history.push('/profile');
  };

  return (
    <Box m={6}>
      <Grid container justify="flex-end"></Grid>
      <Grid container justify="space-between" alignItems="center">
        <Grid item xs={3}>
          <Card elevation={10}>
            <CardContent>
              <Typography component="h1" variant="h5" id="welcome">
                Welcome, {props.store.user.first_name}!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Box mt={4} mb={2}>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={6}>
            <Card elevation={10}>
              <CardContent>
                <Typography align="center" component="h2" variant="h4">
                  What would you like to do?
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Grid container spacing={6} alignItems="flex-start" justify="center">
        <Grid item xs={12} sm={4} lg={4}>
          <Box mt={3}>
            <Card onClick={handleHireClick} elevation={10}>
              <CardActionArea>
                <CardMedia
                  title="image of now hiring sign"
                  component="img"
                  src="/images/looking-to-hire.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Are you looking to hire?
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button onClick={handleHireClick} size="small" color="primary">
                  Head to Marketplace
                </Button>
              </CardActions>
            </Card>
          </Box>
        </Grid>

        <Grid item xs={12} sm={4} lg={4}>
          <Box mt={3}>
            <Card onClick={handleRetiredClick} elevation={10}>
              <CardActionArea>
                <CardMedia
                  title="retired individual"
                  component="img"
                  src="/images/retired-image.jpg"
                />

                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Or are you retired?
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  ></Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  onClick={handleRetiredClick}
                  size="small"
                  color="primary"
                >
                  Head to Seller Dashboard
                </Button>
              </CardActions>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} lg={4}>
          <Box mt={3}>
            <Card onClick={handleUserDashboardClick} elevation={10}>
              <CardActionArea>
                <CardMedia
                  title="dashboard image"
                  component="img"
                  src="/images/dashboard.jpg"
                />

                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Head to your dashboard
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button color="primary" onClick={handleUserDashboardClick}>
                  GO TO YOUR DASHBOARD
                </Button>
              </CardActions>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default connect(mapStoreToProps)(withRouter(UserPage));
