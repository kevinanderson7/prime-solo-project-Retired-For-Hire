import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

//MaterialUI
import { Button, Typography, Grid, Box } from '@material-ui/core';
import ListingsList from '../ListingsList/ListingsList';

class ListingsPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_ALL_LISTINGS',
    });
  }

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
              Available For Hire:
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
          <Grid item>
            <ListingsList />
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default connect(mapStoreToProps)(ListingsPage);
