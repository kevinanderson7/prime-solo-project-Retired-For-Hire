import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import {
  Grid,
  Card,
  CardActionArea,
  CardHeader,
  CardContent,
  Typography,
} from '@material-ui/core';

class SkillsListItem extends Component {
  state = {
    heading: '',
  };

  render() {
    const { skill } = this.props;
    // const skillsArray = this.props.store.skillsReducer.map((item, index) => {
    //   return (
    //     <Grid container spacing={3} key={item.id}>
    //       <Grid key={item.id} xs={4} item>
    //         <Card>
    //           <CardActionArea onClick={this.handleClickDetails}>
    //             <CardHeader />
    //             <CardContent>
    //               <Typography variant="h5" component="p">
    //                 Category: {item.category}
    //               </Typography>
    //               <Typography variant="h6" component="p">
    //                 Skill: {item.skill_name}
    //               </Typography>
    //             </CardContent>
    //           </CardActionArea>
    //         </Card>
    //         {/* <p>{item.skill_name}</p> */}
    //       </Grid>
    //     </Grid>
    //   );
    // });
    return (
      <div>
        <Card>
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
          <CardContent>
            <Typography variant="body2" component="p"></Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(SkillsListItem);
