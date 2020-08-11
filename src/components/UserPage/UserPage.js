import React from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';

//MaterialUI
import { Typography, Grid, Container } from '@material-ui/core';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const UserPage = (props) => (
  <Container maxWidth="lg">
    <Grid container justify="space-between" alignItems="center">
      <Grid item>
        <Typography gutterBottom component="h1" variant="h3" id="welcome">
          Welcome, {props.store.user.username}!
        </Typography>
      </Grid>
      <Grid item>
        <Typography gutterBottom variant="h6" component="p">
          Your ID is: {props.store.user.id}
        </Typography>
      </Grid>
      <Grid>
        <LogOutButton className="log-in" />
      </Grid>
    </Grid>
  </Container>
);

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);
