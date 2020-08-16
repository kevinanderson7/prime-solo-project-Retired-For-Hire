import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import ReactPlayer from 'react-player/youtube';
import { Grid, Typography } from '@material-ui/core';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class AboutPage extends Component {
  state = {
    heading: 'About Page',
  };

  render() {
    return (
      <Grid container justify="center">
        <Grid item>
          <Typography component="h2" variant="h4">
            {this.state.heading}
          </Typography>
          <ReactPlayer url="https://www.youtube.com/watch?v=3-9WYO_MQ20" />
        </Grid>
      </Grid>
    );
  }
}

export default connect(mapStoreToProps)(AboutPage);
