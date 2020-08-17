import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './SellerPage.css';
//MaterialUI
import { Grid, Button, Typography, Box } from '@material-ui/core';
import SellerForm from '../SellerForm/SellerForm';
import SkillsList from '../SkillsList/SkillsList';

class SellerPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_SKILLS',
      payload: {
        userId: this.props.store.user.id,
      },
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
            <Grid item>
              <Typography component="h2" variant="h4">
                {this.state.heading}
              </Typography>
            </Grid>
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

          <SkillsList />
        </div>
      </Box>
    );
  }
}

export default connect(mapStoreToProps)(SellerPage);
