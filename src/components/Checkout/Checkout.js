import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {
  Box,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
} from '@material-ui/core';

class Checkout extends Component {
  state = {
    contactClicked: false,
    copied: false,
  };

  handleBackClick = () => {
    this.props.history.push('/listings');
  };
  handleContactSellerClick = () => {
    this.setState({
      contactClicked: true,
    });
    console.log(this.state);
  };

  render() {
    if (this.state.contactClicked) {
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
                          <Typography variant="h5">Checkout</Typography>
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
                            Cost : $
                            {this.props.store.listingClickedReducer.price}
                            /hr
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                    <Grid container justify="center">
                      <Box m={3}>
                        <Grid item>
                          <Grid container spacing={1} alignItems="center">
                            <Grid item>
                              <Typography display="inline">
                                Seller's Email Address:
                              </Typography>
                            </Grid>
                            <Grid item>
                              <Typography color="primary" display="inline">
                                {
                                  this.props.store.listingClickedReducer
                                    .email_address
                                }
                              </Typography>
                            </Grid>
                            <Grid item>
                              <CopyToClipboard
                                text={
                                  this.props.store.listingClickedReducer
                                    .email_address
                                }
                                onCopy={() => this.setState({ copied: true })}
                              >
                                <Button variant="contained" display="inline">
                                  Copy to Clipboard
                                </Button>
                              </CopyToClipboard>
                            </Grid>
                            <Grid item>
                              {this.state.copied ? (
                                <div
                                  style={{ color: 'green', display: 'inline' }}
                                >
                                  Copied!
                                </div>
                              ) : null}
                            </Grid>
                          </Grid>
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
    } else {
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
                          <Typography variant="h5">Checkout</Typography>
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
                            Cost : $
                            {this.props.store.listingClickedReducer.price}
                            /hr
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                    <Grid container justify="center">
                      <Box m={3}>
                        <Grid item>
                          <Button
                            // onClick={this.handleContactSellerClick}
                            onClick={this.handleContactSellerClick}
                            variant="contained"
                            color="primary"
                          >
                            Contact Seller
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
}

export default connect(mapStoreToProps)(Checkout);
