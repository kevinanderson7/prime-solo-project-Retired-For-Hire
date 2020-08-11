import React from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';

//MaterialUI
import { Typography } from '@material-ui/core';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const UserPage = (props) => (
  <div>
    <Typography component="h1" variant="h3" id="welcome">
      Welcome, {props.store.user.username}!
    </Typography>
    <Typography variant="h6" component="p">
      Your ID is: {props.store.user.id}
    </Typography>
    <LogOutButton className="log-in" />
  </div>
);

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);
