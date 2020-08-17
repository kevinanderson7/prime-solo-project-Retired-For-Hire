import React from 'react';
import './Footer.css';
import { makeStyles } from '@material-ui/core/styles';

//MaterialUI
import { Typography, Grid, Box, AppBar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    backgroundColor: 'black',
    color: 'white',
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar}>
      <Grid container justify="center" alignItems="center">
        <Grid item>
          <Typography component="h6" variant="body1">
            &copy; Retired For Hire
          </Typography>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Footer;
