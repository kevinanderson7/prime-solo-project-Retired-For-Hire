import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import SkillsListItem from '../SkillsListItem/SkillsListItem';
import {
  Grid,
  Card,
  CardActionArea,
  CardHeader,
  CardContent,
  Typography,
  Box,
} from '@material-ui/core';

class SkillsList extends Component {
  state = {
    heading: '',
  };

  render() {
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
      <Box m={3}>
        <Grid container spacing={3} alignItems="flex-start">
          {this.props.store.skillsReducer.map((item, index) => {
            return (
              <Grid item xs={4} key={index}>
                <SkillsListItem skill={item} index={index} {...this.props} />
              </Grid>
            );
          })}
        </Grid>
        {/* {skillsArray} */}
        {/* {this.props.store.skillsReducer.map((item, index) => (
          <p key={index}>{item.skill_name}</p>
        ))} */}
      </Box>
    );
  }
}

export default connect(mapStoreToProps)(SkillsList);
