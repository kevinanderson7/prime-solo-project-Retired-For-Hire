import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

//MaterialUI
import { Button, TextField, Typography, Grid, Box } from '@material-ui/core';

class RegisterForm extends Component {
  state = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
  };

  registerUser = (event) => {
    event.preventDefault();

    this.props.dispatch({
      type: 'REGISTER',
      payload: {
        username: this.state.username,
        password: this.state.password,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        avatar: '/images/blank-profile-pic.png',
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
        <Grid
          container
          alignItems="center"
          justify="flex-start"
          direction="column"
          spacing={2}
        >
          <Typography
            letterSpacing={6}
            gutterBottom
            variant="h4"
            component="h2"
          >
            Register Here
          </Typography>
          {this.props.errors.registrationMessage && (
            <h3 className="alert" role="alert">
              {this.props.errors.registrationMessage}
            </h3>
          )}
          <Grid item>
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
          </Grid>
          <Grid item>
            <TextField
              variant="outlined"
              label="Password"
              type="password"
              name="password"
              value={this.state.password}
              required
              onChange={this.handleInputChangeFor('password')}
            />
          </Grid>
          <Grid item>
            <TextField
              variant="outlined"
              label="First Name"
              type="text"
              name="firstName"
              value={this.state.firstName}
              required
              onChange={this.handleInputChangeFor('firstName')}
            />
          </Grid>
          <Grid item>
            <TextField
              variant="outlined"
              label="Last Name"
              type="text"
              name="lastName"
              value={this.state.lastName}
              required
              onChange={this.handleInputChangeFor('lastName')}
            />
          </Grid>
          <Grid item>
            <TextField
              variant="outlined"
              label="Email"
              type="text"
              name="email"
              value={this.state.email}
              required
              onChange={this.handleInputChangeFor('email')}
            />
          </Grid>

          <Grid container justify="flex-end">
            <Box m={1}>
              <Grid item>
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
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </form>
    );
  }
}

export default connect(mapStoreToProps)(RegisterForm);
