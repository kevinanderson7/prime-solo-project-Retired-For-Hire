import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import {
  Card,
  CardActionArea,
  CardHeader,
  CardContent,
  Typography,
} from '@material-ui/core';

class ListingItem extends Component {
  state = {
    heading: '',
  };

  handleListingClick = () => {
    console.log(this.props.listing.id);
  };

  render() {
    const { listing } = this.props;

    return (
      <div>
        <Card>
          <CardActionArea onClick={this.handleListingClick}>
            <CardHeader>
              <Typography variant="h5" component="p">
                {listing.first_name}
              </Typography>
            </CardHeader>
            <CardContent>
              <Typography variant="h5" component="p">
                {listing.first_name}
              </Typography>
              <Typography variant="h5" component="p">
                Category: {listing.category}
              </Typography>
              <Typography variant="h6" component="p">
                Skill: {listing.skill_name}
              </Typography>
              <Typography variant="h5" component="p">
                ${listing.price} per hour
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(ListingItem);
