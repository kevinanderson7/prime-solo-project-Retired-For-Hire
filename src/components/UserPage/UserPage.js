import React from 'react';
import { connect } from 'react-redux';
// import LogOutButton from '../LogOutButton/LogOutButton';
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

  // Modal,
  // Backdrop,
  // Fade,
  makeStyles,
} from '@material-ui/core';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 300,
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    border: '2px solid #000',
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(60),
      textAlign: 'center',
      height: theme.spacing(5),
      padding: theme.spacing(2, 4, 3),
      justifyConent: 'center',
      alignItems: 'center',
    },
  },
}));

const UserPage = (props) => {
  const classes = useStyles();

  const handleHireClick = () => {
    props.history.push('/listings');
  };
  const handleRetiredClick = () => {
    props.history.push('/sellers');
  };

  const handleUserDashboardClick = () => {
    props.history.push('/profile');
  };

  // const handleProfileClick = () => {
  //   console.log('clicking profile pic');
  // };

  return (
    <Box m={6}>
      <Grid container justify="flex-end">
        {/* <Grid item>
          <IconButton onClick={handleProfileClick}>
            <Avatar alt="avatar" src={props.store.user.avatar} />
          </IconButton>
        </Grid> */}
      </Grid>
      <Grid container justify="space-between" alignItems="center">
        <Grid item xs={12}>
          <Typography gutterBottom component="h1" variant="h5" id="welcome">
            Welcome, {props.store.user.first_name}!
          </Typography>
        </Grid>

        {/* <Grid>
          <LogOutButton className="log-in" />
        </Grid> */}
      </Grid>
      <Box mt={4} mb={2}>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12}>
            {/* <div className={classes.root}> */}
            <Typography align="center" component="h2" variant="h4">
              What would you like to do?
            </Typography>
            {/* </div> */}
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
                  Learn More
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
                  Learn More
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
                    Head to User Dashboard
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

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(withRouter(UserPage));
