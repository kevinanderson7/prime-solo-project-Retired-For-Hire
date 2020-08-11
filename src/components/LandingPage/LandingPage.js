import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './LandingPage.css';

//MaterialUI
import { Button, Typography } from '@material-ui/core';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

class LandingPage extends Component {
  state = {
    heading: 'Welcome to Retired For Hire!',
  };

  onLogin = (event) => {
    this.props.history.push('/login');
  };

  render() {
    return (
      <div className="container">
        <Typography gutterBottom component="h2" variant="h4">
          {this.state.heading}
        </Typography>

        <div className="grid">
          <div className="grid-col grid-col_8">
            <Typography component="p" variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              id felis metus. Vestibulum et pulvinar tortor. Morbi pharetra
              lacus ut ex molestie blandit. Etiam et turpis sit amet risus
              mollis interdum. Suspendisse et justo vitae metus bibendum
              fringilla sed sed justo. Aliquam sollicitudin dapibus lectus,
              vitae consequat odio elementum eget. Praesent efficitur eros vitae
              nunc interdum, eu interdum justo facilisis. Sed pulvinar nulla ac
              dignissim efficitur. Quisque eget eros metus. Vestibulum bibendum
              fringilla nibh a luctus. Duis a sapien metus.
            </Typography>

            <Typography component="p" variant="body1">
              Praesent consectetur orci dui, id elementum eros facilisis id. Sed
              id dolor in augue porttitor faucibus eget sit amet ante. Nunc
              consectetur placerat pharetra. Aenean gravida ex ut erat commodo,
              ut finibus metus facilisis. Nullam eget lectus non urna rhoncus
              accumsan quis id massa. Curabitur sit amet dolor nisl. Proin
              euismod, augue at condimentum rhoncus, massa lorem semper lacus,
              sed lobortis augue mi vel felis. Duis ultrices sapien at est
              convallis congue.
            </Typography>

            <Typography component="p" variant="body1">
              Fusce porta diam ac tortor elementum, ut imperdiet metus volutpat.
              Suspendisse posuere dapibus maximus. Aliquam vitae felis libero.
              In vehicula sapien at semper ultrices. Vivamus sed feugiat libero.
              Sed sagittis neque id diam euismod, ut egestas felis ultricies.
              Nullam non fermentum mauris. Sed in enim ac turpis faucibus
              pretium in sit amet nisi.
            </Typography>
          </div>
          <div className="grid-col grid-col_4">
            <RegisterForm />

            <center>
              <Typography component="h4" variant="h6">
                Already a Member?
              </Typography>
              <Button
                variant="contained"
                className="btn btn_sizeSm"
                onClick={this.onLogin}
              >
                Login
              </Button>
            </center>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(LandingPage);
