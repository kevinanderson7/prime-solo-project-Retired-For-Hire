import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';

//MaterialUI
import { Button, TextField, Typography, Grid } from '@material-ui/core';

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();
    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
      this.props.history.push('/admin');
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  render() {
    return (
      <form className="formPanel" onSubmit={this.login}>
        <Grid
          container
          alignItems="center"
          justify="flex-start"
          direction="column"
          spacing={2}
        >
          <Typography gutterBottom variant="h4" component="h2">
            Log in
          </Typography>
          {this.props.store.errors.loginMessage && (
            <h3 className="alert" role="alert">
              {this.props.store.errors.loginMessage}
            </h3>
          )}
          <Grid item>
            <TextField
              variant="outlined"
              label="Username"
              type="text"
              name="username"
              required
              value={this.state.username}
              onChange={this.handleInputChangeFor('username')}
            />
          </Grid>
          <Grid item>
            <TextField
              variant="outlined"
              label="Password"
              type="password"
              name="password"
              required
              value={this.state.password}
              onChange={this.handleInputChangeFor('password')}
            />
          </Grid>
          <Grid container justify="flex-end">
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                className="log-in"
                type="submit"
                name="submit"
                value="Log In"
              >
                Log In
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    );
  }
}

export default connect(mapStoreToProps)(withRouter(LoginForm));
