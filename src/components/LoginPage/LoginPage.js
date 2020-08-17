import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import LoginForm from '../LoginForm/LoginForm';

import './LoginPage.css';
//MaterialUI
import { Button } from '@material-ui/core';

class LoginPage extends Component {
  render() {
    return (
      <div className="login-page">
        <LoginForm />

        <center>
          <Button
            variant="contained"
            type="button"
            className="link-button"
            onClick={() => {
              this.props.history.push('/registration');
            }}
          >
            Register
          </Button>
        </center>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(LoginPage);
