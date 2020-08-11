import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import LoginForm from '../LoginForm/LoginForm';

//MaterialUI
import { Button } from '@material-ui/core';

class LoginPage extends Component {
  render() {
    return (
      <div>
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
