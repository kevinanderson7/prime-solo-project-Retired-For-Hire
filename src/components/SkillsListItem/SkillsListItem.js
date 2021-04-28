import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Button,
  Box,
} from '@material-ui/core';

class SkillsListItem extends Component {
  state = {
    heading: '',
  };

  handleDeleteClick = (event) => {
    console.log('clicking delete');
    console.log(this.props.skill);
    this.props.dispatch({
      type: 'DELETE_SKILL',
      payload: this.props.skill,
    });
  };

  render() {
    const { skill } = this.props;

    return (
      <div>
        <Card elevation={10}>
          <Box m={1}>
            <Grid container justify="space-between" alignItems="flex-start">
              <Grid item xs={10}>
                <CardHeader
                  title={skill.skill_name}
                  titleTypographyProps={{
                    variant: 'h6',
                    component: 'h3',
                  }}
                  subheader={`${skill.category}`}
                  subheaderTypographyProps={{
                    variant: 'subtitle1',
                    component: 'span',
                  }}
                />
              </Grid>
              <Grid item xs={2}>
                <Button
                  onClick={this.handleDeleteClick}
                  size="small"
                  variant="contained"
                >
                  X
                </Button>
              </Grid>
            </Grid>
            <CardContent>
              <Typography variant="body2" component="p">
                ${skill.price}/hour
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(SkillsListItem);
