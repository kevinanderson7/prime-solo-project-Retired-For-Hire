import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './ProfilePage.css';
import {
  Grid,
  Box,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardActions,
} from '@material-ui/core';

class ProfilePage extends Component {
  state = {
    heading: 'Profile Page',
  };

  render() {
    return (
      <div>
        <Box m={3}>
          <Typography variant="h2">{this.state.heading}</Typography>
          <Grid container justify="center" alignItems="center">
            <Grid item xs={8}>
              <Card elevation={3}>
                <CardActionArea>
                  <img
                    alt="user avatar"
                    className="user-photo"
                    src={this.props.store.user.avatar}
                  ></img>

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Name: {this.props.store.user.first_name}{' '}
                      {this.props.store.user.last_name}
                    </Typography>
                    <Typography variant="h5" component="p">
                      Email: {this.props.store.user.email_address}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions></CardActions>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(ProfilePage);
