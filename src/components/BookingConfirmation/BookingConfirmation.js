import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from '@material-ui/core';
import './BookingConfirmation.css';

class BookingConfirmation extends Component {
  state = {
    heading: 'Booking Confirmation Page',
  };

  handleConfirmClick = () => {
    this.props.history.push('/checkout');
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
          <Box mt={5}>
            <Grid container spacing={3} justify="center">
              <Grid item xs={11}>
                <Card elevation={10}>
                  <CardContent>
                    <Grid container justify="center">
                      <Grid item>
                        <Typography variant="h5">
                          Booking Confirmation
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container direction="column" spacing={2}>
                      <Grid item>
                        <Typography>
                          Seller's Name :{' '}
                          {this.props.store.listingClickedReducer.first_name}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography>
                          Skill Category :{' '}
                          {this.props.store.listingClickedReducer.category}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography>
                          Skill Description:{' '}
                          {this.props.store.listingClickedReducer.skill_name}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography>
                          Cost : ${this.props.store.listingClickedReducer.price}
                          /hr
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                  <Grid container justify="center">
                    <Box m={3}>
                      <Grid item>
                        <Button
                          onClick={this.handleConfirmClick}
                          variant="contained"
                          color="primary"
                        >
                          Confirm
                        </Button>
                      </Grid>
                    </Box>
                  </Grid>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(withRouter(BookingConfirmation));
