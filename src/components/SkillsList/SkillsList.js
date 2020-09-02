import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import SkillsListItem from '../SkillsListItem/SkillsListItem';
import { Grid, Box } from '@material-ui/core';

class SkillsList extends Component {
  state = {
    heading: '',
  };

  render() {
    return (
      <Box m={3}>
        <Grid container spacing={3} alignItems="flex-start">
          {this.props.store.skillsReducer.map((item, index) => {
            return (
              <Grid item xs={4} key={index}>
                <SkillsListItem skill={item} index={index} {...this.props} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    );
  }
}

export default connect(mapStoreToProps)(SkillsList);
