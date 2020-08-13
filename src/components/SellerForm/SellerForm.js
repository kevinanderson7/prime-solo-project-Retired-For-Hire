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
    {
      value: 'test category2',
      label: 'test category2',
    },
    {
      value: 'test category3',
      label: 'test category3',
    },
    {
      value: 'test category4',
      label: 'test category4',
    },
  ];
  handleSkillAdd = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: 'ADD_SKILL',
      payload: {
        skillName: this.state.skillName,
        category: this.state.category,
        price: this.state.price,
        firstName: this.props.store.user.first_name,
        lastName: this.props.store.user.last_name,
        email: this.props.store.user.email_address,
      },
    });
    // this.props.dispatch({
    //   type: 'ADD_SELLER',
    //   payload: {
    //     firstName: this.props.store.user.first_name,
    //     lastName: this.props.store.user.last_name,
    //     email: this.props.store.user.email_address,
    //   },
    // });
  };

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.addSeller}>
        <Grid container alignItems="flex-start" spacing={2}>
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
              type="number"
              label="Hourly Wage"
              name="price"
              value={this.state.price}
              required
              helperText="In USD"
              onChange={this.handleInputChangeFor('price')}
            />
          </Grid>
          <Grid item>
            <Button
              onClick={this.handleSkillAdd}
              variant="contained"
              color="primary"
              type="submit"
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
