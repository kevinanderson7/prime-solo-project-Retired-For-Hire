import React from 'react';
import './Footer.css';

//MaterialUI
import { Typography, Grid } from '@material-ui/core';
// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const Footer = () => (
  <footer>
    <Grid
      container
      direction="column-reverse"
      justify="flex-start"
      alignItems="center"
    >
      <Grid item>
        <Typography component="h6" variant="body1">
          &copy; Retired For Hire
        </Typography>
      </Grid>
    </Grid>
  </footer>
);

export default Footer;
