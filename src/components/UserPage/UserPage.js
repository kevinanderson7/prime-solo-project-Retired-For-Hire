import React from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';

//MaterialUI

import {
  Typography,
  Grid,
  Container,
  Card,
  Button,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Box,
} from '@material-ui/core';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`

const UserPage = (props) => (
  <Container maxWidth="lg">
    {/* <img src="/images/retired-image.jpg"></img> */}
    <Grid container justify="space-between" alignItems="center">
      <Grid item>
        <Typography gutterBottom component="h1" variant="h3" id="welcome">
          Welcome, {props.store.user.username}!
        </Typography>
      </Grid>
      <Grid item>
        <Typography gutterBottom variant="h6" component="p">
          Your ID is: {props.store.user.id}
        </Typography>
      </Grid>
      <Grid>
        <LogOutButton className="log-in" />
      </Grid>
    </Grid>
    <Box mt={4}>
      <Grid container justify="center" alignItems="center">
        <Grid item>
          <Typography component="h2" variant="h4">
            Are you:
          </Typography>
        </Grid>
      </Grid>
    </Box>
    <Grid container justify="space-evenly">
      <Grid item xs={5}>
        <Box mt={4}>
          <Card>
            <CardActionArea>
              <CardMedia />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Looking to Hire?
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Grid>
      <Grid item xs={5}>
        <Box mt={4}>
          <Card>
            <CardActionArea>
              <CardMedia
              // title="Contemplative Reptile"
              // image="./retired-image.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Or Retired?
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Grid>
    </Grid>
  </Container>
);

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);
