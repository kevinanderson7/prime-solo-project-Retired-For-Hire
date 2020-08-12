import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

//MaterialUI
import {
  Grid,
  Button,
  Typography,
  TextField,
  MenuItem,
} from '@material-ui/core';

class SellerForm extends Component {
  state = {
    skillName: '',
    category: '',
    price: '',
  };
  categories = [
    {
      value: 'test category',
      label: 'test category',
    },
  ];

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.addSeller}>
        <Grid container>
          <Grid item>
            <TextField
              variant="outlined"
              id="outlined-basic"
              type="text"
              label="Add a skill"
              name="skillName"
              //   value={this.state.username}
              required
              onChange={this.handleInputChangeFor('skillName')}
            />
          </Grid>
          <Grid item>
            <TextField
              variant="outlined"
              select
              value={this.state.category}
              SelectProps={{}}
              id="outlined-basic"
              type="text"
              label="Category"
              helperText="Please select a skill category"
              //   value={this.state.username}
              required
              onChange={this.handleInputChangeFor('category')}
            >
              {this.categories.map((item, index) => (
                <MenuItem key={index} value={item.value}>
                  {item.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item>
            <TextField
              variant="outlined"
              id="outlined-basic"
              type="text"
              label="Hourly Wage"
              name="price"
              //   value={this.state.username}
              required
              onChange={this.handleInputChangeFor('price')}
            />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              className="register"
              type="submit"
              name="submit"
              value="Register"
            >
              Add Skill
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}

export default connect(mapStoreToProps)(SellerForm);
