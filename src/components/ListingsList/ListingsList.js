import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import ListingsItem from '../ListingsItem/ListingsItem';

import { Box, Grid } from '@material-ui/core';

class ListingsList extends Component {
  state = {
    heading: '',
  };

  render() {
    return (
      <div>
        <Box m={3}>
          <Grid container spacing={3} alignItems="flex-start">
            {this.props.store.listingsReducer.map((item, index) => {
              return (
                <Grid item xs={4} key={index}>
                  <ListingsItem listing={item} index={index} {...this.props} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(ListingsList);
