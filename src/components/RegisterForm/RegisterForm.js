import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

//MaterialUI
import { Button, TextField, Typography } from '@material-ui/core';

class RegisterForm extends Component {
  state = {
    username: '',
    password: '',
  };

  registerUser = (event) => {
    event.preventDefault();

    this.props.dispatch({
      type: 'REGISTER',
      payload: {
        username: this.state.username,
        password: this.state.password,
      },
    });
  }; // end registerUser

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  render() {
    return (
      <form className="formPanel" onSubmit={this.registerUser}>
        <Typography gutterBottom variant="h4" component="h2">
          Register User
        </Typography>
        {this.props.errors.registrationMessage && (
          <h3 className="alert" role="alert">
            {this.props.errors.registrationMessage}
          </h3>
        )}
        <div>
          <TextField
            variant="outlined"
            id="outlined-basic"
            type="text"
            label="Username"
            name="username"
            value={this.state.username}
            required
            onChange={this.handleInputChangeFor('username')}
          />
        </div>
        <div>
          <TextField
            variant="outlined"
            label="Password"
            type="password"
            name="password"
            value={this.state.password}
            required
            onChange={this.handleInputChangeFor('password')}
          />
        </div>
        <div>
          <Button
            variant="contained"
            color="primary"
            className="register"
            type="submit"
            name="submit"
            value="Register"
          >
            Register
          </Button>
        </div>
      </form>
    );
  }
}

export default connect(mapStoreToProps)(RegisterForm);
