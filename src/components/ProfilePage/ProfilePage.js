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
  CardHeader,
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
          <Grid container justify="center">
            <Grid item xs={4}>
              <Card elevation={3}>
                <CardActionArea>
                  <img
                    className="user-photo"
                    src={this.props.store.user.avatar}
                  ></img>

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Or retired?
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Description text
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
