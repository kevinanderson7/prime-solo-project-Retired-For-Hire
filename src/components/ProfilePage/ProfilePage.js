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
} from '@material-ui/core';

class ProfilePage extends Component {
  state = {
    editClicked: false,
  };

  fileSelectedHandler = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
    });
  };

  fileUploadHandler = () => {
    console.log(this.state.selectedFile.name);
    //   const uploadData = new FormData();
    //   uploadData.append('image', this.state.selectedFile, this.state.selectedFile.name)
    // this.props.dispatch({
    //   type: 'UPDATE_AVATAR',
    //   payload: this.state.selectedFile,
    // });
  };
  handleBackClick = () => {
    this.props.history.push('/admin');
  };
  handleEditClick = () => {
    console.log('clicking edit');
    this.setState({
      editClicked: true,
    });
  };

  render() {
    return (
      <div>
        <Box m={3}>
          <Grid container justify="space-between">
            <Grid item>
              <Typography component="h2" variant="h4">
                User Dashboard
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
                    {/* <button onClick={this.fileUploadHandler}>Upload</button> */}
                    {/* <input type="file" onChange={this.fileSelectedHandler} /> */}

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

                          {/* <Button
                          variant="contained"
                          size="small"
                          display="inline"
                          onClick={this.handleEditClick}
                        >
                          Edit
                        </Button> */}
                        </Grid>
                        <Grid item>
                          <Grid item>
                            <Typography variant="h5" component="p">
                              Email: {this.props.store.user.email_address}
                            </Typography>
                          </Grid>
                          {/* <Grid item>
                              <Button
                                variant="contained"
                                size="small"
                                display="inline"
                              >
                                Edit
                              </Button>
                            </Grid> */}
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

export default connect(mapStoreToProps)(ProfilePage);
