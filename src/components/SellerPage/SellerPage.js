import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './SellerPage.css';
//MaterialUI
import {
  Grid,
  Button,
  Typography,
  Box,
  Card,
  CardContent,
} from '@material-ui/core';
import SellerForm from '../SellerForm/SellerForm';
import SkillsList from '../SkillsList/SkillsList';

class SellerPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_SKILLS',
      payload: this.props.store.user.id,
    });
  }
  state = {
    heading: 'Seller Page',
  };
  handleBackClick = () => {
    this.props.history.push('/admin');
  };
  render() {
    return (
      <Box m={3}>
        <div>
          <Grid container justify="space-between">
            <Box mb={3}>
              <Grid item>
                <Typography component="h2" variant="h4">
                  Your Seller Dashboard
                </Typography>
              </Grid>
            </Box>
            <Grid item>
              <Button
                onClick={this.handleBackClick}
                variant="contained"
                color="primary"
              >
                Back
              </Button>
            </Grid>
          </Grid>

          <SellerForm />
          <Box ml={3} mt={4} mb={4}>
            <Grid container>
              <Grid item>
                <Card>
                  <CardContent>
                    <Typography variant="h5">Your Marketed Skills:</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
          <SkillsList />
        </div>
      </Box>
    );
  }
}

export default connect(mapStoreToProps)(SellerPage);
