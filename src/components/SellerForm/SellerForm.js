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
  Paper,
  Box,
} from '@material-ui/core';

class SellerForm extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_SKILLS',
      payload: {
        userId: this.props.store.user.id,
      },
    });
    console.log(this.props.store);
  }
  state = {
    skillName: '',
    category: '',
    price: '',
  };
  categories = [
    {
      value: 'Finance',
      label: 'Finance',
    },
    {
      value: 'Human Resources',
      label: 'Human Resources',
    },
    {
      value: 'Fitness',
      label: 'Fitness',
    },
    {
      value: 'Legal',
      label: 'Legal',
    },
    {
      value: 'Writing',
      label: 'Writing',
    },
    {
      value: 'Administration',
      label: 'Administration',
    },
  ];
  handleSkillAdd = (event) => {
    event.preventDefault();
    // this.props.dispatch({
    //   type: 'ADD_SELLER',
    //   payload: {
    //     userId: this.props.store.user.id,
    //   },
    // });
    this.props.dispatch({
      type: 'ADD_SKILL',
      payload: {
        skillName: this.state.skillName,
        category: this.state.category,
        price: this.state.price,
        userId: this.props.store.user.id,
      },
    });
    this.setState({
      skillName: '',
      category: '',
      price: '',
    });
    this.props.dispatch({
      type: 'GET_SKILLS',
      payload: {
        userId: this.props.store.user.id,
      },
    });
  };

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
    console.log(this.state);
  };

  render() {
    console.log(this.props.store);

    return (
      <div>
        <Grid container>
          <Grid item>
            <Paper elevation={3}>
              <Box p={5}>
                <form onSubmit={this.handleSkillAdd}>
                  <Grid container>
                    <Grid item>
                      <Typography gutterBottom variant="h4" component="h3">
                        Add a new skill
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container alignItems="flex-start" spacing={2}>
                    <Grid item>
                      <TextField
                        variant="outlined"
                        id="outlined-basic"
                        type="text"
                        label="Add a skill"
                        name="skillName"
                        value={this.state.skillName}
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
                  </Grid>
                  <Grid container justify="flex-end">
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
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(SellerForm);
