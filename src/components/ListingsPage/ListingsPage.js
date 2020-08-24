import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

//MaterialUI
import { Button, Typography, Grid, Box, ButtonGroup } from '@material-ui/core';
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

  handleNameClick = () => {
    this.props.dispatch({
      type: 'GET_LISTINGS_BY_NAME',
    });
  };
  handleCategoryClick = () => {
    this.props.dispatch({
      type: 'GET_ALL_LISTINGS',
    });
  };
  handlePriceClick = () => {
    this.props.dispatch({
      type: 'GET_LISTINGS_BY_PRICE',
    });
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
            <ButtonGroup size="small" aria-label="small outlined button group">
              <Button onClick={this.handleNameClick} variant="contained">
                Name
              </Button>
              <Button onClick={this.handleCategoryClick} variant="contained">
                Category
              </Button>
              <Button onClick={this.handlePriceClick} variant="contained">
                Price
              </Button>
            </ButtonGroup>
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
