import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Button,
  Box,
  Grid,
} from '@material-ui/core';

class ListingItem extends Component {
  state = {};

  handleListingClick = () => {
    console.log(this.props.listing.id);
    this.props.dispatch({
      type: 'SET_LISTING_CLICKED',
      payload: this.props.listing,
    });
    this.props.history.push('/booking-confirmation');
  };

  render() {
    const { listing } = this.props;

    return (
      <Card elevation={10}>
        <Box m={1}>
          {/* <CardActionArea onClick={this.handleListingClick}> */}
          <CardContent>
            <Typography
              display="inline"
              color="primary"
              variant="h5"
              component="p"
            >
              Name:
            </Typography>
            <Typography display="inline" variant="h5">
              {' '}
              {listing.first_name}
            </Typography>
            <div></div>
            <Typography
              display="inline"
              color="primary"
              variant="h5"
              component="p"
            >
              Category:
            </Typography>

            <Typography display="inline" variant="h5">
              {' '}
              {listing.category}
            </Typography>
            <div></div>
            <Typography
              display="inline"
              color="primary"
              variant="h5"
              component="p"
            >
              Skill:
            </Typography>
            <Typography display="inline" variant="h5">
              {' '}
              {listing.skill_name}
            </Typography>
            <div></div>
            <Grid container justify="space-between">
              <Grid item>
                <Typography
                  display="inline"
                  color="primary"
                  variant="h5"
                  component="p"
                >
                  Rate:
                </Typography>

                <Typography display="inline" variant="h5">
                  {' '}
                  ${listing.price}/hour
                </Typography>
              </Grid>
              <Grid item>
                <Button onClick={this.handleListingClick} variant="contained">
                  SELECT
                </Button>
              </Grid>
            </Grid>
          </CardContent>
          {/* </CardActionArea> */}
        </Box>
      </Card>
    );
  }
}

export default connect(mapStoreToProps)(withRouter(ListingItem));
