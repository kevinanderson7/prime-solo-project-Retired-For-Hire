import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import { Grid } from '@material-ui/core';

class SkillsList extends Component {
  state = {
    heading: 'Class Component',
  };

  render() {
    console.log(typeof this.props.store.skillsReducer);
    const skills = Object.keys(this.props.store.skillsReducer);
    console.log(skills);
    const skillsArray = this.props.store.skillsReducer.map((item, index) => {
      return (
        <div key={item.id}>
          <Grid container justify="center">
            <Grid key={item.id} xs={12} item>
              <p>{item.skill_name}</p>
            </Grid>
          </Grid>
        </div>
      );
    });
    return (
      <div>
        {skillsArray}
        {/* {this.props.store.skillsReducer.map((item, index) => (
          <p key={index}>{item.skill_name}</p>
        ))} */}
      </div>
    );
  }
}

export default connect(mapStoreToProps)(SkillsList);
