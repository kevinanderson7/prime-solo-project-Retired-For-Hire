import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './ProfilePage.css';
import {
  Grid,
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  TextField,
} from '@material-ui/core';
import ImageUpload from '../ImageUpload/ImageUpload';

class ProfilePage extends Component {
  state = {
    firstName: this.props.user.first_name,
    lastName: this.props.user.last_name,
    email: this.props.user.email_address,
    id: this.props.user.id,
    editClicked: false,
  };

  handleBackClick = () => {
    this.props.history.push('/admin');
  };
  handleEditClick = () => {
    console.log('clicking edit');
    this.setState({
      ...this.state,
      editClicked: true,
    });
  };
  handleSaveClick = () => {
    console.log('clicking save');
    this.setState({
      ...this.state,
      editClicked: false,
    });
    this.props.dispatch({
      type: 'UPDATE_USER',
      payload: this.state,
    });
  };
  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' });
  }

  render() {
    if (this.state.editClicked) {
      return (
        <div>
          <Box m={3}>
            <Grid container justify="space-between">
              <Grid item>
                <Typography component="h2" variant="h4">
                  {this.props.store.user.first_name}'s Dashboard
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
            <Box mt={6}>
              <Grid container justify="center" alignItems="center">
                <Grid item xs={8}>
                  <Card elevation={10}>
                    <Box m={2}>
                      <Grid
                        container
                        alignItems="flex-start"
                        justify="space-between"
                      >
                        <Grid item>
                          <img
                            alt="user avatar"
                            className="user-photo"
                            src={this.props.store.user.avatar}
                          ></img>
                          <ImageUpload id={this.props.store.user.id} />
                        </Grid>
                        <Grid item>
                          <Button
                            variant="contained"
                            size="small"
                            display="inline"
                            onClick={this.handleSaveClick}
                          >
                            Save
                          </Button>
                        </Grid>
                      </Grid>

                      <CardContent>
                        <Grid container direction="column" spacing={3}>
                          <Grid item>
                            <TextField
                              variant="outlined"
                              onChange={this.handleInputChangeFor('firstName')}
                              label="First Name"
                              value={this.state.firstName}
                            ></TextField>
                            <TextField
                              variant="outlined"
                              onChange={this.handleInputChangeFor('lastName')}
                              value={this.state.lastName}
                              label="Last Name"
                            ></TextField>
                          </Grid>
                          <Grid item>
                            <Grid item>
                              <TextField
                                variant="outlined"
                                onChange={this.handleInputChangeFor('email')}
                                value={this.state.email}
                                label="Email Address"
                              ></TextField>
                            </Grid>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Box>
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
                <Typography component="h2" variant="h4">
                  {this.props.store.user.first_name}'s Dashboard
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
            <Box mt={6}>
              <Grid container justify="center" alignItems="center">
                <Grid item xs={8}>
                  <Card elevation={10}>
                    <Box m={2}>
                      <Grid
                        container
                        alignItems="flex-start"
                        justify="space-between"
                      >
                        <Grid item>
                          <img
                            alt="user avatar"
                            className="user-photo"
                            src={this.props.store.user.avatar}
                          ></img>
                        </Grid>
                        <Grid item>
                          <Button
                            variant="contained"
                            size="small"
                            display="inline"
                            onClick={this.handleEditClick}
                          >
                            Edit
                          </Button>
                        </Grid>
                      </Grid>

                      <CardContent>
                        <Grid container direction="column" spacing={3}>
                          <Grid item>
                            <Typography
                              display="inline"
                              gutterBottom
                              variant="h5"
                              component="h2"
                            >
                              Name: {this.props.store.user.first_name}{' '}
                              {this.props.store.user.last_name}
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Grid item>
                              <Typography variant="h5" component="p">
                                Email: {this.props.store.user.email_address}
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid item>
                            <Grid item>
                              <Typography variant="h5" component="p">
                                Username: {this.props.store.user.username}
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Box>
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

export default connect(mapStoreToProps)(ProfilePage);
