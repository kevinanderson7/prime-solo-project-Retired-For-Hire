import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import { Box, Grid, Typography, Button } from '@material-ui/core';
// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class Checkout extends Component {
  state = {
    heading: 'Checkout Page',
  };

  handleBackClick = () => {
    this.props.history.push('/listings');
  };
  render() {
    return (
      <div>
        <Box m={3}>
          <Grid container justify="space-between">
            <Grid item>
              <Typography gutterBottom component="h2" variant="h4">
                Checkout Page
              </Typography>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={this.handleBackClick}
              >
                Back
              </Button>
            </Grid>
          </Grid>
        </Box>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(Checkout);
