import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

//MaterialUI
import { Button, Typography, Grid, Box } from '@material-ui/core';

class ListingsPage extends Component {
  state = {
    heading: 'Listings Page',
  };

  handleBackClick = () => {
    this.props.history.push('/admin');
  };

  render() {
    return (
      <Box m={3}>
        <Grid container justify="space-between">
          <Grid item>
            <Typography component="h2" variant="h4">
              {this.state.heading}
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
        <Grid container>
          <Grid item>List of sellers</Grid>
        </Grid>
      </Box>
    );
  }
}

export default connect(mapStoreToProps)(ListingsPage);
