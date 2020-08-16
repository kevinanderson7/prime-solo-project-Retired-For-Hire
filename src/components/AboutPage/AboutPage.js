import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import ReactPlayer from 'react-player/youtube';

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
      <div>
        <h2>{this.state.heading}</h2>
        <ReactPlayer url="https://www.youtube.com/watch?v=3-9WYO_MQ20" />
      </div>
    );
  }
}

export default connect(mapStoreToProps)(AboutPage);
